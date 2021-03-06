import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'

import {getCampaignLeads} from '../../campaigns/api/campaigns'
import {getContactsApi, updateContactApi} from '../../contacts/api/contacts'
import {contactActionTypes} from '../../contacts/state/contact'
import {contactsActions} from '../../contacts/state/contacts'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const select: any = Eff.select
const put: any = Eff.put

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const pipelineActionTypes = {
  ProcessData: '[Pipeline] Process',
  ChangeStatus: '[Pipeline] Change Status',
  SetData: '[Pipeline] SetData',
  UpdateContact: '[Pipeline] UpdateContact',
  SetFilteredData: '[Pipeline] Set Filtered Data',
}

export interface InitialPipelineStateType {
  data: any
  error?: any
  filteredData: any
}

const initialData = {
  open: [],
  won: [],
  paid: [],
  cancelled: [],
  lost: [],
}

const initialPipeline: InitialPipelineStateType = {
  data: initialData,
  filteredData: initialData,
  error: undefined,
}

function getLastWeek() {
  var today = new Date()
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
  return lastWeek
}

const lastWeek = getLastWeek()

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-pipeline', whitelist: []},
  (state: InitialPipelineStateType = initialPipeline, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case pipelineActionTypes.ProcessData: {
        return {...state, loadingPipeline: true}
      }

      case pipelineActionTypes.SetData: {
        let filteredData: any = {
          open: [],
          won: [],
          paid: [],
          cancelled: [],
          lost: [],
        }
        Object.entries(action.payload).forEach((data) => {
          const [key, items]: any = data
          const newItems = items.filter((item: any) => {
            const dateFilter =
              new Date(item.created_at) > new Date(lastWeek) &&
              new Date(item.created_at) < new Date(Date.now())

            if (dateFilter) return dateFilter
          })
          filteredData[key] = newItems
        })

        return {...state, data: action.payload, filteredData}
      }

      case pipelineActionTypes.SetFilteredData: {
        return {...state, filteredData: action.payload}
      }

      case pipelineActionTypes.UpdateContact: {
        const {status}: any = action.payload
        const newData = state.data[status].map((data: any) => {
          if (data.id === action.payload.id) {
            return action.payload
          }
          return data
        })

        return {
          ...state,
          data: {
            ...state.data,
            [status]: newData,
          },
        }
      }

      default:
        return state
    }
  }
)

export const pipelineActions = {
  processData: () => ({type: pipelineActionTypes.ProcessData}),
  changeStatus: (payload: any) => ({type: pipelineActionTypes.ChangeStatus, payload}),
  setData: (payload: any) => ({type: pipelineActionTypes.SetData, payload}),
  setFilteredData: (payload: any) => ({type: pipelineActionTypes.SetFilteredData, payload}),
  updateContact: (lead: any) => ({type: pipelineActionTypes.UpdateContact, payload: lead}),
}

const getContacts = (state: any) => state.contacts

function* getPipeline(): any {
  try {
    const response = yield call(getContactsApi)
    yield put(contactsActions.contactsLoaded(response.data))
    const {contacts} = yield select(getContacts)
    let pipelineData: any = {
      open: [],
      won: [],
      paid: [],
      cancelled: [],
      lost: [],
    }
    yield contacts.forEach((contact: any) => {
      !pipelineData[contact.status || 'open']
        ? (pipelineData[contact.status || 'open'] = [contact])
        : pipelineData[contact.status || 'open'].push(contact)
    })

    yield put(pipelineActions.setData(pipelineData))
  } catch (err) {
    console.log(err)
  }
}

function* changeStatus({payload}: any): any {
  const {oldData, newData, contact, status} = payload
  try {
    const newContact = {...contact, status}
    yield put(pipelineActions.setData(newData))
    yield call(updateContactApi, newContact)
  } catch (err) {
    yield put(pipelineActions.setData(oldData))
  }
}

function* updateContact({lead}: any): any {
  yield put(pipelineActions.updateContact(lead))
}

export function* saga() {
  yield takeLatest(pipelineActionTypes.ProcessData, getPipeline)
  yield takeLatest(pipelineActionTypes.ChangeStatus, changeStatus)
  yield takeLatest(contactActionTypes.ContactUpdate, updateContact)
}
