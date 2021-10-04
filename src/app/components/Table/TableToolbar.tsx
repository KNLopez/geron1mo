import TableActions, {TableActionsProps} from './TableActions/TableActions'
import TableSearch from './TableSearch'

interface TableToolbarLocalProps {
  searchPlaceholder?: string
  preGlobalFilteredRows?: any
  setGlobalFilter?: any
  globalFilter?: any
  headerGroups?: any
}

export type TableToolbarProps = TableToolbarLocalProps & TableActionsProps

const TableToolbar: React.FC<TableToolbarProps> = ({
  searchPlaceholder = 'Search',
  preGlobalFilteredRows,
  setGlobalFilter,
  globalFilter,
  addActionModal,
  selectedRowIds,
  deleteAction,
  headerGroups,
}) => {
  return (
    <div className='card-header border-0 pt-6'>
      <TableSearch {...{searchPlaceholder, globalFilter, preGlobalFilteredRows, setGlobalFilter}} />
      <TableActions {...{addActionModal, selectedRowIds, deleteAction, headerGroups}} />
    </div>
  )
}

export default TableToolbar
