import {useEffect, useState} from 'react'
import {Button, Modal} from 'react-bootstrap-v5'

export interface ModalProps {
  title: string
  buttonText?: string
  cancelButtonText?: string
  submitButtonText?: string
  buttonAction?: () => any
  isValid?: boolean
}

const MainModal: React.FC<ModalProps> = ({
  title,
  buttonText,
  cancelButtonText = 'Cancel',
  submitButtonText = 'Submit',
  buttonAction,
  isValid,
  children,
}) => {
  const [show, setShow] = useState(false)
  console.log(isValid)

  const handleClose = () => {
    setShow(false)
  }

  const handleSubmit = async () => {
    if (buttonAction) {
      buttonAction()
      if (isValid) setShow(false)
    } else {
      setShow(false)
    }
  }

  const handleShow = () => {
    setShow(true)
  }

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        <span className='svg-icon svg-icon-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24px'
            height='24px'
            viewBox='0 0 24 24'
            version='1.1'
          >
            <rect fill='#000000' x='4' y='11' width='16' height='2' rx='1' />
            <rect
              fill='#000000'
              opacity='0.5'
              transform='translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000)'
              x='4'
              y='11'
              width='16'
              height='2'
              rx='1'
            />
          </svg>
        </span>
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            {cancelButtonText}
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            {submitButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MainModal
