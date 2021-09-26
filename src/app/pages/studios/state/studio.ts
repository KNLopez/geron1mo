import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'
import {createStudioApi, getStudioApi} from '../api/studios'
import {ActionWithPayload} from './studios'
import {Studio} from './models'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export const studioActionTypes = {
  FetchStudio: '[Studio] Fetch',
  LoadingStudio: '[Studio] Loading',
  CreateStudio: '[Studio] Create',
  UpdateStudio: '[Studio] Update',
  StudioLoaded: '[Studio] Loaded',
  SetStudio: '[Studio] Set',
  StudioError: '[Studio] Error',
  ResetStudio: '[Studio] Reset',
}

export interface InitialStudioStateType {
  studio?: Studio
  loadingStudio?: boolean
  error?: any
}

const initialStudio: InitialStudioStateType = {
  studio: {
    id: '',
    name: '',
    location: '',
    email: '',
    owner_firstname: '',
    owner_lastname: '',
    owner_email: '',
    mobile_number: '',
    studio_manager_firstname: '',
    studio_manager_lastname: '',
    studio_manager_email: '',
  },
  loadingStudio: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-studio', whitelist: []},
  (state: InitialStudioStateType = initialStudio, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case studioActionTypes.LoadingStudio: {
        return {...state, loadingStudio: true, error: undefined}
      }

      case studioActionTypes.StudioLoaded:
      case studioActionTypes.SetStudio: {
        return {...state, studio: action.payload, loadingStudio: false}
      }

      case studioActionTypes.StudioError: {
        return {
          ...state,
          error: action.payload,
          loadingStudio: false,
        }
      }

      case studioActionTypes.UpdateStudio: {
        return {
          ...state,
          studio: {...state.studio, ...action.payload},
        }
      }

      case studioActionTypes.CreateStudio: {
        return {
          ...state,
          studio: action.payload,
        }
      }
      case studioActionTypes.ResetStudio: {
        return initialStudio
      }

      default:
        return state
    }
  }
)

export const studioActions = {
  loadingStudio: () => ({type: studioActionTypes.LoadingStudio}),
  fetchStudio: () => ({type: studioActionTypes.FetchStudio}),
  createStudio: (studio: any) => ({type: studioActionTypes.CreateStudio, studio}),
  studioLoaded: (payload: any) => ({type: studioActionTypes.StudioLoaded, payload}),
  setStudio: (payload: any) => ({type: studioActionTypes.SetStudio, payload}),
  studioError: (payload: any) => ({type: studioActionTypes.StudioError, payload}),
  resetStudio: () => ({type: studioActionTypes.ResetStudio}),
}

function* getStudio(payload: any): any {
  yield put(studioActions.loadingStudio())
  try {
    const response = yield call(getStudioApi(payload))
    yield put(studioActions.studioLoaded(response.data))
  } catch (err: any) {
    yield put(studioActions.studioError(err))
    throw new Error(err)
  }
}

function* createStudio({studio}: any): any {
  yield put(studioActions.loadingStudio())
  try {
    const response = yield call(createStudioApi, studio)
    yield put(studioActions.studioLoaded(response.data))
  } catch (err: any) {
    yield put(studioActions.studioError(err))
    throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(studioActionTypes.FetchStudio, getStudio)
  yield takeLatest(studioActionTypes.CreateStudio, createStudio)
}
