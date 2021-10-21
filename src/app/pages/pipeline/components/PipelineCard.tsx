import {Draggable} from 'react-beautiful-dnd'
import {OverlayTrigger, Tooltip} from 'react-bootstrap-v5'
import {useDispatch} from 'react-redux'
import {KTSVG} from '../../../../_metronic/helpers/components/KTSVG'
import {ModalTypes} from '../../../components/modals/models'
import {modalActions} from '../../../components/modals/state/MainModalState'
import {contactActions} from '../../contacts/state/contact'

const bgs = ['bg-warning', 'bg-success', 'bg-info', 'bg-danger', 'bg-dark']

const PipelineCard = ({item, index}: any) => {
  const dispatch = useDispatch()
  const numberValue = item.firstname ? item.firstname.toLowerCase().charCodeAt(0) - 97 + 1 : 0

  const renderTooltip = (props: any) => (
    <Tooltip id='button-tooltip' {...props}>
      {item.firstname}
    </Tooltip>
  )

  const handleClick = (e: any) => {
    console.log(e.target)
    if (
      e.target instanceof HTMLAnchorElement ||
      e.target instanceof HTMLButtonElement ||
      e.target instanceof SVGElement
    )
      return
    dispatch(contactActions.setContact(item))
    dispatch(modalActions.showModal({type: ModalTypes.CONTACT_FORM}))
  }

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='card p-2 mb-4'
          onClick={handleClick}
        >
          <div className='card-body p-4'>
            <div className='d-flex justify-content-between align-items-center'>
              <h4>
                {item.firstname} {item.lastname}
              </h4>
            </div>
            <span className='text-primary'>{item.campaign_name}</span>
          </div>
          <div className='card-footer p-4 border-0 pt-0 d-flex justify-content-between align-items-center w-100 mt-2'>
            <div className='d-flex text-muted'>
              <a
                className='btn btn-icon btn-bg-light btn-active-color-info btn-sm me-2'
                href={`tel:${item.phone}`}
              >
                <KTSVG
                  path='/media/icons/duotone/Interface/Phone.svg'
                  className='svg-icon-4 me-0 text-primary'
                />
              </a>
              <a
                className='btn btn-icon btn-bg-light btn-active-color-info btn-sm me-2'
                href={`mailto:${item.email}`}
              >
                <KTSVG
                  path='/media/icons/duotone/Interface/Envelope.svg'
                  className='svg-icon-4 me-0 text-primary'
                />
              </a>
              <button className='btn btn-icon btn-bg-light btn-active-color-info btn-sm me-2'>
                <KTSVG
                  path='/media/icons/duotone/Communication/Chat6.svg'
                  className='svg-icon-4 me-0 text-primary'
                />
              </button>
            </div>
            <div
              className='symbol symbol-35px symbol-circle d-flex align-items-center justify-content-end '
              data-bs-toggle='tooltip'
              title=''
              data-bs-original-title={`${item.firstname} ${item.lastname}`}
            >
              <OverlayTrigger placement='right' overlay={renderTooltip}>
                <span
                  className={`symbol-label text-inverse-primary fw-bolder ms-2 ${
                    bgs[numberValue % bgs.length]
                  }`}
                >
                  {item.firstname?.charAt(0)}
                </span>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default PipelineCard
