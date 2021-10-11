import React, {useEffect} from 'react'
import {Redirect, Route, Switch, useParams} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Documents} from '../../modules/profile/components/Documents'
import {ProfileHeader} from '../../modules/profile/ProfileHeader'
import Campaigns from './CampaignsPage'
import ContactsPage from '../contacts/ContactsPage'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup'
import Toolbar from '../../components/Toolbar'
import data from './data'
import {campaignActions} from './state/campaign'
import OverviewPage from './CampaignPages/OverviewPage'

import {Group} from '../../modules/apps/chat/components/Group'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/crafted/pages/profile/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const CampaignPage: React.FC = () => {
  const dispatch = useDispatch()
  const {id}: any = useParams()
  const {campaign, loadingCampaign, error}: any = useSelector(
    ({campaign}: RootState) => campaign,
    shallowEqual
  )

  useEffect(() => {
    dispatch(campaignActions.fetchCampaign(id))
  }, [])

  const breadCrumbs = [
    ...data.campaignBreadCrumbs,
    {
      title: campaign.name,
    },
  ]

  if (error) return null

  return (
    <>
      <Toolbar title={campaign.name} breadcrumbs={breadCrumbs} />
      <ProfileHeader {...{id}} />
      <Switch>
        <Route path='/campaign/:id/overview'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
          <OverviewPage />
        </Route>
        <Route path='/campaign/:id/discussions'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Discussions</PageTitle>
          <Group />
        </Route>
        <Route path='/campaign/:id/documents'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
          <Documents />
        </Route>
        <Route path='/campaign/:id/connections'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Leads</PageTitle>
          <ContactsPage {...{id}} />
        </Route>
        <Redirect from='/campaign/:id/profile' exact={true} to='/campaign/:id/overview' />
        <Redirect to='/campaign/:id/overview' />
      </Switch>
    </>
  )
}

export default CampaignPage
