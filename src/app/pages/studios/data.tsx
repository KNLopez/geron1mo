import SelectColumnFilter from '../../components/Table/Filters/SelectColumnFilter'
import {BreadCrumb} from '../../components/Toolbar'

const studiosBreadCrumbs: BreadCrumb[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
  },
  {
    title: 'Studios',
  },
]

const columns = [
  {
    Header: 'Studio Name',
    accessor: 'name',
  },
  {
    Header: 'Location',
    accessor: 'location',
    Filter: SelectColumnFilter,
    disableFilters: false,
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Owner',
    accessor: 'studio_owner.data.lastname',
    Cell: ({row}: any) => (
      <span>{`${row.original.studio_owner?.data?.lastname}, ${row.original.studio_owner?.data?.firstname}`}</span>
    ),
  },
  {
    Header: 'Contact Number',
    accessor: 'mobile_number',
  },
  {
    Header: 'Studio Manager',
    accessor: 'studio_manager_lastname',
    Cell: ({row}: any) => (
      <span>{`${row.original.studio_manager?.data?.lastname}, ${row.original.studio_manager?.data?.firstname}`}</span>
    ),
  },
  {
    Header: 'Studio Manager Email',
    accessor: 'studio_manager_email',
  },
  {
    Header: 'Service Offered',
    accessor: 'service',
    Filter: SelectColumnFilter,
    disableFilters: false,
  },
  {
    Header: 'Assigned',
    accessor: 'assigned',
    Filter: SelectColumnFilter,
    disableFilters: false,
  },
]

const studiosData = {
  title: 'Studios',
  breadcrumbs: studiosBreadCrumbs,
  columns,
}

export default studiosData
