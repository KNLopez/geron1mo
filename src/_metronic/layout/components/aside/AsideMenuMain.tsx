/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {KTSVG} from '../../../helpers'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import PermissionGate from '../../../../app/components/PermissionGate'
import useAuth, {PERMISSIONS} from '../../../../app/hooks/useAuth'

export function AsideMenuMain() {
  const intl = useIntl()
  const {can} = useAuth()

  const canSeeStudios = can(PERMISSIONS.STUDIO_INDEX)
  const canSeeCampaigns = can(PERMISSIONS.STUDIO_INDEX)

  return (
    <>
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotone/Design/PenAndRuller.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      {/* <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotone/Interface/Settings-02.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      /> */}

      <AsideMenuItem
        to='/contacts'
        title='Contacts'
        icon='/media/icons/duotone/Communication/Contact1.svg'
        fontIcon='bi-layers'
      />

      {canSeeStudios && (
        <AsideMenuItemWithSub
          to='/studios'
          title='Studios'
          icon='/media/icons/duotone/Map/Marker2.svg'
          fontIcon='bi-layers'
        >
          <AsideMenuItem to='/studio-dashboard/' title='Dashboard' hasBullet={true} />
          <AsideMenuItem to='/studios/' title='List' hasBullet={true} />
        </AsideMenuItemWithSub>
      )}

      {canSeeCampaigns && (
        <AsideMenuItem
          to='/campaigns'
          title='Campaigns'
          icon='/media/icons/duotone/Devices/LTE1.svg'
          fontIcon='bi-layers'
        />
      )}
      <AsideMenuItem
        to='/users'
        title='Users'
        icon='/media/icons/duotone/Interface/User.svg'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/pipeline'
        title='Pipeline'
        icon='/media/icons/duotone/Layout/Layout-3d.svg'
        fontIcon='bi-layers'
      />
      {/* <AsideMenuItem
        to='/pitcrew'
        title='Pitcrew'
        icon='/media/icons/duotone/Clothes/Tie.svg'
        fontIcon='bi-layers'
      /> */}
      {/* <AsideMenuItem
        to='/students'
        title='Students'
        icon='/media/icons/duotone/Clothes/Socks.svg'
        fontIcon='bi-layers'
      /> */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div> */}
      {/* <AsideMenuItemWithSub
        to='/crafted/pages'
        title='Pages'
        fontIcon='bi-archive'
        icon='/media/icons/duotone/Code/Compiling.svg'
      >
        <AsideMenuItemWithSub to='/crafted/pages/profile' title='Profile' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='Overview' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/projects' title='Projects' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/campaigns' title='Campaigns' hasBullet={true} />
          <AsideMenuItem to='/crafted/pages/profile/documents' title='Documents' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to='/crafted/pages/wizards' title='Wizards' hasBullet={true}>
          <AsideMenuItem
            to='/crafted/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <AsideMenuItem to='/crafted/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotone/General/User.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Overview' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotone/Code/Error-circle.svg'
      >
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotone/Layout/Layout-4-blocks.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotone/Communication/Group-chat.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotone/Files/File.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}
