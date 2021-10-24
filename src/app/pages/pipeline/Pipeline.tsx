import {useCallback, useEffect} from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup'
import Toolbar from '../../components/Toolbar'
import PipelineColumn from './components/PipelineColumn'
import data from './data'
import {pipelineActions} from './state/pipeline'

const Pipeline = () => {
  const {data: PipelineData} = useSelector(({pipeline}: RootState) => pipeline, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(pipelineActions.processData())

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      let newData = await JSON.parse(JSON.stringify(PipelineData))
      const spliced = newData[source.droppableId].splice(source.index, 1)
      newData[destination.droppableId].splice(destination.index, 0, spliced[0])
      dispatch(
        pipelineActions.changeStatus({
          oldData: PipelineData,
          newData,
          contact: spliced[0],
          status: destination.droppableId,
        })
      )

      // the only one that is required
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [PipelineData]
  )

  return (
    <>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <div className='container-fluid h-100'>
          <div className='d-flex h-100'>
            {Object.entries(PipelineData).map((entry, index) => {
              const [dataKey, data] = entry
              return <PipelineColumn key={dataKey} {...{dataKey, data, index}} />
            })}
          </div>
        </div>
      </DragDropContext>
    </>
  )
}

export default Pipeline
