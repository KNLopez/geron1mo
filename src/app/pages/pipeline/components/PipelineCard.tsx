import {Draggable} from 'react-beautiful-dnd'

const PipelineCard = ({item, index}: any) => {
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
          <h4>{item.firstname}</h4>
          <div className='card-footer'>Footer</div>
        </div>
      )}
    </Draggable>
  )
}

export default PipelineCard
