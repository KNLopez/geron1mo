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
}

export interface InitialPipelineStateType {
  data: any
  error?: any
}

const initialPipeline: InitialPipelineStateType = {
  data: {
    open: [],
    won: [],
    paid: [],
    cancelled: [],
    lost: [],
  },
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-pipeline', whitelist: []},
  (state: InitialPipelineStateType = initialPipeline, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case pipelineActionTypes.ProcessData: {
        return {...state, loadingPipeline: true}
      }

      case pipelineActionTypes.SetData: {
        return {...state, data: action.payload}
      }

      case pipelineActionTypes.UpdateContact: {
        const {status}: any = action.payload
        const newData = state.data[status].map((data: any) => {
          if (data.id === action.payload.id) {
            return action.payload
          }
          return data
        })
        console.log(status, newData, action.payload)
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
