import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from '../../modules/profile/components/Overview'
import {Connections} from '../../modules/profile/components/Connections'
import {Documents} from '../../modules/profile/components/Documents'
import {Projects} from '../../modules/profile/components/Projects'
import {ProfileHeader} from '../../modules/profile/ProfileHeader'
import Campaigns from '../campaigns/CampaignsPage'

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
  return (
    <>
      <ProfileHeader />
      <Switch>
        <Route path='/campaign/overview'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
          <Overview />
        </Route>
        {/* <Route path='/campaign/projects'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle>
          <Projects />
        </Route> */}
        <Route path='/campaign/campaigns'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
          <Campaigns />
        </Route>
        <Route path='/campaign/documents'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
          <Documents />
        </Route>
        <Route path='/campaign/connections'>
          <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
          <Connections />
        </Route>
        <Redirect from='/campaign/profile' exact={true} to='/campaign/overview' />
        <Redirect to='/campaign/' />
      </Switch>
    </>
  )
}

export default CampaignPage
