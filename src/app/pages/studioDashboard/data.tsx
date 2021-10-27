import SelectColumnFilter from '../../components/Table/Filters/SelectColumnFilter'
import {BreadCrumb} from '../../components/Toolbar'

const studio_dashboardsBreadCrumbs: BreadCrumb[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: 'Studio Dashboard',
  },
]

const columns = [
  {
    Header: 'Studio Name',
    accessor: 'studio_name',
  },
  {
    Header: '# of leads (organic & paid) for the week',
    accessor: 'leads',
  },
  {
    Header: 'Sales Conversion %',
    accessor: 'sales',
  },
  {
    Header: 'Rollover %',
    accessor: 'rollover',
  },
  {
    Header: 'Average Member Attendance Number',
    accessor: 'attendance',
  },
  {
    Header: 'Churn/Cancels %',
    accessor: 'cancels',
  },
  {
    Header: 'Net Growth #',
    accessor: 'net_growth',
  },
]

const studio_dashboardsData = {
  title: 'Studio Dashboard',
  breadcrumbs: studio_dashboardsBreadCrumbs,
  columns,
}

export default studio_dashboardsData
