import SelectColumnFilter from '../../components/Table/Filters/SelectColumnFilter'
import {BreadCrumb} from '../../components/Toolbar'
import studiosData from '../studios/data'

const studio_dashboardsBreadCrumbs: BreadCrumb[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: 'Studio Dashboard',
  },
]

const mockData = [
  {
    date: '10/15/2021',
    leads: 0,
    sales: 30,
    rollover: 21,
    attendance: 2,
    cancels: 1,
    new_growth: 40,
  },
  {
    date: '11/15/2021',
    leads: 9,
    sales: 31,
    rollover: 60,
    attendance: 10,
    cancels: 0,
    new_growth: 20,
  },
  {
    date: '12/15/2021',
    leads: 16,
    sales: 20,
    rollover: 70,
    attendance: 4,
    cancels: 0,
    new_growth: 30,
  },
  {
    date: '1/15/2022',
    leads: 15,
    sales: 21,
    rollover: 20,
    attendance: 3,
    cancels: 4,
    new_growth: 30,
  },
  {
    date: '2/15/2022',
    leads: 24,
    sales: 22,
    rollover: 30,
    attendance: 3.5,
    cancels: 3,
    new_growth: 30,
  },
  {
    date: '3/15/2022',
    leads: 37,
    sales: 10,
    rollover: 80,
    attendance: 2.5,
    cancels: 9,
    new_growth: 30,
  },
]

const columns = [
  {
    Header: 'Date',
    accessor: 'date',
    Cell: ({row}: any) => (
      <div className='text-muted'>{new Date(row.original.date).toLocaleString()}</div>
    ),
  },
  {
    Header: 'leads/week',
    accessor: 'leads',
    Cell: ({row}: any) => (
      <span className={getColor(row.original.leads, 'leads')}>{row.original.leads}</span>
    ),
  },
  {
    Header: 'Sales Conversion %',
    accessor: 'sales',
    Cell: ({row}: any) => (
      <span className={getColor(row.original.sales, 'sales')}>{row.original.sales}</span>
    ),
  },
  {
    Header: 'Rollover %',
    accessor: 'rollover',
    Cell: ({row}: any) => (
      <span className={getColor(row.original.rollover, 'rollover')}>{row.original.rollover}</span>
    ),
  },
  {
    Header: 'Average Member Attendance Number',
    accessor: 'attendance',
    Cell: ({row}: any) => (
      <span className={getColor(row.original.attendance, 'attendance')}>
        {row.original.attendance}
      </span>
    ),
  },
  {
    Header: 'Churn/Cancels %',
    accessor: 'cancels',
    Cell: ({row}: any) => (
      <span className={getColor(row.original.cancels, 'cancels')}>{row.original.cancels}</span>
    ),
  },
  {
    Header: 'Net Growth #',
    accessor: 'net_growth',
    Cell: ({row}: any) => (
      <span className={getColor(row.original.sales, 'net_growth')}>{row.original.net_growth}</span>
    ),
  },
]

const getColor = (value: any, type: any) => {
  const colors: any = {
    leads: () => {
      if (value >= 24) return 'text-info'
      if (value >= 16) return 'text-success'
      if (value >= 8) return 'text-warning'

      return 'text-danger'
    },
    sales: () => {
      if (value >= 31) return 'text-info'
      if (value >= 21) return 'text-success'
      if (value >= 11) return 'text-warning'

      return 'text-danger'
    },
    rollover: () => {
      if (value >= 80) return 'text-info'
      if (value >= 70) return 'text-success'
      if (value >= 41) return 'text-warning'

      return 'text-danger'
    },
    attendance: () => {
      if (value >= 4) return 'text-info'
      if (value >= 3) return 'text-success'
      if (value >= 1.1) return 'text-warning'

      return 'text-danger'
    },
    cancels: () => {
      if (value >= 8) return 'text-danger'
      if (value >= 6) return 'text-warning'
      if (value >= 4) return 'text-success'

      return 'text-info'
    },
    net_growth: () => {
      if (value >= 7) return 'text-info'
      if (value >= 4) return 'text-success'
      if (value >= 1) return 'text-warning'

      return 'text-danger'
    },
  }

  return colors[type]()
}

const studio_dashboardsData = {
  title: 'Studio Dashboard',
  breadcrumbs: studio_dashboardsBreadCrumbs,
  mainColumns: studiosData.columns,
  columns,
  mockData: mockData.reverse(),
}

export default studio_dashboardsData
