import {Action} from '@reduxjs/toolkit'
import {ModalTypes} from '../models'

export const modalActionTypes = {
  ShowModal: '[Modal] Show',
  HideModal: '[Modal] Hide',
}

export interface InitialModalStateType {
  show: boolean
  params: any
  type: string | ModalTypes | undefined
}

const intialModalState: InitialModalStateType = {
  show: false,
  params: {},
  type: undefined,
}

export interface ActionWithPayload<T> extends Action {
  payload?: T
}

export const reducer = (
  state: InitialModalStateType = intialModalState,
  action: ActionWithPayload<any>
) => {
  switch (action.type) {
    case modalActionTypes.ShowModal:
      console.log(action.payload)
      return {show: true, type: action.payload.type, params: action.payload.params}

    case modalActionTypes.HideModal:
      return {show: false, type: undefined}
    default:
      return state
  }
}

export const modalActions = {
  showModal: (payload: any) => ({type: modalActionTypes.ShowModal, payload}),
  hideModal: () => ({type: modalActionTypes.HideModal}),
}
