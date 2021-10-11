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
    accessor: 'address',
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
      <span>{`${row.original.studio_owner?.data?.firstname || ''} ${
        row.original.studio_owner?.data?.lastname || ''
      }`}</span>
    ),
  },
  {
    Header: 'Contact Number',
    accessor: 'mobile_number',
    Cell: ({row}: any) => <span>{`${row.original.studio_owner?.data?.mobile_number || ''}`}</span>,
  },
  {
    Header: 'Studio Manager',
    accessor: 'studio_manager_lastname',
    Cell: ({row}: any) => (
      <span>{`${row.original.studio_manager?.data?.firstname || ''} ${
        row.original.studio_manager?.data?.lastname || ''
      }`}</span>
    ),
  },
  {
    Header: 'Studio Manager Email',
    accessor: 'studio_manager_email',
    Cell: ({row}: any) => <span>{`${row.original.studio_manager?.data?.email}`}</span>,
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
