const TableDelete = () => {
  return (
    <div
      className='d-flex justify-content-end align-items-center d-none'
      data-kt-customer-table-toolbar='selected'
    >
      <div className='fw-bolder me-5'>
        <span className='me-2' data-kt-customer-table-select='selected_count'></span>
        Selected
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
