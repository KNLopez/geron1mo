import axios from 'axios'
import {Studio_dashboard} from '../state/models'

export const STUDIO = `/studio_dashboards`

export function getStudio_dashboardsApi() {
  return axios.get(STUDIO)
}

//singular studio_dashboard
export function getStudio_dashboardApi(id: string) {
  return axios.get(STUDIO, {params: {id}})
}

export function updateStudio_dashboard(studio_dashboard: Studio_dashboard) {
  return axios.put(`${STUDIO}/${studio_dashboard.id}`, {studio_dashboard})
}

export function createStudio_dashboardApi(studio_dashboard: Studio_dashboard) {
  return axios.post(STUDIO, {studio_dashboard})
}
