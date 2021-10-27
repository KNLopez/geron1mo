import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'

import {getStudio_dashboardsApi} from '../api/studios_dashboards'
import {studio_dashboardActionTypes} from './studio_dashboard'
import {Studio_dashboard} from './models'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const studio_dashboardsActionTypes = {
  FetchStudio_dashboards: '[Studio_dashboards] Fetch',
  LoadingStudio_dashboards: '[Studio_dashboards] Loading',
  Studio_dashboardsLoaded: '[Studio_dashboards] Loaded',
  Studio_dashboardsError: '[Studio_dashboards] Error',
}

export interface InitialContacstStateType {
  studio_dashboards: Studio_dashboard[]
  loadingStudio_dashboards?: boolean
  error?: any
}

const initialStudio_dashboards: InitialContacstStateType = {
  studio_dashboards: [],
  loadingStudio_dashboards: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-studio_dashboards', whitelist: []},
  (state: InitialContacstStateType = initialStudio_dashboards, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case studio_dashboardsActionTypes.LoadingStudio_dashboards: {
        return {...state, loadingStudio_dashboards: true, error: null}
      }

      case studio_dashboardsActionTypes.Studio_dashboardsLoaded: {
        return {...state, studio_dashboards: action.payload, loadingStudio_dashboards: false}
      }

      case studio_dashboardsActionTypes.Studio_dashboardsError: {
        return {
          ...state,
          error: action.payload,
          loadingStudio_dashboards: false,
        }
      }

      case studio_dashboardActionTypes.UpdatedStudio_dashboard: {
        return {
          ...state,
          studio_dashboards: state.studio_dashboards.map((studio_dashboard) => {
            if (studio_dashboard.id === action.payload.id) {
              return action.payload
            }
            return studio_dashboard
          }),
        }
      }

      case studio_dashboardActionTypes.Studio_dashboardLoaded: {
        return {
          ...state,
          studio_dashboards: [action.payload, ...state.studio_dashboards],
        }
      }

      default:
        return state
    }
  }
)

export const studio_dashboardsActions = {
  loadingStudio_dashboards: () => ({type: studio_dashboardsActionTypes.LoadingStudio_dashboards}),
  fetchStudio_dashboards: () => ({type: studio_dashboardsActionTypes.FetchStudio_dashboards}),
  studio_dashboardsLoaded: (payload: any) => ({
    type: studio_dashboardsActionTypes.Studio_dashboardsLoaded,
    payload,
  }),
  studio_dashboardsError: (payload: any) => ({
    type: studio_dashboardsActionTypes.Studio_dashboardsError,
    payload,
  }),
}

function* getStudio_dashboards(): any {
  yield put(studio_dashboardsActions.loadingStudio_dashboards())
  try {
    const response = yield call(getStudio_dashboardsApi)
    yield put(studio_dashboardsActions.studio_dashboardsLoaded(response.data))
  } catch (err: any) {
    yield put(studio_dashboardsActions.studio_dashboardsError(err))
    // throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(studio_dashboardsActionTypes.FetchStudio_dashboards, getStudio_dashboards)
}
