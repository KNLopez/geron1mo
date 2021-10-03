import axios from 'axios'
import {Customer} from '../state/models'

export const LEADS = `/leads`

export function getUsersApi() {
  return axios.get(LEADS)
}

//singular user
export function getUserApi(id: string) {
  return axios.get(LEADS, {params: {id}})
}

export function updateUserApi(lead: Customer) {
  return axios.put(`${LEADS}/${lead.id}`, lead)
}

export function createUserApi(lead: Customer) {
  return axios.post(LEADS, lead)
}
