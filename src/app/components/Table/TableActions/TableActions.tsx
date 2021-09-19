import TableAddButton, {TableAddButtonProps} from './TableAddButton'
import TableDelete from './TableDelete'
import TableExport from './TableExport'
import TableFilter from './TableFilter'

type TableActionsProps = TableAddButtonProps

const TableActions: React.FC<TableActionsProps> = ({addButtonText}) => {
  return (
    <div className='d-flex justify-content-end' data-kt-customer-table-toolbar='base'>
      <TableExport />
      <TableFilter />
      <TableAddButton {...{addButtonText}} />
      <TableDelete />
    </div>
  )
}
export default TableActions
