import TableActions from './TableActions/TableActions'
import TableSearch from './TableSearch'

export interface TableToolbarProps {
  searchPlaceholder?: string
  addButtonText?: string
  preGlobalFilteredRows?: any
  setGlobalFilter?: any
  globalFilter?: any
  addActionModal?: any
}

const TableToolbar: React.FC<TableToolbarProps> = ({
  searchPlaceholder = 'Search',
  addButtonText = 'Add',
  preGlobalFilteredRows,
  setGlobalFilter,
  globalFilter,
  addActionModal,
}) => {
  return (
    <div className='card-header border-0 pt-6'>
      <TableSearch {...{searchPlaceholder, globalFilter, preGlobalFilteredRows, setGlobalFilter}} />
      <TableActions {...{addButtonText, addActionModal}} />
    </div>
  )
}

export default TableToolbar
