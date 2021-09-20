import TableToolbar, {TableToolbarProps} from './TableToolbar'
import {Column, useFilters, useGlobalFilter, usePagination, useTable} from 'react-table'
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
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
