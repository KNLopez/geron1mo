import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import {contacts} from '../../app/pages/contacts/state'
import {contact} from '../../app/pages/contacts/state'
import {campaigns} from '../../app/pages/campaigns/state'
import {campaign} from '../../app/pages/campaigns/state'
import {studio} from '../../app/pages/studios/state'
import {studios} from '../../app/pages/studios/state'
import {modal} from '../../app/components/modals/state'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  contacts: contacts.reducer,
  contact: contact.reducer,
  campaign: campaign.reducer,
  campaigns: campaigns.reducer,
  studio: studio.reducer,
  studios: studios.reducer,
  modal: modal.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export function* rootSaga() {
  yield all([
    auth.saga(),
    contacts.saga(),
    contact.saga(),
    campaign.saga(),
    campaigns.saga(),
    studio.saga(),
    studios.saga(),
  ])
}
