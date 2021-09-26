import {useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup/redux/RootReducer'
import Table from '../../components/Table/Table'
import Toolbar from '../../components/Toolbar'
import data from './data'
import CreateStudios from './modals/StudioForm'
import {studiosActions} from './state/studios'

const Studioss = () => {
  const dispatch = useDispatch()
  const {studios, loadingStudios, error}: any = useSelector(
    ({studios}: RootState) => studios,
    shallowEqual
  )

  useEffect(() => {
    dispatch(studiosActions.fetchStudios())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = () => {}

  if (error) {
    return <h2>Error</h2>
  }

  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      {!loadingStudios && (
        <Table
          data={studios}
          columns={data.columns}
          searchPlaceholder='Search leads'
          deleteAction={handleDelete}
          addActionModal={() => <CreateStudios />}
        />
      )}
    </div>
  )
}

export default Studioss
