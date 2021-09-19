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
    Cell: ({row}: any) => <p>{`${row.original?.firstname} ${row.original?.lastname}`}</p>,
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
    Cell: ({row}: any) => <p>{new Date(row.original.created_at).toLocaleString()}</p>,
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
