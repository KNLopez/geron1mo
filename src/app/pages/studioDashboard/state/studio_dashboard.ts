import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as Eff from 'redux-saga/effects'
import {
  createStudio_dashboardApi,
  getStudio_dashboardApi,
  updateStudio_dashboard,
} from '../api/studios_dashboards'
import {ActionWithPayload} from './studios_dasbhboards'
import {Studio_dashboard} from './models'
import {modalActions} from '../../../components/modals/state/MainModalState'

const takeLatest: any = Eff.takeLatest
const call: any = Eff.call
const put: any = Eff.put

export const studio_dashboardActionTypes = {
  FetchStudio_dashboard: '[Studio_dashboard] Fetch',
  LoadingStudio_dashboard: '[Studio_dashboard] Loading',
  CreateStudio_dashboard: '[Studio_dashboard] Create',
  UpdateStudio_dashboard: '[Studio_dashboard] Update',
  UpdatedStudio_dashboard: '[Studio_dashboard] Updated',
  Studio_dashboardLoaded: '[Studio_dashboard] Loaded',
  SetStudio_dashboard: '[Studio_dashboard] Set',
  Studio_dashboardError: '[Studio_dashboard] Error',
  ResetStudio_dashboard: '[Studio_dashboard] Reset',
}

export interface InitialStudio_dashboardStateType {
  studio_dashboard: Studio_dashboard
  loadingStudio_dashboard?: boolean
  error?: any
}

const initialStudio_dashboard: InitialStudio_dashboardStateType = {
  studio_dashboard: {
    id: '',
    leads_week: 0,
    sales_conversion: 0,
    rollover: 0,
    average_class_attendance: 0,
    cancels: 0,
    offer: 0,
  },
  loadingStudio_dashboard: false,
  error: undefined,
}

export const reducer = persistReducer(
  {storage, key: 'v1-geron1mo-studio_dashboard', whitelist: []},
  (
    state: InitialStudio_dashboardStateType = initialStudio_dashboard,
    action: ActionWithPayload<any>
  ) => {
    switch (action.type) {
      case studio_dashboardActionTypes.LoadingStudio_dashboard: {
        return {...state, loadingStudio_dashboard: true, error: undefined}
      }

      case studio_dashboardActionTypes.Studio_dashboardLoaded:
      case studio_dashboardActionTypes.SetStudio_dashboard: {
        return {...state, studio_dashboard: action.payload, loadingStudio_dashboard: false}
      }

      case studio_dashboardActionTypes.Studio_dashboardError: {
        return {
          ...state,
          error: action.payload,
          loadingStudio_dashboard: false,
        }
      }

      case studio_dashboardActionTypes.UpdatedStudio_dashboard: {
        return {...state, loadingStudio_dashboard: false, error: undefined}
      }

      case studio_dashboardActionTypes.CreateStudio_dashboard: {
        return {
          ...state,
          studio_dashboard: action.payload,
        }
      }
      case studio_dashboardActionTypes.ResetStudio_dashboard: {
        return initialStudio_dashboard
      }

      default:
        return state
    }
  }
)

export const studio_dashboardActions = {
  loadingStudio_dashboard: () => ({type: studio_dashboardActionTypes.LoadingStudio_dashboard}),
  fetchStudio_dashboard: () => ({type: studio_dashboardActionTypes.FetchStudio_dashboard}),
  createStudio_dashboard: (studio_dashboard: any) => ({
    type: studio_dashboardActionTypes.CreateStudio_dashboard,
    studio_dashboard,
  }),
  updateStudio_dashboard: (studio_dashboard: any) => ({
    type: studio_dashboardActionTypes.UpdateStudio_dashboard,
    studio_dashboard,
  }),
  updatedStudio_dashboard: (studio_dashboard: any) => ({
    type: studio_dashboardActionTypes.UpdatedStudio_dashboard,
    studio_dashboard,
  }),
  studio_dashboardLoaded: (payload: any) => ({
    type: studio_dashboardActionTypes.Studio_dashboardLoaded,
    payload,
  }),
  setStudio_dashboard: (payload: any) => ({
    type: studio_dashboardActionTypes.SetStudio_dashboard,
    payload,
  }),
  studio_dashboardError: (payload: any) => ({
    type: studio_dashboardActionTypes.Studio_dashboardError,
    payload,
  }),
  resetStudio_dashboard: () => ({type: studio_dashboardActionTypes.ResetStudio_dashboard}),
}

function* getStudio_dashboard(payload: any): any {
  yield put(studio_dashboardActions.loadingStudio_dashboard())
  try {
    const response = yield call(getStudio_dashboardApi(payload))
    yield put(studio_dashboardActions.studio_dashboardLoaded(response.data))
  } catch (err: any) {
    yield put(studio_dashboardActions.studio_dashboardError(err))
    // throw new Error(err)
  }
}

function* createStudio_dashboard({studio_dashboard}: any): any {
  console.log(studio_dashboard)
  yield put(studio_dashboardActions.loadingStudio_dashboard())
  try {
    const response = yield call(createStudio_dashboardApi, studio_dashboard)
    yield put(studio_dashboardActions.studio_dashboardLoaded(response.data))
    yield put(modalActions.hideModal())
  } catch (err: any) {
    yield put(studio_dashboardActions.studio_dashboardError(err))
    // throw new Error(err)
  }
}

function* updateStudio_dashboardSaga({studio_dashboard}: any): any {
  // console.log(studio_dashboard, 'update')
  yield put(studio_dashboardActions.loadingStudio_dashboard())
  try {
    const response = yield call(updateStudio_dashboard, studio_dashboard)
    yield put(studio_dashboardActions.updatedStudio_dashboard(response.data))
    yield put(modalActions.hideModal())
  } catch (err: any) {
    yield put(studio_dashboardActions.studio_dashboardError(err))
    // throw new Error(err)
  }
}

export function* saga() {
  yield takeLatest(studio_dashboardActionTypes.UpdateStudio_dashboard, updateStudio_dashboardSaga)
  yield takeLatest(studio_dashboardActionTypes.FetchStudio_dashboard, getStudio_dashboard)
  yield takeLatest(studio_dashboardActionTypes.CreateStudio_dashboard, createStudio_dashboard)
}
