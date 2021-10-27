import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'

export function PrivateRoutes() {
  const ContactsPage = lazy(() => import('../pages/contacts/ContactsPage'))
  const CampaignsPage = lazy(() => import('../pages/campaigns/CampaignsPage'))
  const StudiosPage = lazy(() => import('../pages/studios/StudioPage'))
  const StudioDashboardPage = lazy(() => import('../pages/studioDashboard/StudioDashboardPage'))
  const CampaignPage = lazy(() => import('../pages/campaigns/CampaignPage'))
  const UsersPage = lazy(() => import('../pages/users/UsersPage'))
  const PipelinePage = lazy(() => import('../pages/pipeline/Pipeline'))
  // const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  // const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/contacts' component={ContactsPage} />
        <Route path='/studios' component={StudiosPage} />
        <Route path='/studio-dashboard' component={StudioDashboardPage} />
        <Route path='/campaigns' component={CampaignsPage} />
        <Route path='/campaign/:id' component={CampaignPage} />
        <Route path='/users' component={UsersPage} />
        <Route path='/pipeline' component={PipelinePage} />

        {/* <Route path='/contacts' component={ContactsPage} /> */}
        {/* <Route path='/pitcrews' component={ContactsPage} /> */}
        {/* <Route path='/students' component={ContactsPage} /> */}
        {/* <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} /> */}
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
