export interface TableAddButtonProps {
  addButtonText: string
}

const TableAddButton: React.FC<TableAddButtonProps> = ({addButtonText}) => {
  return (
    <button
      type='button'
      className='btn btn-primary'
      data-bs-toggle='modal'
      data-bs-target='#kt_modal_add_customer'
    >
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
      {addButtonText}
    </button>
  )
}

export default TableAddButton