import {useEffect, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup/redux/RootReducer'
import ModalButton from '../../components/modals/ModalButton'
import {ModalTypes} from '../../components/modals/models'
import {modalActions} from '../../components/modals/state/MainModalState'
import Toolbar from '../../components/Toolbar'
import useAuth from '../../hooks/useAuth'
import data from './data'

import {studiosActions} from '../studios/state/studios'
import CardList from '../../components/CardList/CardList'

import {StudioProfile} from './StudioProfile'
import {Error404} from '../../modules/errors/components/Error404'

const Studio_dashboards = () => {
  const dispatch = useDispatch()
  const [studio, setStudio] = useState<any>(undefined)

  const {studios, loadingStudios, error}: any = useSelector(
    ({studios}: RootState) => studios,
    shallowEqual
  )

  useEffect(() => {
    dispatch(studiosActions.fetchStudios())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (studio && studios.length === 0) return
    setStudio(studios[0])

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studios])

  const handleRowClick = (value: any) => {
    setStudio(value)
  }

  if (error) {
    return <Error404 />
  }

  return (
    <>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      <div className='row'>
        <div className='col-md-4'>
          <div className='d-flex flex-column flex-column-fluid' id='kt_content'>
            <CardList
              selected={studio?.id}
              data={studios}
              onClick={handleRowClick}
              loading={loadingStudios}
            />
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
