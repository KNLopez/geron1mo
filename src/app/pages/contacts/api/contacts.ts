import axios from "axios"

export const LEADS = `/leads`

export function getContactsApi() {
  return axios.get(LEADS)
}