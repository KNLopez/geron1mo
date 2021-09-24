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
    Cell: ({row}: any) => <span>{new Date(row.original.created_at).toLocaleString()}</span>,
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Assigned to',
    accessor: 'assigned',
  },
  {
    Header: 'Campaign',
    accessor: 'campaign_name',
  },
]

const contactsData = {
  title: 'Contacts',
  breadcrumbs: contactsBreadCrumbs,
  columns,
}

export default contactsData
