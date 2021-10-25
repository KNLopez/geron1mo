import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'
import {UserModel} from '../models/UserModel'
import {login} from './AuthCRUD'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  Login: '[Login] Action',
  Logout: '[Logout] Action',
  Register: '[Register] Action',
  UserLoaded: '[Load User] Auth API',
  SetUser: '[Set User] Action',
  setError: '[Auth] Set Error',
  setPermissions: '[Auth] Set Permissions',
}

const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
  error: undefined,
  permissions: {},
}

export interface IAuthState {
  user?: UserModel
  accessToken?: string
  error?: any
  permissions: any
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo', whitelist: []},
  (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
    switch (action.type) {
      case actionTypes.Login: {
        const accessToken = action.payload?.accessToken
        return {...state, accessToken, user: undefined}
      }

      case actionTypes.Register: {
        const accessToken = action.payload?.accessToken
        return {...state, accessToken, user: undefined}
      }

      case actionTypes.Logout: {
        localStorage.removeItem('auth')
        return initialAuthState
      }

      case actionTypes.UserLoaded: {
        const user = action.payload?.user
        return {...state, user, error: undefined}
      }

      case actionTypes.SetUser: {
        const user = action.payload?.user
        return {...state, user}
      }

      case actionTypes.setError: {
        return {...state, error: action.payload}
      }

      case actionTypes.setPermissions: {
        return {...state, permissions: action.payload}
      }

      default:
        return state
    }
  }
)

export const actions = {
  login: (values: any) => ({type: actionTypes.Login, payload: values}),
  register: (accessToken: string) => ({
    type: actionTypes.Register,
    payload: {accessToken},
  }),
  setUser: (payload: any) => ({type: actionTypes.SetUser, payload}),
  logout: () => ({type: actionTypes.Logout}),
  setError: (err: any) => ({type: actionTypes.setError, payload: err.message}),
  setPermisions: ({permissions}: any) => ({type: actionTypes.setPermissions, payload: permissions}),
}

interface LoginProps {
  type: string
  payload: {
    email: string
    password: string
  }
}

function* loginSaga({payload}: LoginProps): any {
  const {email, password} = payload
  try {
    const response = yield call(login, email, password)
    yield put(actions.setUser({user: response.data}))
    yield put(actions.setPermisions({permissions: response.data.permissions}))
    const {authorization} = yield response.headers
    yield localStorage.setItem('auth', authorization)
  } catch (err: any) {
    yield put(actions.setError(err))
    //  // throw new Error(err)
  }
}

function* registerSaga(param: any) {
  yield console.log(param)
}

export function* saga() {
  yield takeLatest(actionTypes.Login, loginSaga)

  yield takeLatest(actionTypes.Register, registerSaga)
}
