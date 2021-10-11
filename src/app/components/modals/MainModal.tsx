import {Button, Modal} from 'react-bootstrap-v5'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup'
import {modalActions} from './state/MainModalState'

export interface ModalProps {
  title: string
  cancelButtonText?: string
  submitButtonText?: string
  buttonAction?: () => any
  isValid?: boolean
  onEntered?: any
  onHide?: () => any
}

const MainModal: React.FC<ModalProps> = ({
  title,
  cancelButtonText = 'Cancel',
  submitButtonText = 'Submit',
  buttonAction,
  isValid,
  children,
  onEntered,
  onHide,
}) => {
  const dispatch = useDispatch()
  const {show}: any = useSelector(({modal}: RootState) => modal, shallowEqual)

  const handleClose = () => {
    onHide && onHide()
    dispatch(modalActions.hideModal())
  }

  const handleSubmit = async () => {
    if (buttonAction) {
      await buttonAction()
      if (isValid) dispatch(modalActions.hideModal())
    } else {
      dispatch(modalActions.hideModal())
    }
  }

  return (
    <Modal show={show} onHide={handleClose} size='lg' onEntered={onEntered} enforceFocus={false}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {buttonAction && (
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            {cancelButtonText}
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            {submitButtonText}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  )
}

export default MainModal
