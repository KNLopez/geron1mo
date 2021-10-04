import TableDelete, {TableDeleteProps} from './TableDelete'
// import TableExport from './TableExport'
import TableFilter, {TableFilterProps} from './TableFilter'

interface TableActionsLocalProps {
  addActionModal?: any
}

export type TableActionsProps = TableActionsLocalProps & TableDeleteProps & TableFilterProps

const TableActions: React.FC<TableActionsProps> = ({
  addActionModal,
  selectedRowIds,
  deleteAction,
  headerGroups,
}) => {
  return (
    <div className='card-toolbar'>
      <div className='d-flex justify-content-end' data-kt-customer-table-toolbar='base'>
        {/* <TableExport /> */}
        {!Object.keys(selectedRowIds)?.length ? (
          <>
            <TableFilter {...{headerGroups}} />
            {addActionModal && addActionModal()}{' '}
          </>
        ) : (
          <TableDelete {...{selectedRowIds, deleteAction}} />
        )}
      </div>
    </div>
  )
}
export default TableActions
