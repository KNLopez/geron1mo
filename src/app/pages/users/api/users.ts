import axios from 'axios'
import {User} from '../state/models'

export const USERS = `/staffs`

export function getUsersApi() {
  return axios.get(USERS)
}

//singular user
export function getUserApi(id: string) {
  return axios.get(USERS, {params: {id}})
}

export function updateUserApi(user: User) {
  return axios.put(`${USERS}/${user.id}`, user)
}

export function createUserApi(user: User) {
  return axios.post(USERS, user)
}
