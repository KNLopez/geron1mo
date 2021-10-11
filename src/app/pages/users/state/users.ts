import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'

import {getUsersApi} from '../api/users'
import {userActionTypes} from './user'
import {User} from './models'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const usersActionTypes = {
  FetchUsers: '[Users] Fetch',
  LoadingUsers: '[Users] Loading',
  UsersLoaded: '[Users] Loaded',
  UsersError: '[Users] Error',
}

export interface InitialContacstStateType {
  users: User[]
  loadingUsers?: boolean
  error?: any
}

const initialUsers: InitialContacstStateType = {
  users: [],
  loadingUsers: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-users', whitelist: []},
  (state: InitialContacstStateType = initialUsers, action: ActionWithPayload<any>) => {
    switch (action.type) {
      case usersActionTypes.LoadingUsers: {
        return {...state, loadingUsers: true}
      }

      case usersActionTypes.UsersLoaded: {
        return {...state, users: action.payload.reverse(), loadingUsers: false}
      }

      case usersActionTypes.UsersError: {
        return {
          ...state,
          error: action.payload,
        }
      }

      case userActionTypes.UserLoaded: {
        return {
          ...state,
          users: [action.payload, ...state.users],
        }
      }

      case userActionTypes.UserUpdated: {
        return {
          ...state,
          users: state.users.map((user) => {
            if (user.id === action.payload.id) {
              return action.payload
            }
            return user
          }),
        }
      }

      default:
        return state
    }
  }
)

export const usersActions = {
  loadingUsers: () => ({type: usersActionTypes.LoadingUsers}),
  fetchUsers: () => ({type: usersActionTypes.FetchUsers}),
  usersLoaded: (payload: any) => ({type: usersActionTypes.UsersLoaded, payload}),
  usersError: (payload: any) => ({type: usersActionTypes.UsersError, payload}),
}

function* getUsers(): any {
  yield put(usersActions.loadingUsers())
  try {
    const response = yield call(getUsersApi)
    yield put(usersActions.usersLoaded(response.data))
  } catch (err: any) {
    yield put(usersActions.usersError(err))
    // throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(usersActionTypes.FetchUsers, getUsers)
}
