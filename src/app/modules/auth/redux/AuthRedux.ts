import {Action} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'
import {UserModel} from '../models/UserModel'
import {login} from './AuthCRUD'

const takeLatest: any = Eff.takeLatest;
const call:any = Eff.call
const put:any = Eff.put

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const actionTypes = {
  Login: '[Login] Action',
  Logout: '[Logout] Action',
  Register: '[Register] Action',
  UserLoaded: '[Load User] Auth API',
  SetUser: '[Set User] Action',
}

const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
}

export interface IAuthState {
  user?: UserModel
  accessToken?: string
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo', whitelist: []},
  (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
    console.log(action.type, action.payload)
    switch (action.type) {
      case actionTypes.Login: {
        const accessToken = action.payload?.accessToken
        return {accessToken, user: undefined}
      }

      case actionTypes.Register: {
        const accessToken = action.payload?.accessToken
        return {accessToken, user: undefined}
      }

      case actionTypes.Logout: {
        localStorage.removeItem('auth')
        return initialAuthState
      }

      case actionTypes.UserLoaded: {
        const user = action.payload?.user
        return {...state, user}
      }

      case actionTypes.SetUser: {
        const user = action.payload?.user
        console.log(user)
        return {...state, user}
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
  setUser: (payload:any) => ({ type: actionTypes.SetUser, payload}),
  logout: () => ({type: actionTypes.Logout}),
}


interface LoginProps {
  type: string;
  payload: {
    email: string;
    password: string;
  }
  
}

function* loginSaga ({payload}: LoginProps):any {
  const {email, password} = payload;
  try {
    const response = yield call(login, email, password)
    yield put(actions.setUser({user: response.data})) 
    const { authorization } = yield response.headers;
    yield localStorage.setItem('auth', authorization)
  } catch (err:any) {
    throw new Error(err)
  } 
}

function* registerSaga (param:any) {
  yield console.log(param)
}


export function* saga() {
  yield takeLatest(actionTypes.Login, loginSaga)

  yield takeLatest(actionTypes.Register, registerSaga)

 }
