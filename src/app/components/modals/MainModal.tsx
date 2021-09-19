export interface ModalProps {
  title: string
  id: string
}

const Modal: React.FC<ModalProps> = ({title, id, children}) => {
  return (
    <div className='modal fade' id={id} tabIndex={-1} aria-hidden='true'>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Modal
