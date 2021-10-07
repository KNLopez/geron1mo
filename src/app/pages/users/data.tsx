import {BreadCrumb} from '../../components/Toolbar'

const usersBreadCrumbs: BreadCrumb[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: 'Users',
  },
]

const columns = [
  {
    Header: 'Name',
    accessor: 'firstname',
    Cell: ({row}: any) => <span>{`${row.original?.firstname} ${row.original?.lastname}`}</span>,
  },
  {
    Header: 'Start Date(MM/YYYY)',
    accessor: 'start_date',
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    Header: 'Title',
    accessor: 'title',
    Cell: ({row}: any) => <span>{row.original.title}</span>,
  },
  {
    Header: 'Job Description',
    accessor: 'job_description',
    // Cell: ({row}: any) => <span>{row.original.status?.toUpperCase()}</span>,
  },
  {
    Header: 'Email Address',
    accessor: 'email',
  },
  {
    Header: 'Phone Number',
    accessor: 'contact_number',
  },
  {
    Header: 'Meeting Link',
    accessor: 'meeting_link',
  },
  {
    Header: 'Birthday',
    accessor: 'birthday',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
]

const usersData = {
  title: 'Users',
  breadcrumbs: usersBreadCrumbs,
  columns,
}

export default usersData
