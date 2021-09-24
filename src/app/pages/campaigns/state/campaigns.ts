import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'

import {getCampaignsApi} from '../api/campaigns'
import {Campaign} from './models'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const campaignsActionTypes = {
  FetchCampaigns: '[Campaigns] Fetch',
  LoadingCampaigns: '[Campaigns] Loading',
  CampaignsLoaded: '[Campaigns] Loaded',
  CampaignsError: '[Campaigns] Error',
}

export interface InitialCampaignStateType {
  campaigns: Campaign[]
  loadingCampaigns?: boolean
  error?: any
}

const initialCampaigns: InitialCampaignStateType = {
  campaigns: [],
  loadingCampaigns: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-campaigns', whitelist: []},
  (state: InitialCampaignStateType = initialCampaigns, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case campaignsActionTypes.LoadingCampaigns: {
        return {...state, loadingCampaigns: true}
      }

      case campaignsActionTypes.CampaignsLoaded: {
        return {...state, campaigns: action.payload, loadingCampaigns: false}
      }

      case campaignsActionTypes.CampaignsError: {
        return {
          ...state,
          error: action.payload,
        }
      }

      default:
        return state
    }
  }
)

export const campaignsActions = {
  loadingCampaigns: () => ({type: campaignsActionTypes.LoadingCampaigns}),
  fetchCampaigns: () => ({type: campaignsActionTypes.FetchCampaigns}),
  campaignsLoaded: (payload: any) => ({type: campaignsActionTypes.CampaignsLoaded, payload}),
  campaignsError: (payload: any) => ({type: campaignsActionTypes.CampaignsError, payload}),
}

function* getCampaigns(): any {
  yield put(campaignsActions.loadingCampaigns())
  try {
    const response = yield call(getCampaignsApi)
    yield put(campaignsActions.campaignsLoaded(response.data))
  } catch (err: any) {
    yield put(campaignsActions.campaignsError(err))
    throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(campaignsActionTypes.FetchCampaigns, getCampaigns)
}
