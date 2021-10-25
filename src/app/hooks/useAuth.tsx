import {shallowEqual, useSelector} from 'react-redux'
import {RootState} from '../../setup'

const useAuth = () => {
  const {permissions} = useSelector(({auth}: RootState) => auth, shallowEqual)

  const can = (action: any) => {
    return permissions ? permissions[action] : null
  }

  return {
    can,
  }
}

export default useAuth

export enum PERMISSIONS {
  STUDIO_INDEX = 'Studio.index?',
  STUDIO_VIEW = 'Studio.show?',
  STUDIO_CREATE = 'Studio.new?',
  STUDIO_EDIT = 'Studio.edit?',
  STUDIO_DESTROY = 'Studio.destroy?',
  CAMPAIGN_INDEX = 'Campaign.index?',
  CAMPAIGN_VIEW = 'Campaign.show?',
  CAMPAIGN_CREATE = 'Campaign.new?',
  CAMPAIGN_EDIT = 'Campaign.edit?',
  CAMPAIGN_DESTROY = 'Campaign.destroy?',
  USER_INDEX = 'User.index?',
  USER_VIEW = 'User.show?',
  USER_CREATE = 'User.new?',
  USER_EDIT = 'User.edit?',
  USER_DESTROY = 'User.destroy?',
}
