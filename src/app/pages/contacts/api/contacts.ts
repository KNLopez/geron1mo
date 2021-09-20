import axios from 'axios'
import {Customer} from '../state/models'

export const LEADS = `/leads`

export function getContactsApi() {
  return axios.get(LEADS)
}

//singular contact
export function getContactApi(id: string) {
  return axios.get(LEADS, {params: {id}})
}

export function createContactApi(lead: Customer) {
  return axios.post(LEADS, lead)
}
