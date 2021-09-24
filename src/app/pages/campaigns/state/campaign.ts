import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'
import {createCampaignApi, getCampaignApi} from '../api/campaigns'
import {ActionWithPayload} from './campaigns'
import {Campaign} from './models'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export const campaignActionTypes = {
  FetchCampaign: '[Campaign] Fetch',
  LoadingCampaign: '[Campaign] Loading',
  CreateCampaign: '[Campaign] Create',
  UpdateCampaign: '[Campaign] Update',
  CampaignLoaded: '[Campaign] Loaded',
  CampaignError: '[Campaign] Error',
}

export interface InitialCampaignStateType {
  campaign?: Campaign
  loadingCampaign?: boolean
  error?: any
}

const initialCampaign: InitialCampaignStateType = {
  campaign: {
    name: '',
    details: '',
    status: '',
    start_date: '',
    end_date: '',
  },
  loadingCampaign: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-campaign', whitelist: []},
  (state: InitialCampaignStateType = initialCampaign, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case campaignActionTypes.LoadingCampaign: {
        return {...state, loadingCampaign: true}
      }

      case campaignActionTypes.CampaignLoaded: {
        return {...state, campaign: action.payload, loadingCampaign: false}
      }

      case campaignActionTypes.CampaignError: {
        return {
          ...state,
          error: action.payload,
        }
      }

      case campaignActionTypes.UpdateCampaign: {
        return {
          ...state,
          campaign: {...state.campaign, ...action.payload},
        }
      }

      case campaignActionTypes.CreateCampaign: {
        return {
          ...state,
          campaign: action.payload,
        }
      }

      default:
        return state
    }
  }
)

export const campaignActions = {
  loadingCampaign: () => ({type: campaignActionTypes.LoadingCampaign}),
  fetchCampaign: () => ({type: campaignActionTypes.FetchCampaign}),
  createCampaign: (campaign: any) => ({type: campaignActionTypes.CreateCampaign, campaign}),
  campaignLoaded: (payload: any) => ({type: campaignActionTypes.CampaignLoaded, payload}),
  campaignError: (payload: any) => ({type: campaignActionTypes.CampaignError, payload}),
}

function* getCampaign(payload: any): any {
  yield put(campaignActions.loadingCampaign())
  try {
    const response = yield call(getCampaignApi(payload))
    yield put(campaignActions.campaignLoaded(response.data))
  } catch (err: any) {
    yield put(campaignActions.campaignError(err))
    throw new Error(err)
  }
}

function* createCampaign({campaign}: any): any {
  yield put(campaignActions.loadingCampaign())
  console.log('test')
  try {
    const response = yield call(createCampaignApi, campaign)
    console.log(response.data)
    yield put(campaignActions.campaignLoaded(response.data))
  } catch (err: any) {
    yield put(campaignActions.campaignError(err))
    throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(campaignActionTypes.FetchCampaign, getCampaign)
  yield takeLatest(campaignActionTypes.CreateCampaign, createCampaign)
}
