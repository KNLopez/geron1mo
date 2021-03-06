import {all} from 'redux-saga/effects'
import {combineReducers} from 'redux'

import * as auth from '../../app/modules/auth'
import {contacts} from '../../app/pages/contacts/state'
import {contact} from '../../app/pages/contacts/state'
import {campaigns} from '../../app/pages/campaigns/state'
import {campaign} from '../../app/pages/campaigns/state'
import {studio} from '../../app/pages/studios/state'
import {studios} from '../../app/pages/studios/state'
import {studio_dashboard} from '../../app/pages/studioDashboard/state'
import {studio_dashboards} from '../../app/pages/studioDashboard/state'
import {user} from '../../app/pages/users/state'
import {users} from '../../app/pages/users/state'
import {modal} from '../../app/components/modals/state'
import {pipeline} from '../../app/pages/pipeline/state'

export const rootReducer = combineReducers({
  auth: auth.reducer,
  campaign: campaign.reducer,
  campaigns: campaigns.reducer,
  contacts: contacts.reducer,
  contact: contact.reducer,
  pipeline: pipeline.reducer,
  studio: studio.reducer,
  studios: studios.reducer,
  studio_dashboard: studio_dashboard.reducer,
  studio_dashboards: studio_dashboards.reducer,
  user: user.reducer,
  users: users.reducer,
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
    pipeline.saga(),
    studio.saga(),
    studios.saga(),
    user.saga(),
    users.saga(),
  ])
}
