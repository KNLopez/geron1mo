import axios from 'axios'
import {Studio} from '../state/models'

export const STUDIO = `/studios`

export function getStudiosApi() {
  return axios.get(STUDIO)
}

//singular studio
export function getStudioApi(id: string) {
  return axios.get(STUDIO, {params: {id}})
}

export function updateStudio(studio: Studio) {
  return axios.put(`${STUDIO}/${studio.id}`, {studio})
}

export function createStudioApi(studio: Studio) {
  return axios.post(STUDIO, {studio})
}
