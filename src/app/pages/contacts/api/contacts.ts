import axios from 'axios'
import {Contact} from '../state/models'

export const LEADS = `/leads`

export function getContactsApi() {
  return axios.get(LEADS)
}

//singular contact
export function getContactApi(id: string) {
  return axios.get(LEADS, {params: {id}})
}

export function updateContactApi(lead: Contact) {
  return axios.put(`${LEADS}/${lead.id}`, lead)
}

export function createContactApi(lead: Contact) {
  return axios.post(LEADS, lead)
}
