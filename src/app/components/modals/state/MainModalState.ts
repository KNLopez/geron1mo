import {Action} from '@reduxjs/toolkit'

export const modalActionTypes = {
  ShowModal: '[Modal] Show',
  HideModal: '[Modal] Hide',
}

export interface InitialModalStateType {
  show: boolean
  type: string | undefined
}

const intialModalState: InitialModalStateType = {
  show: false,
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
      return {show: true, type: action.payload}

    case modalActionTypes.HideModal:
      return {show: false, type: undefined}
    default:
      return state
  }
}

export const modalActions = {
  showModal: (payload: string) => ({type: modalActionTypes.ShowModal, payload}),
  hideModal: () => ({type: modalActionTypes.HideModal}),
}
