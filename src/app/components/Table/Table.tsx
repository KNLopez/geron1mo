import TableToolbar, {TableToolbarProps} from './TableToolbar'
import {
  Column,
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
  useRowSelect,
} from 'react-table'
import TablePagination from './TableActions/TablePagination'
import ColumnSort from './Components/ColumnSort'
import RowCheckBox from './Components/RowChecbox'
import {TableSearchProps} from './TableSearch'
import {FallbackView} from '../../../_metronic/partials'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import Loader from '../Loader'
import clsx from 'clsx'

export interface TableProps {
  columns?: readonly Column<any>[]
  data?: readonly any[]
  addActionModal: any
  deleteAction: () => any
  rowClick?: (row: any) => any
  loading?: boolean
}

type Props = TableProps & TableSearchProps

const Table: React.FC<Props> = ({
  columns = [],
  data = [],
  searchPlaceholder,
  addActionModal,
  deleteAction,
  rowClick,
  loading = false,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
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
    state: {pageIndex, pageSize, selectedRowIds, globalFilter},
  }: any = useTable<any>(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({getToggleAllRowsSelectedProps}: any) => (
            <RowCheckBox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({row}: any) => <RowCheckBox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ])
    }
  )

  const handleClick = (e: any, row: any) => {
    if (e.target instanceof HTMLAnchorElement) {
      return
    }

    rowClick && rowClick(row.original)
  }

  return (
    <div className='card table-comp'>
      <TableToolbar
        {...{
          searchPlaceholder,
          addActionModal,
          preGlobalFilteredRows,
          globalFilter,
          setGlobalFilter,
          selectedRowIds,
          deleteAction,
        }}
      />
      <div className='card-body pt-0'>
        <div className={clsx('table-responsive overlay', {'overlay-block': loading})}>
          {loading && (
            <div className='flex align-items-center fullwidth p-4 overlay-layer bg-white '>
              <Loader LoadingText='Table Loading' />
            </div>
          )}
          <table className='table align-middle table-row-dashed fs-6 gy-5' {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup: any) => (
                <tr
                  className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column: any) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted && <ColumnSort isSortedDesc={column.isSortedDesc} />}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody className='fw-bold text-gray-600' {...getTableBodyProps()}>
              {!loading &&
                page.map((row: any) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()} onClick={(e) => handleClick(e, row)}>
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
