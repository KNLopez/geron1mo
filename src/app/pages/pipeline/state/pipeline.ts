import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'

import {getCampaignLeads} from '../../campaigns/api/campaigns'
import {getContactsApi, updateContactApi} from '../../contacts/api/contacts'
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

      default:
        return state
    }
  }
)

export const pipelineActions = {
  processData: () => ({type: pipelineActionTypes.ProcessData}),
  changeStatus: (payload: any) => ({type: pipelineActionTypes.ChangeStatus, payload}),
  setData: (payload: any) => ({type: pipelineActionTypes.SetData, payload}),
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

export function* saga() {
  yield takeLatest(pipelineActionTypes.ProcessData, getPipeline)
  yield takeLatest(pipelineActionTypes.ChangeStatus, changeStatus)
}
