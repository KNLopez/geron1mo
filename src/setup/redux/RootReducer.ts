import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import {contacts} from '../../app/pages/contacts/state'
import {contact} from '../../app/pages/contacts/state'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  contacts: contacts.reducer,
  contact: contact.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([auth.saga(), contacts.saga(), contact.saga()])
}
