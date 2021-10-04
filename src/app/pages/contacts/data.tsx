import SelectColumnFilter from '../../components/Table/Filters/SelectColumnFilter'
import {BreadCrumb} from '../../components/Toolbar'

const contactsBreadCrumbs: BreadCrumb[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: 'Contacts',
  },
]

const columns = [
  {
    Header: 'Name',
    accessor: 'firstname',
    Cell: ({row}: any) => <span>{`${row.original?.firstname} ${row.original?.lastname}`}</span>,
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Date Created',
    accessor: 'created_at',
    filter: 'equals',
    // Filter: SelectColumnFilter,
    Cell: ({row}: any) => <span>{new Date(row.original.created_at).toLocaleString()}</span>,
  },
  {
    Header: 'Status',
    accessor: 'status',
    filter: 'equals',
    Filter: SelectColumnFilter,
    disableFilters: false,
    Cell: ({row}: any) => <span>{row.original.status?.toUpperCase()}</span>,
  },
  {
    Header: 'Assigned to',
    accessor: 'assigned',
    filter: 'equals',
    disableFilters: false,
    Filter: SelectColumnFilter,
  },
  {
    Header: 'Campaign',
    filter: 'equals',
    disableFilters: false,
    Filter: SelectColumnFilter,
    accessor: 'campaign_name',
  },
]

const contactsData = {
  title: 'Contacts',
  breadcrumbs: contactsBreadCrumbs,
  columns,
}

export default contactsData
