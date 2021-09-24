const TableDelete = ({selectedRowIds}: any) => {
  return (
    <div
      className='d-flex justify-content-end align-items-center '
      data-kt-customer-table-toolbar='selected'
    >
      <div className='fw-bolder me-5'>
        <span className='me-2' data-kt-customer-table-select='selected_count'></span>
        {Object.keys(selectedRowIds).length} Selected
      </div>
      <button
        type='button'
        className='btn btn-danger'
        data-kt-customer-table-select='delete_selected'
      >
        Delete Selected
      </button>
    </div>
  )
}

export default TableDelete
