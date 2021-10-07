import {shallowEqual, useSelector} from 'react-redux'
import {RootState} from '../../../setup'
import CampaignForm from '../../pages/campaigns/modals/CampaignForm'
import ContactForm from '../../pages/contacts/modals/ContactForm'
import StudioForm from '../../pages/studios/modals/StudioForm'
import UserForm from '../../pages/users/modals/UserForm'
import {ModalTypes} from './models'

const ModalContainer: React.FC = () => {
  const {type}: any = useSelector(({modal}: RootState) => modal, shallowEqual)

  const modals: any = {
    [ModalTypes.CONTACT_FORM]: ContactForm,
    [ModalTypes.STUDIO_FORM]: StudioForm,
    [ModalTypes.CAMPAIGN_FORM]: CampaignForm,
    [ModalTypes.USER_FORM]: UserForm,
  }

  if (!type) return null
  const ModalContent = modals[type]

  return <ModalContent />
}

export default ModalContainer
