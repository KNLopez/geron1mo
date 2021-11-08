import clsx from 'clsx'
import {Droppable} from 'react-beautiful-dnd'
import PipelineCard from './PipelineCard'

const borders = ['bg-secondary', 'bg-success', 'bg-info', 'bg-danger', 'bg-dark']

const statusText = ['Lead', 'Won', 'Lost', 'Active', 'Cancelled']

const PipelineColumn = ({dataKey, data, index}: any) => {
  return (
    <div className='min-w-350px w-25 m-3 p-4 pt-10 rounded'>
      <div className='text-capitalize fw-bolder fs-4 d-flex align-items-center pb-2'>
        {statusText[dataKey]}
        <span className='badge badge-xs badge-circle badge-secondary ms-2'>{data.length}</span>
      </div>
      <div className={`h-3px w-100 ${borders[index]}`} />
      <div className='pt-5 '>
        <Droppable droppableId={dataKey} key={dataKey} type='PERSON'>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={clsx(
                'p-1 rounded h-100',
                snapshot.isDraggingOver ? 'bg-secondary bg-gradient' : ''
              )}
              {...provided.droppableProps}
            >
              {data.map((item: any, index: any) => {
                return <PipelineCard key={item.id} {...{item, index}} />
              })}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  )
}

export default PipelineColumn
