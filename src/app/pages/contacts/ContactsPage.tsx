import {useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup/redux/RootReducer'
import Table from '../../components/Table/Table'
import Toolbar from '../../components/Toolbar'
import data from './data'
import CreateContact from './modals/CreateContact'
import {contactsActions} from './state/contacts'

const Contacts = () => {
  const dispatch = useDispatch()
  const {contacts, loadingContacts, error}: any = useSelector<RootState>(
    ({contacts}) => contacts,
    shallowEqual
  )

  useEffect(() => {
    dispatch(contactsActions.fetchContacts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) {
    return <h2>Error</h2>
  }

  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      {!loadingContacts && <Table data={contacts} columns={data.columns} />}
      <CreateContact />
    </div>
  )
}

export default Contacts
