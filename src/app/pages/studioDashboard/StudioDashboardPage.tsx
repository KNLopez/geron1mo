import {useEffect, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup/redux/RootReducer'
import ModalButton from '../../components/modals/ModalButton'
import {ModalTypes} from '../../components/modals/models'
import {modalActions} from '../../components/modals/state/MainModalState'
import Toolbar from '../../components/Toolbar'
import useAuth, {PERMISSIONS} from '../../hooks/useAuth'
import data from './data'
import {studio_dashboardActions} from './state/studio_dashboard'
import {studio_dashboardsActions} from './state/studios_dasbhboards'
import Table from '../../components/Table/Table'
import {studiosActions} from '../studios/state/studios'
import CardList from '../../components/CardList/CardList'
import {Overview} from '../../modules/profile/components/Overview'
import {ProfileHeader} from '../../modules/profile/ProfileHeader'
import {StudioProfile} from './StudioProfile'

const Studio_dashboards = () => {
  const dispatch = useDispatch()
  const {can} = useAuth()
  const canEditStudio_dashboard = can(PERMISSIONS.STUDIO_EDIT)
  const canCreateStudio_dashboard = can(PERMISSIONS.STUDIO_CREATE)

  const [studio, setStudio] = useState(undefined)

  const {studios, loadingStudios, error}: any = useSelector(
    ({studios}: RootState) => studios,
    shallowEqual
  )

  useEffect(() => {
    dispatch(studiosActions.fetchStudios())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRowClick = (value: any) => {
    console.log(value)
    setStudio(value)
  }

  if (error) {
    return <h2>Error</h2>
  }

  return (
    <>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      <div className='row'>
        <div className='col-md-4'>
          <div className='d-flex flex-column flex-column-fluid' id='kt_content'>
            <CardList data={studios} onClick={handleRowClick} loading={loadingStudios} />
          </div>
        </div>
        <div className='col-md-8'>
          <StudioProfile {...{studio}} />
        </div>
      </div>
    </>
  )
}

export default Studio_dashboards
