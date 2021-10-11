import {useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup/redux/RootReducer'
import ModalButton from '../../components/modals/ModalButton'
import {ModalTypes} from '../../components/modals/models'
import {modalActions} from '../../components/modals/state/MainModalState'
import Table from '../../components/Table/Table'
import Toolbar from '../../components/Toolbar'
import data from './data'
import {campaignActions} from './state/campaign'
import {campaignsActions} from './state/campaigns'

const Campaigns = () => {
  const dispatch = useDispatch()
  const {campaigns, loadingCampaigns, error}: any = useSelector(
    ({campaigns}: RootState) => campaigns,
    shallowEqual
  )

  useEffect(() => {
    dispatch(campaignsActions.fetchCampaigns())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRowClick = (value: any) => {
    dispatch(campaignActions.setCampaign(value))
    dispatch(modalActions.showModal({type: ModalTypes.CAMPAIGN_FORM}))
  }

  const handleDelete = () => {}

  if (error) {
    return <h2>Error</h2>
  }

  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      <Table
        data={campaigns}
        columns={data.columns}
        searchPlaceholder='Search Campaigns'
        deleteAction={handleDelete}
        rowClick={handleRowClick}
        loading={loadingCampaigns}
        addActionModal={() => (
          <ModalButton buttonText='Add Campaign' modalType={ModalTypes.CAMPAIGN_FORM} />
        )}
      />
    </div>
  )
}

export default Campaigns
