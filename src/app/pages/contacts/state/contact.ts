import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'
import {createContactApi, getContactApi, updateContactApi} from '../api/contacts'
import {ActionWithPayload} from './contacts'
import {Customer} from './models'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export const contactActionTypes = {
  FetchContact: '[Contact] Fetch',
  LoadingContact: '[Contact] Loading',
  CreateContact: '[Contact] Create',
  ContactUpdate: '[Contact] Update',
  ContactUpdated: '[Contact] Updated',
  ContactLoaded: '[Contact] Loaded',
  SetContact: '[Contact] Set',
  ResetContact: '[Contact] Reset',
  ContactError: '[Contact] Error',
}

export interface InitialContactStateType {
  contact: Customer
  loadingContact?: boolean
  error?: any
}

const initialContact: InitialContactStateType = {
  contact: {
    id: '',
    firstname: '',
    lastname: '',
    status: undefined,
    phone: '',
    campaign_name: '',
    assigned: '',
    email: '',
    created_at: undefined,
  },
  loadingContact: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-contact', whitelist: []},
  (state: InitialContactStateType = initialContact, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case contactActionTypes.LoadingContact: {
        return {...state, loadingContact: true, error: undefined}
      }
      case contactActionTypes.SetContact:
      case contactActionTypes.ContactLoaded: {
        return {...state, contact: action.payload, loadingContact: false}
      }

      case contactActionTypes.ContactError: {
        return {
          ...state,
          error: action.payload,
        }
      }

      case contactActionTypes.ContactUpdate: {
        return {...state, loadingContact: true, error: undefined}
      }

      case contactActionTypes.ContactUpdated: {
        return {...state, loadingContact: false}
      }

      case contactActionTypes.CreateContact: {
        return {
          ...state,
          contact: action.payload,
        }
      }

      case contactActionTypes.ResetContact: {
        return initialContact
      }

      default:
        return state
    }
  }
)

export const contactActions = {
  loadingContact: () => ({type: contactActionTypes.LoadingContact}),
  fetchContact: () => ({type: contactActionTypes.FetchContact}),
  resetContact: () => ({type: contactActionTypes.ResetContact}),
  updateContact: (lead: any) => ({type: contactActionTypes.ContactUpdate, lead}),
  createContact: (lead: any) => ({type: contactActionTypes.CreateContact, lead}),
  setContact: (payload: any) => ({type: contactActionTypes.SetContact, payload}),
  contactLoaded: (payload: any) => ({type: contactActionTypes.ContactLoaded, payload}),
  contactUpdated: (payload: any) => ({type: contactActionTypes.ContactUpdated, payload}),
  contactError: (payload: any) => ({type: contactActionTypes.ContactError, payload}),
}

function* getContact(payload: any): any {
  yield put(contactActions.loadingContact())
  try {
    const response = yield call(getContactApi(payload))
    yield put(contactActions.contactLoaded(response.data))
  } catch (err: any) {
    yield put(contactActions.contactError(err))
    throw new Error(err)
  }
}

function* createContact({lead}: any): any {
  yield put(contactActions.loadingContact())
  try {
    const response = yield call(createContactApi, lead)
    yield put(contactActions.contactLoaded(response.data))
  } catch (err: any) {
    yield put(contactActions.contactError(err))
    throw new Error(err)
  }
}

function* updateContact({lead}: any): any {
  yield put(contactActions.loadingContact())
  try {
    const response = yield call(updateContactApi, lead)
    yield put(contactActions.contactUpdated(response.data))
  } catch (err: any) {
    yield put(contactActions.contactError(err))
    throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(contactActionTypes.FetchContact, getContact)
  yield takeLatest(contactActionTypes.CreateContact, createContact)
  yield takeLatest(contactActionTypes.ContactUpdate, updateContact)
}
