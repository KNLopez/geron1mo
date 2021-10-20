import clsx from 'clsx'
import {useCallback, useEffect, useState} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import {batch, shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup'
import {contactsActions} from '../contacts/state/contacts'
import PipelineColumn from './components/PipelineColumn'
import {pipelineActions} from './state/pipeline'

const mockData: any = {
  open: [
    {
      id: '414141',
      title: 'yayaya',
    },
    {
      id: '4142141',
      title: 'yay4aya',
    },
    {
      id: '4134141',
      title: 'yay4aya',
    },
  ],

  won: [],
  paid: [],
  cancelled: [],
  lost: [],
}

const Pipeline = () => {
  const {data} = useSelector(({pipeline}: RootState) => pipeline, shallowEqual)
  const {contacts} = useSelector(({contacts}: RootState) => contacts, shallowEqual)
  console.log(data)

  const dispatch = useDispatch()

  useEffect(() => {
    // console.log(data)
    dispatch(pipelineActions.processData())
    // setPipelineData(mockData)
  }, [])

  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, [])

  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, [])

  const onDragStart = useCallback(() => {
    /*...*/
  }, [])

  const onDragUpdate = useCallback(() => {
    /*...*/
  }, [])

  const onDragEnd = useCallback(
    async (result) => {
      const {source, destination}: any = result
      if (!destination) {
        return
      }
      let newData = await JSON.parse(JSON.stringify(data))
      const spliced = newData[source.droppableId].splice(source.index, 1)
      newData[destination.droppableId].splice(destination.index, 0, spliced[0])
      dispatch(pipelineActions.setData(newData))

      // the only one that is required
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  )

  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <div className='container-fluid h-100'>
        <div className='d-flex h-100'>
          {Object.entries(data).map((entry, index) => {
            const [dataKey, data] = entry
            return <PipelineColumn key={dataKey} {...{dataKey, data, index}} />
          })}
        </div>
      </div>
    </DragDropContext>
  )
}

export default Pipeline
