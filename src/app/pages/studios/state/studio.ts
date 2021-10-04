import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'
import {createStudioApi, getStudioApi, updateStudio} from '../api/studios'
import {ActionWithPayload} from './studios'
import {Studio} from './models'
import {modalActions} from '../../../components/modals/state/MainModalState'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export const studioActionTypes = {
  FetchStudio: '[Studio] Fetch',
  LoadingStudio: '[Studio] Loading',
  CreateStudio: '[Studio] Create',
  UpdateStudio: '[Studio] Update',
  UpdatedStudio: '[Studio] Updated',
  StudioLoaded: '[Studio] Loaded',
  SetStudio: '[Studio] Set',
  StudioError: '[Studio] Error',
  ResetStudio: '[Studio] Reset',
}

export interface InitialStudioStateType {
  studio: Studio
  loadingStudio?: boolean
  error?: any
}

const initialStudio: InitialStudioStateType = {
  studio: {
    id: '',
    name: '',
    email: '',
    owner_firstname: '',
    owner_lastname: '',
    owner_email: '',
    mobile_number: '',
    studio_manager_firstname: '',
    studio_manager_lastname: '',
    studio_manager_email: '',
    assigned_to: '',
    service_offered: '',
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

      case studioActionTypes.UpdatedStudio: {
        return {...state, loadingStudio: false, error: undefined}
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
  updateStudio: (studio: any) => ({type: studioActionTypes.UpdateStudio, studio}),
  updatedStudio: (studio: any) => ({type: studioActionTypes.UpdatedStudio, studio}),
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
  console.log(studio)
  yield put(studioActions.loadingStudio())
  try {
    const response = yield call(createStudioApi, studio)
    yield put(studioActions.studioLoaded(response.data))
    yield put(modalActions.hideModal())
  } catch (err: any) {
    yield put(studioActions.studioError(err))
    throw new Error(err)
  }
}

function* updateStudioSaga({studio}: any): any {
  // console.log(studio, 'update')
  yield put(studioActions.loadingStudio())
  try {
    const response = yield call(updateStudio, studio)
    yield put(studioActions.updatedStudio(response.data))
    yield put(modalActions.hideModal())
  } catch (err: any) {
    yield put(studioActions.studioError(err))
    throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(studioActionTypes.UpdateStudio, updateStudioSaga)
  yield takeLatest(studioActionTypes.FetchStudio, getStudio)
  yield takeLatest(studioActionTypes.CreateStudio, createStudio)
}
