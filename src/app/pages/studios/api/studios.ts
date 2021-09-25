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

export function createStudioApi(studio: Studio) {
  return axios.post(STUDIO, studio)
}
