import TableToolbar, {TableToolbarProps} from './TableToolbar'
import {Column, useFilters, useGlobalFilter, usePagination, useSortBy, useTable} from 'react-table'
import TablePagination from './TableActions/TablePagination'

export interface TableProps {
  columns?: readonly Column<any>[]
  data?: readonly any[]
}

type Props = TableProps & TableToolbarProps

const Table: React.FC<Props> = ({columns = [], data = [], searchPlaceholder, addButtonText}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    state,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {pageIndex, pageSize},
  }: any = useTable<any>(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  return (
    <div className='card'>
      <TableToolbar
        {...{
          searchPlaceholder,
          addButtonText,
          preGlobalFilteredRows,
          globalFilter: state.globalFilter,
          setGlobalFilter,
        }}
      />
      <div className='card-body pt-0'>
        <div className='table-responsive'>
          <table
            className='table align-middle table-row-dashed fs-6 gy-5'
            id='kt_customers_table'
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup: any) => (
                <tr
                  className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'
                  {...headerGroup.getHeaderGroupProps()}
                >
                  <th className='w-10px pe-2'>
                    <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        data-kt-check='true'
                        data-kt-check-target='#kt_customers_table .form-check-input'
                      />
                    </div>
                  </th>
                  {headerGroup.headers.map((column: any) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
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
                                    transform='translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999) '
                                  />
                                </g>
                              </svg>
                            </span>
                          ) : (
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
                                  />
                                </g>
                              </svg>
                            </span>
                          )
                        ) : (
                          ''
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className='fw-bold text-gray-600' {...getTableBodyProps()}>
              {page.map((row: any) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    <td className='w-10px pe-2'>
                      <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          data-kt-check='true'
                          data-kt-check-target='#kt_customers_table .form-check-input'
                        />
                      </div>
                    </td>
                    {row.cells.map((cell: any) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <TablePagination
            {...{
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
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Table
