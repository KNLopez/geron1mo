import {useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup/redux/RootReducer'
import ModalButton from '../../components/modals/ModalButton'
import {ModalTypes} from '../../components/modals/models'
import {modalActions} from '../../components/modals/state/MainModalState'
import Table from '../../components/Table/Table'
import Toolbar from '../../components/Toolbar'
import data from './data'
import UserFormModal from './modals/UserForm'
import {userActions} from './state/user'
import {usersActions} from './state/users'

const Users = () => {
  const dispatch = useDispatch()
  const {users, loadingUsers, error}: any = useSelector(({users}: RootState) => users, shallowEqual)

  useEffect(() => {
    dispatch(usersActions.fetchUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = () => {}

  const handleRowClick = (value: any) => {
    dispatch(userActions.setUser(value))
    dispatch(modalActions.showModal(ModalTypes.CONTACT_FORM))
  }

  if (error) {
    return <h2>Error</h2>
  }

  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      {!loadingUsers && (
        <Table
          data={users}
          columns={data.columns}
          deleteAction={handleDelete}
          searchPlaceholder='Search users'
          rowClick={handleRowClick}
          addActionModal={() => (
            <ModalButton buttonText='Add User' modalType={ModalTypes.CONTACT_FORM} />
          )}
        />
      )}

      {/* <UserFormModal /> */}
    </div>
  )
}

export default Users
