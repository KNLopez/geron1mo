import TableDelete from './TableDelete'
import TableExport from './TableExport'
import TableFilter from './TableFilter'

export interface TableActionsProps {
  addActionModal?: any
  selectedRowIds: any
}

const TableActions: React.FC<TableActionsProps> = ({addActionModal, selectedRowIds}) => {
  return (
    <div className='card-toolbar'>
      <div className='d-flex justify-content-end' data-kt-customer-table-toolbar='base'>
        {/* <TableExport /> */}
        {!Object.keys(selectedRowIds)?.length ? (
          <>
            <TableFilter />
            {addActionModal && addActionModal()}{' '}
          </>
        ) : (
          <TableDelete {...{selectedRowIds}} />
        )}
      </div>
    </div>
  )
}
export default TableActions
