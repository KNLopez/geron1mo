import TableActions from './TableActions/TableActions'
import TableSearch from './TableSearch'

export interface TableToolbarProps {
  searchPlaceholder?: string
  addButtonText?: string
  preGlobalFilteredRows?: any
  setGlobalFilter?: any
  globalFilter?: any
  addActionModal?: any
  selectedRowIds?: any
}

const TableToolbar: React.FC<TableToolbarProps> = ({
  searchPlaceholder = 'Search',
  addButtonText = 'Add',
  preGlobalFilteredRows,
  setGlobalFilter,
  globalFilter,
  addActionModal,
  selectedRowIds,
}) => {
  return (
    <div className='card-header border-0 pt-6'>
      {console.log(selectedRowIds)}
      <TableSearch {...{searchPlaceholder, globalFilter, preGlobalFilteredRows, setGlobalFilter}} />
      <TableActions {...{addButtonText, addActionModal, selectedRowIds}} />
    </div>
  )
}

export default TableToolbar
