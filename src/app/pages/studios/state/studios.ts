import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'

import {getStudiosApi} from '../api/studios'
import {studioActionTypes} from './studio'
import {Studio} from './models'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const studiosActionTypes = {
  FetchStudios: '[Studios] Fetch',
  LoadingStudios: '[Studios] Loading',
  StudiosLoaded: '[Studios] Loaded',
  StudiosError: '[Studios] Error',
}

export interface InitialContacstStateType {
  studios: Studio[]
  loadingStudios?: boolean
  error?: any
}

const initialStudios: InitialContacstStateType = {
  studios: [],
  loadingStudios: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-studios', whitelist: []},
  (state: InitialContacstStateType = initialStudios, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case studiosActionTypes.LoadingStudios: {
        return {...state, loadingStudios: true, error: null}
      }

      case studiosActionTypes.StudiosLoaded: {
        return {...state, studios: action.payload, loadingStudios: false}
      }

      case studiosActionTypes.StudiosError: {
        return {
          ...state,
          error: action.payload,
          loadingStudios: false,
        }
      }

      case studioActionTypes.UpdatedStudio: {
        return {
          ...state,
          studios: state.studios.map((studio) => {
            if (studio.id === action.payload.id) {
              return action.payload
            }
            return studio
          }),
        }
      }

      case studioActionTypes.StudioLoaded: {
        return {
          ...state,
          studios: [action.payload, ...state.studios],
        }
      }

      default:
        return state
    }
  }
)

export const studiosActions = {
  loadingStudios: () => ({type: studiosActionTypes.LoadingStudios}),
  fetchStudios: () => ({type: studiosActionTypes.FetchStudios}),
  studiosLoaded: (payload: any) => ({type: studiosActionTypes.StudiosLoaded, payload}),
  studiosError: (payload: any) => ({type: studiosActionTypes.StudiosError, payload}),
}

function* getStudios(): any {
  yield put(studiosActions.loadingStudios())
  try {
    const response = yield call(getStudiosApi)
    yield put(studiosActions.studiosLoaded(response.data))
  } catch (err: any) {
    yield put(studiosActions.studiosError(err))
    // throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(studiosActionTypes.FetchStudios, getStudios)
}
