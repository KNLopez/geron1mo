import {useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup/redux/RootReducer'
import Table from '../../components/Table/Table'
import Toolbar from '../../components/Toolbar'
import data from './data'
import CreateCampaign from './modals/CreateCampaign'
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

  if (error) {
    return <h2>Error</h2>
  }

  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      {!loadingCampaigns && (
        <Table
          data={campaigns}
          columns={data.columns}
          searchPlaceholder='Search leads'
          addActionModal={() => <CreateCampaign />}
        />
      )}
    </div>
  )
}

export default Campaigns
