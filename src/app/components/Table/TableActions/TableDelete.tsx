export interface TableDeleteProps {
  selectedRowIds: any
  deleteAction: (ids: any) => void
}

const TableDelete = ({selectedRowIds, deleteAction}: TableDeleteProps) => {
  const handleClick = () => {
    deleteAction(selectedRowIds)
  }
  return (
    <div
      className='d-flex justify-content-end align-items-center '
      data-kt-customer-table-toolbar='selected'
    >
      <div className='fw-bolder me-5'>
        <span className='me-2' data-kt-customer-table-select='selected_count'></span>
        {Object.keys(selectedRowIds).length} Selected
      </div>
      <button type='button' className='btn btn-danger' onClick={handleClick}>
        Delete Selected
      </button>
    </div>
  )
}

export default TableDelete
