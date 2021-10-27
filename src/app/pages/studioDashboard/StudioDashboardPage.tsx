import {useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup/redux/RootReducer'
import ModalButton from '../../components/modals/ModalButton'
import {ModalTypes} from '../../components/modals/models'
import {modalActions} from '../../components/modals/state/MainModalState'
import Table from '../../components/Table/Table'
import Toolbar from '../../components/Toolbar'
import useAuth, {PERMISSIONS} from '../../hooks/useAuth'
import data from './data'
import {studio_dashboardActions} from './state/studio_dashboard'
import {studio_dashboardsActions} from './state/studios_dasbhboards'

const Studio_dashboards = () => {
  const dispatch = useDispatch()
  const {can} = useAuth()
  const canEditStudio_dashboard = can(PERMISSIONS.STUDIO_EDIT)
  const canCreateStudio_dashboard = can(PERMISSIONS.STUDIO_CREATE)
  const {studio_dashboards, loadingStudio_dashboards, error}: any = useSelector(
    ({studio_dashboards}: RootState) => studio_dashboards,
    shallowEqual
  )

  useEffect(() => {
    dispatch(studio_dashboardsActions.fetchStudio_dashboards())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = () => {}

  const handleRowClick = (value: any) => {
    if (!canEditStudio_dashboard) return
    dispatch(studio_dashboardActions.setStudio_dashboard(value))
    dispatch(modalActions.showModal({type: ModalTypes.STUDIO_FORM}))
  }

  const addModal = () => {
    return canCreateStudio_dashboard ? (
      <ModalButton buttonText='Add Entry' modalType={ModalTypes.STUDIO_DASHBOARD_FORM} />
    ) : null
  }

  if (error) {
    return <h2>Error</h2>
  }

  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      <Table
        data={studio_dashboards}
        columns={data.columns}
        searchPlaceholder='Search Entry'
        deleteAction={handleDelete}
        rowClick={handleRowClick}
        loading={loadingStudio_dashboards}
        addActionModal={addModal}
      />

      {/* <CreateStudio_dashboards /> */}
    </div>
  )
}

export default Studio_dashboards
