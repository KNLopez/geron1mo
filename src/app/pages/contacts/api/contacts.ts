import axios from "axios"
import { Customer } from "../state/models"

export const LEADS = `/leads`

export function getContactsApi() {
  return axios.get(LEADS)
}

export function createContact(body:Customer){
  return axios.post(LEADS, body)
}