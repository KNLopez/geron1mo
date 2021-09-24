import {BreadCrumb} from '../../components/Toolbar'

const campaignsBreadCrumbs: BreadCrumb[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: 'Campaigns',
  },
]

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Start Date',
    accessor: 'start_date',
  },
  {
    Header: 'End Date',
    accessor: 'end_date',
  },
]

const campaignsData = {
  title: 'Contacts',
  breadcrumbs: campaignsBreadCrumbs,
  columns,
}

export default campaignsData
