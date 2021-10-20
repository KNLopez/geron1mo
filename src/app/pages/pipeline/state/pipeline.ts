import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'

import {getCampaignLeads} from '../../campaigns/api/campaigns'
import {getContactsApi} from '../../contacts/api/contacts'
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
  SetData: '[Pipeline] SetData',
}

export interface InitialPipelineStateType {
  data: any
  error?: any
}

const initialPipeline: InitialPipelineStateType = {
  data: {
    open: [
      {
        id: '414141',
        title: 'yayaya',
      },
      {
        id: '4142141',
        title: 'yay4aya',
      },
      {
        id: '4134141',
        title: 'yay4aya',
      },
    ],

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
  setData: (payload: any) => ({type: pipelineActionTypes.SetData, payload}),
}

const getContacts = (state: any) => state.contacts

function* getPipeline(): any {
  const response = yield call(getContactsApi)
  yield put(contactsActions.contactsLoaded(response.data))

  const {contacts} = yield select(getContacts)
  let pipelineData: any = {}
  yield contacts.forEach((contact: any) => {
    console.log(pipelineData[contact.status || 'open'])
    !pipelineData[contact.status || 'open']
      ? (pipelineData[contact.status || 'open'] = [contact])
      : pipelineData[contact.status || 'open'].push(contact)
  })

  yield put(pipelineActions.setData(pipelineData))
}

export function* saga() {
  yield takeLatest(pipelineActionTypes.ProcessData, getPipeline)
}
