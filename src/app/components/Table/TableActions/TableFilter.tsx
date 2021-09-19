const TableFilter = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-light me-3'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
        data-kt-menu-flip='top-end'
      >
        <span className='svg-icon svg-icon-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24px'
            height='24px'
            viewBox='0 0 24 24'
            version='1.1'
          >
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <rect x='0' y='0' width='24' height='24' />
              <path
                d='M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z'
                fill='#000000'
              />
            </g>
          </svg>
        </span>
        Filter
      </button>

      <div
        className='menu menu-sub menu-sub-dropdown w-300px w-md-325px'
        data-kt-menu='true'
        id='kt-toolbar-filter'
      >
        <div className='px-7 py-5'>
          <div className='fs-4 text-dark fw-bolder'>Filter Options</div>
        </div>

        <div className='separator border-gray-200'></div>

        <div className='px-7 py-5'>
          <div className='mb-10'>
            <label className='form-label fs-5 fw-bold mb-3'>Month:</label>

            <select
              className='form-select form-select-solid fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-customer-table-filter='month'
              data-dropdown-parent='#kt-toolbar-filter'
            >
              <option></option>
              <option value='aug'>August</option>
              <option value='sep'>September</option>
              <option value='oct'>October</option>
              <option value='nov'>November</option>
              <option value='dec'>December</option>
            </select>
          </div>

          <div className='d-flex justify-content-end'>
            <button
              type='reset'
              className='btn btn-light btn-active-light-primary me-2'
              data-kt-menu-dismiss='true'
              data-kt-customer-table-filter='reset'
            >
              Reset
            </button>
            <button
              type='submit'
              className='btn btn-primary'
              data-kt-menu-dismiss='true'
              data-kt-customer-table-filter='filter'
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableFilter
