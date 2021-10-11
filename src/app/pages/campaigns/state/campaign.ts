import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'
import {createCampaignApi, getCampaignApi, updateCampaignApi} from '../api/campaigns'
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
  UpdatedCampaign: '[Campaign] Updated',
  CampaignLoaded: '[Campaign] Loaded',
  SetCampaign: '[Campaign] Set',
  CampaignError: '[Campaign] Error',
  ResetCampaign: '[Campaign] Reset',
}

export interface InitialCampaignStateType {
  campaign: Campaign
  loadingCampaign?: boolean
  error?: any
}

const initialCampaign: InitialCampaignStateType = {
  campaign: {
    id: '',
    name: '',
    details: '',
    status: '',
    start_date: '',
    end_date: '',
    fb_campaign_id: '',
  },
  loadingCampaign: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-campaign', whitelist: []},
  (state: InitialCampaignStateType = initialCampaign, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case campaignActionTypes.LoadingCampaign: {
        return {...state, loadingCampaign: true, error: undefined}
      }
      case campaignActionTypes.SetCampaign:
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
        return {...state, loadingCampaign: true, error: undefined}
      }

      case campaignActionTypes.UpdatedCampaign: {
        console.log(action.payload)
        return {...state, campaign: action.payload, loadingCampaign: false}
      }

      case campaignActionTypes.CreateCampaign: {
        return {
          ...state,
          campaign: action.payload,
        }
      }

      case campaignActionTypes.ResetCampaign: {
        return initialCampaign
      }

      default:
        return state
    }
  }
)

export const campaignActions = {
  loadingCampaign: () => ({type: campaignActionTypes.LoadingCampaign}),
  fetchCampaign: (id: any) => ({type: campaignActionTypes.FetchCampaign, id}),
  resetCampaign: () => ({type: campaignActionTypes.ResetCampaign}),
  updateCampaign: (campaign: any) => ({type: campaignActionTypes.UpdateCampaign, campaign}),
  updatedCampaign: (payload: any) => ({type: campaignActionTypes.UpdatedCampaign, payload}),
  createCampaign: (campaign: any) => ({type: campaignActionTypes.CreateCampaign, campaign}),
  campaignLoaded: (payload: any) => ({type: campaignActionTypes.CampaignLoaded, payload}),
  setCampaign: (payload: any) => ({type: campaignActionTypes.SetCampaign, payload}),
  campaignError: (payload: any) => ({type: campaignActionTypes.CampaignError, payload}),
}

function* getCampaign({id}: any): any {
  yield put(campaignActions.loadingCampaign())
  try {
    const response = yield call(getCampaignApi, id)
    yield put(campaignActions.campaignLoaded(response.data))
  } catch (err: any) {
    yield put(campaignActions.campaignError(err))
    // throw new Error(err)
  }
}

function* createCampaign({campaign}: any): any {
  yield put(campaignActions.loadingCampaign())
  try {
    const response = yield call(createCampaignApi, campaign)
    yield put(campaignActions.campaignLoaded(response.data))
  } catch (err: any) {
    yield put(campaignActions.campaignError(err))
    //  // throw new Error(err)
  }
}

function* updateCampaign({campaign}: any): any {
  yield put(campaignActions.loadingCampaign())
  try {
    const response = yield call(updateCampaignApi, campaign)
    yield put(campaignActions.updatedCampaign(response.data))
  } catch (err: any) {
    console.log(err)
    yield put(campaignActions.campaignError(err))
    //  // throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(campaignActionTypes.FetchCampaign, getCampaign)
  yield takeLatest(campaignActionTypes.CreateCampaign, createCampaign)
  yield takeLatest(campaignActionTypes.UpdateCampaign, updateCampaign)
}
