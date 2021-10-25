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
import {studioActions} from './state/studio'
import {studiosActions} from './state/studios'

const Studios = () => {
  const dispatch = useDispatch()
  const {can} = useAuth()
  const canEditStudio = can(PERMISSIONS.STUDIO_EDIT)
  const canCreateStudio = can(PERMISSIONS.STUDIO_CREATE)
  const {studios, loadingStudios, error}: any = useSelector(
    ({studios}: RootState) => studios,
    shallowEqual
  )

  useEffect(() => {
    dispatch(studiosActions.fetchStudios())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = () => {}

  const handleRowClick = (value: any) => {
    if (!canEditStudio) return
    dispatch(studioActions.setStudio(value))
    dispatch(modalActions.showModal({type: ModalTypes.STUDIO_FORM}))
  }

  const addModal = () => {
    return canCreateStudio ? (
      <ModalButton buttonText='Add Studio' modalType={ModalTypes.STUDIO_FORM} />
    ) : null
  }

  if (error) {
    return <h2>Error</h2>
  }

  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      <Table
        data={studios}
        columns={data.columns}
        searchPlaceholder='Search Studios'
        deleteAction={handleDelete}
        rowClick={handleRowClick}
        loading={loadingStudios}
        addActionModal={addModal}
      />

      {/* <CreateStudios /> */}
    </div>
  )
}

export default Studios
