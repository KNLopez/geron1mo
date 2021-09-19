import TableActions from './TableActions/TableActions'
import TableSearch from './TableSearch'

export interface TableToolbarProps {
  searchPlaceholder?: string
  addButtonText?: string
}

const TableToolbar: React.FC<TableToolbarProps> = ({
  searchPlaceholder = 'Search',
  addButtonText = 'Add',
}) => {
  return (
    <div className='card-header border-0 pt-6'>
      <div className='card-toolbar'>
        <TableSearch {...{searchPlaceholder}} />
        <TableActions {...{addButtonText}} />
      </div>
    </div>
  )
}

export default TableToolbar
