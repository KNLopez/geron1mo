import {Link} from 'react-router-dom'
import SelectColumnFilter from '../../components/Table/Filters/SelectColumnFilter'
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
    Filter: SelectColumnFilter,
    disableFilters: false,
    Cell: ({row}: any) => <Link to='/campaign/overview'>{row.original.name?.toUpperCase()}</Link>,
  },
  {
    Header: 'FB Campaign Id',
    accessor: 'fb_campaign_id',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Filter: SelectColumnFilter,
    disableFilters: false,
    Cell: ({row}: any) => <span>{row.original.status?.toUpperCase()}</span>,
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
