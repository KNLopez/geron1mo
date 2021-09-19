import TableToolbar, {TableToolbarProps} from './TableToolbar'
import {Column, useTable} from 'react-table'

export interface TableProps {
  columns?: readonly Column<any>[]
  data?: readonly any[]
}

type Props = TableProps & TableToolbarProps

const Table: React.FC<Props> = ({columns = [], data = [], searchPlaceholder, addButtonText}) => {
  const tableInstance = useTable({columns, data})

  const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance

  return (
    <div className='card'>
      <TableToolbar {...{searchPlaceholder, addButtonText}} />
      <div className='card-body pt-0'>
        <div className='table-responsive'>
          <table
            className='table align-middle table-row-dashed fs-6 gy-5'
            id='kt_customers_table'
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
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
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className='fw-bold text-gray-600' {...getTableBodyProps()}>
              {rows.map((row) => {
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
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
