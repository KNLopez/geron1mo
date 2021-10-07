import axios from 'axios'
import {Customer} from '../state/models'

export const USERS = `/staffs`

export function getUsersApi() {
  return axios.get(USERS)
}

//singular user
export function getUserApi(id: string) {
  return axios.get(USERS, {params: {id}})
}

export function updateUserApi(user: Customer) {
  return axios.put(`${USERS}/${user.id}`, user)
}

export function createUserApi(user: Customer) {
  return axios.post(USERS, user)
}
