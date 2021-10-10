import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'
import {getCampaignLeads} from '../../campaigns/api/campaigns'

import {getContactsApi} from '../api/contacts'
import {contactActionTypes} from './contact'
import {Contact} from './models'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const contactsActionTypes = {
  FetchContacts: '[Contacts] Fetch',
  LoadingContacts: '[Contacts] Loading',
  ContactsLoaded: '[Contacts] Loaded',
  ContactsError: '[Contacts] Error',
}

export interface InitialContacstStateType {
  contacts: Contact[]
  loadingContacts?: boolean
  error?: any
}

const initialContacts: InitialContacstStateType = {
  contacts: [],
  loadingContacts: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-contacts', whitelist: []},
  (state: InitialContacstStateType = initialContacts, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case contactsActionTypes.LoadingContacts: {
        return {...state, loadingContacts: true}
      }

      case contactsActionTypes.ContactsLoaded: {
        return {...state, contacts: action.payload.reverse(), loadingContacts: false}
      }

      case contactsActionTypes.ContactsError: {
        return {
          ...state,
          error: action.payload,
        }
      }

      case contactActionTypes.ContactLoaded: {
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        }
      }

      case contactActionTypes.ContactUpdated: {
        return {
          ...state,
          contacts: state.contacts.map((contact) => {
            if (contact.id === action.payload.id) {
              return action.payload
            }
            return contact
          }),
        }
      }

      default:
        return state
    }
  }
)

export const contactsActions = {
  loadingContacts: () => ({type: contactsActionTypes.LoadingContacts}),
  fetchContacts: (id: any) => ({type: contactsActionTypes.FetchContacts, id}),
  contactsLoaded: (payload: any) => ({type: contactsActionTypes.ContactsLoaded, payload}),
  contactsError: (payload: any) => ({type: contactsActionTypes.ContactsError, payload}),
}

function* getContacts({id}: any): any {
  yield put(contactsActions.loadingContacts())
  try {
    const api = id ? getCampaignLeads : getContactsApi
    const response = yield call(api, id)
    yield put(contactsActions.contactsLoaded(response.data))
  } catch (err: any) {
    yield put(contactsActions.contactsError(err))
    throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(contactsActionTypes.FetchContacts, getContacts)
}
