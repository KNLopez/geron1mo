interface TablePaginationProps {
  canPreviousPage: any
  canNextPage: any
  pageOptions: any
  pageCount: any
  gotoPage: any
  nextPage: any
  previousPage: any
  setPageSize: any
  pageIndex: any
  pageSize: any
}

const TablePagination: React.FC<TablePaginationProps> = ({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  pageIndex,
  pageSize,
}) => {
  return (
    <div className='d-flex justify-content-between align-items-center flex-wrap'>
      <div className='d-flex flex-wrap py-2 mr-3'>
        <button
          className='btn btn-icon btn-sm btn-light mx-2 my-1'
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <span className='svg-icon svg-icon-primary svg-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16px'
              height='16px'
              viewBox='0 0 24 24'
              version='1.1'
            >
              <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                <polygon points='0 0 24 0 24 24 0 24' />
                <path
                  d='M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z'
                  fill='#000000'
                  fill-rule='nonzero'
                  transform='translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) '
                />
                <path
                  d='M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z'
                  fill='#000000'
                  fill-rule='nonzero'
                  opacity='0.3'
                  transform='translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) '
                />
              </g>
            </svg>
          </span>
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className='btn btn-icon btn-sm btn-light mx-2 my-1'
        >
          <span className='svg-icon svg-icon-primary svg-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16px'
              height='16px'
              viewBox='0 0 24 24'
              version='1.1'
            >
              <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                <polygon points='0 0 24 0 24 24 0 24' />
                <path
                  d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                  fill='#000000'
                  fill-rule='nonzero'
                  transform='translate(12.000003, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-12.000003, -11.999999) '
                />
              </g>
            </svg>
          </span>
        </button>

        {/* <a href='#' className='btn btn-icon btn-sm border-0 btn-light mx-2 my-1'>
          ...
        </a>
        <a href='#' className='btn btn-icon btn-sm border-0 btn-light mx-2 my-1'>
          23
        </a>
        <a
          href='#'
          className='btn btn-icon btn-sm border-0 btn-light btn-hover-primary active mx-2 my-1'
        >
          24
        </a>
        <a href='#' className='btn btn-icon btn-sm border-0 btn-light mx-2 my-1'>
          25
        </a>
        <a href='#' className='btn btn-icon btn-sm border-0 btn-light mx-2 my-1'>
          26
        </a>
        <a href='#' className='btn btn-icon btn-sm border-0 btn-light mx-2 my-1'>
          27
        </a>
        <a href='#' className='btn btn-icon btn-sm border-0 btn-light mx-2 my-1'>
          28
        </a>
        <a href='#' className='btn btn-icon btn-sm border-0 btn-light mx-2 my-1'>
          ...
        </a> */}

        <button
          className='btn btn-icon btn-sm btn-light mx-2 my-1'
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <span className='svg-icon svg-icon-primary svg-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16px'
              height='16px'
              viewBox='0 0 24 24'
              version='1.1'
            >
              <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                <polygon points='0 0 24 0 24 24 0 24' />
                <path
                  d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                  fill='#000000'
                  fill-rule='nonzero'
                  transform='translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999) '
                />
              </g>
            </svg>
          </span>
        </button>
        <button
          className='btn btn-icon btn-sm btn-light mx-2 my-1'
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <span className='svg-icon svg-icon-primary svg-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16px'
              height='16px'
              viewBox='0 0 24 24'
              version='1.1'
            >
              <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                <polygon points='0 0 24 0 24 24 0 24' />
                <path
                  d='M12.2928955,6.70710318 C11.9023712,6.31657888 11.9023712,5.68341391 12.2928955,5.29288961 C12.6834198,4.90236532 13.3165848,4.90236532 13.7071091,5.29288961 L19.7071091,11.2928896 C20.085688,11.6714686 20.0989336,12.281055 19.7371564,12.675721 L14.2371564,18.675721 C13.863964,19.08284 13.2313966,19.1103429 12.8242777,18.7371505 C12.4171587,18.3639581 12.3896557,17.7313908 12.7628481,17.3242718 L17.6158645,12.0300721 L12.2928955,6.70710318 Z'
                  fill='#000000'
                  fill-rule='nonzero'
                />
                <path
                  d='M3.70710678,15.7071068 C3.31658249,16.0976311 2.68341751,16.0976311 2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 L8.29289322,8.29289322 C8.67147216,7.91431428 9.28105859,7.90106866 9.67572463,8.26284586 L15.6757246,13.7628459 C16.0828436,14.1360383 16.1103465,14.7686056 15.7371541,15.1757246 C15.3639617,15.5828436 14.7313944,15.6103465 14.3242754,15.2371541 L9.03007575,10.3841378 L3.70710678,15.7071068 Z'
                  fill='#000000'
                  fill-rule='nonzero'
                  opacity='0.3'
                  transform='translate(9.000003, 11.999999) rotate(-270.000000) translate(-9.000003, -11.999999) '
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
      <div className='d-flex align-items-center py-3'>
        {/* <div className='d-flex align-items-center'>
          <div className='mx-2 text-muted'>Loading...</div>
          <div className='spinner mr-10'></div>
        </div> */}

        <select
          className='form-select form-select-sm form-select-solid mx-4 border-0 bg-light'
          style={{width: 75}}
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <span className='text-muted'>
          Displaying {pageIndex + 1} of {pageOptions.length} records
        </span>
      </div>
    </div>
  )
}

export default TablePagination
