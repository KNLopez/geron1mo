import {useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup/redux/RootReducer'
import ModalButton from '../../components/modals/ModalButton'
import {ModalTypes} from '../../components/modals/models'
import {modalActions} from '../../components/modals/state/MainModalState'
import Table from '../../components/Table/Table'
import Toolbar from '../../components/Toolbar'
import data from './data'
import ContactFormModal from './modals/ContactForm'
import {contactActions} from './state/contact'
import {contactsActions} from './state/contacts'

const Contacts = () => {
  const dispatch = useDispatch()
  const {contacts, loadingContacts, error}: any = useSelector(
    ({contacts}: RootState) => contacts,
    shallowEqual
  )

  useEffect(() => {
    dispatch(contactsActions.fetchContacts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = () => {}

  const handleRowClick = (value: any) => {
    dispatch(contactActions.setContact(value))
    dispatch(modalActions.showModal(ModalTypes.CONTACT_FORM))
  }

  if (error) {
    return <h2>Error</h2>
  }

  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      <Table
        data={contacts}
        columns={data.columns}
        deleteAction={handleDelete}
        searchPlaceholder='Search leads'
        rowClick={handleRowClick}
        addActionModal={() => (
          <ModalButton buttonText='Add Contact' modalType={ModalTypes.CONTACT_FORM} />
        )}
      />

      {/* <ContactFormModal /> */}
    </div>
  )
}

export default Contacts
