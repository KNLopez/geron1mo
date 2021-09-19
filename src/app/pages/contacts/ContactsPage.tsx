import {useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup/redux/RootReducer'
import Table from '../../components/Table/Table'
import Toolbar from '../../components/Toolbar'
import data from './data'
import {contactsActions} from './state/contacts'

const Contacts = () => {
  const dispatch = useDispatch()
  const {contacts, loadingContacts, error}: any = useSelector<RootState>(
    ({contacts}) => contacts,
    shallowEqual
  )

  console.log(contacts, loadingContacts, error)
  useEffect(() => {
    dispatch(contactsActions.fetchContacts())
  }, [])

  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      {!!contacts.length && <Table data={contacts} columns={data.columns} />}
    </div>
  )
}

export default Contacts
