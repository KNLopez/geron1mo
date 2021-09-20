import TableDelete from './TableDelete'
import TableExport from './TableExport'
import TableFilter from './TableFilter'

export interface TableActionsProps {
  addActionModal?: any
}

const TableActions: React.FC<TableActionsProps> = ({addActionModal}) => {
  return (
    <div className='card-toolbar'>
      <div className='d-flex justify-content-end' data-kt-customer-table-toolbar='base'>
        {/* <TableExport /> */}
        <TableFilter />
        {addActionModal && addActionModal()}
        <TableDelete />
      </div>
    </div>
  )
}
export default TableActions
