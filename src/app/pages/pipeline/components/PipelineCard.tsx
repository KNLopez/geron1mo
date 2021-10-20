import {Draggable} from 'react-beautiful-dnd'
import {OverlayTrigger, Tooltip} from 'react-bootstrap-v5'

const bgs = ['bg-warning', 'bg-success', 'bg-info', 'bg-danger', 'bg-dark']

const PipelineCard = ({item, index}: any) => {
  const numberValue = item.firstname ? item.firstname.toLowerCase().charCodeAt(0) - 97 + 1 : 0

  const renderTooltip = (props: any) => (
    <Tooltip id='button-tooltip' {...props}>
      {item.firstname}
    </Tooltip>
  )

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='card p-4 mb-4'
          onClick={() => {
            console.log('test')
          }}
        >
          <div className='card-body'>
            <h4>
              {item.firstname} {item.lastname}
            </h4>
          </div>
          <OverlayTrigger placement='right' overlay={renderTooltip}>
            <div
              className='symbol symbol-35px symbol-circle d-flex align-items-center justify-content-end w-100'
              data-bs-toggle='tooltip'
              title=''
              data-bs-original-title={`${item.firstname} ${item.lastname}`}
            >
              <span
                className={`symbol-label  text-inverse-primary fw-bolder ms-2 ${
                  bgs[numberValue % bgs.length]
                }`}
              >
                {item.firstname?.charAt(0)}
              </span>
            </div>
          </OverlayTrigger>
        </div>
      )}
    </Draggable>
  )
}

export default PipelineCard
