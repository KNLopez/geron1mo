import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'
import {createUserApi, getUserApi, updateUserApi} from '../api/users'
import {ActionWithPayload} from './users'
import {User} from './models'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export const userActionTypes = {
  FetchUser: '[User] Fetch',
  LoadingUser: '[User] Loading',
  CreateUser: '[User] Create',
  UserUpdate: '[User] Update',
  UserUpdated: '[User] Updated',
  UserLoaded: '[User] Loaded',
  SetUser: '[User] Set',
  ResetUser: '[User] Reset',
  UserError: '[User] Error',
}

export interface InitialUserStateType {
  user: User
  loadingUser?: boolean
  error?: any
}

const initialUser: InitialUserStateType = {
  user: {
    id: '',
    firstname: '',
    lastname: '',
    start_date: '',
    title: '',
    email: '',
    contact_number: '',
    meeting_link: '',
    birthday: '',
    status: '',
    role: '',
  },
  loadingUser: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-user', whitelist: []},
  (state: InitialUserStateType = initialUser, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case userActionTypes.LoadingUser: {
        return {...state, loadingUser: true, error: undefined}
      }
      case userActionTypes.SetUser:
      case userActionTypes.UserLoaded: {
        return {...state, user: action.payload, loadingUser: false}
      }

      case userActionTypes.UserError: {
        return {
          ...state,
          error: action.payload,
        }
      }

      case userActionTypes.UserUpdate: {
        return {...state, loadingUser: true, error: undefined}
      }

      case userActionTypes.UserUpdated: {
        return {...state, loadingUser: false}
      }

      case userActionTypes.CreateUser: {
        return {
          ...state,
          user: action.payload,
        }
      }

      case userActionTypes.ResetUser: {
        return initialUser
      }

      default:
        return state
    }
  }
)

export const userActions = {
  loadingUser: () => ({type: userActionTypes.LoadingUser}),
  fetchUser: () => ({type: userActionTypes.FetchUser}),
  resetUser: () => ({type: userActionTypes.ResetUser}),
  updateUser: (lead: any) => ({type: userActionTypes.UserUpdate, lead}),
  createUser: (lead: any) => ({type: userActionTypes.CreateUser, lead}),
  setUser: (payload: any) => ({type: userActionTypes.SetUser, payload}),
  userLoaded: (payload: any) => ({type: userActionTypes.UserLoaded, payload}),
  userUpdated: (payload: any) => ({type: userActionTypes.UserUpdated, payload}),
  userError: (payload: any) => ({type: userActionTypes.UserError, payload}),
}

function* getUser(payload: any): any {
  yield put(userActions.loadingUser())
  try {
    const response = yield call(getUserApi(payload))
    yield put(userActions.userLoaded(response.data))
  } catch (err: any) {
    yield put(userActions.userError(err))
    // throw new Error(err)
  }
}

function* createUser({lead}: any): any {
  yield put(userActions.loadingUser())
  try {
    const response = yield call(createUserApi, lead)
    yield put(userActions.userLoaded(response.data))
  } catch (err: any) {
    yield put(userActions.userError(err))
    // throw new Error(err)
  }
}

function* updateUser({lead}: any): any {
  yield put(userActions.loadingUser())
  try {
    const response = yield call(updateUserApi, lead)
    yield put(userActions.userUpdated(response.data))
  } catch (err: any) {
    yield put(userActions.userError(err))
    // throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(userActionTypes.FetchUser, getUser)
  yield takeLatest(userActionTypes.CreateUser, createUser)
  yield takeLatest(userActionTypes.UserUpdate, updateUser)
}
