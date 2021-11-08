import {useCallback, useEffect, useState} from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../../setup'
import Datepicker from '../../components/Flatpicker'
import Toolbar from '../../components/Toolbar'
import useDebounce from '../../hooks/useDebounce'
import PipelineColumn from './components/PipelineColumn'
import data from './data'
import {pipelineActions} from './state/pipeline'

const Pipeline = () => {
  const {data: PipelineData, filteredData} = useSelector(
    ({pipeline}: RootState) => pipeline,
    shallowEqual
  )

  const [filters, setFilters] = useState<any>({
    date: {},
    name: '',
  })

  const debounceFilters = useDebounce(filters, 1000)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(pipelineActions.processData())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (debounceFilters) {
      const newData = Object.entries(PipelineData).map((data) => {
        const [key, items]: any = data
        const newItems = items.filter((item: any) => {
          const search = filters.name.toLowerCase()
          console.log(search, item)
          const dateFilter = filters.date
            ? new Date(item.created_at) > new Date(filters.date.start) &&
              new Date(item.created_at) < new Date(filters.date.end)
            : true
          const nameFilter = filters.name
            ? (item.firstname || '').toLowerCase().includes(search) ||
              (item.lastname || '').toLowerCase().includes(search)
            : true

          if (dateFilter || nameFilter)
            console.log(item, new Date(item.created_at) > new Date(filters.date.start))
          return dateFilter && nameFilter
        })
        return newItems
      })

      dispatch(pipelineActions.setFilteredData(newData))
    } else {
      setFilters({})
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceFilters])

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
      let newData = await JSON.parse(JSON.stringify(filteredData))
      const spliced = newData[source.droppableId].splice(source.index, 1)
      newData[destination.droppableId].splice(destination.index, 0, spliced[0])
      dispatch(
        pipelineActions.changeStatus({
          oldData: filteredData,
          newData,
          contact: spliced[0],
          status: destination.droppableId,
        })
      )

      // the only one that is required
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filteredData]
  )

  const handleDateChange = (name: any, value: any) => {
    setFilters((prev: any) => {
      return {
        ...prev,
        date: {
          ...prev.date,
          [name]: value,
        },
      }
    })
  }

  const handleSearch = (e: any) => {
    setFilters((prev: any) => {
      return {...prev, name: e.target.value}
    })
  }

  return (
    <>
      <Toolbar title={data.title} breadcrumbs={data.breadcrumbs} />
      <div className='pipeline-filter'>
        <Datepicker
          handleChange={handleDateChange}
          name='start'
          value={filters.date.start}
          label='Start date'
        />
        <Datepicker
          handleChange={handleDateChange}
          name='end'
          value={filters.date.end}
          label='End Date'
        />
        <input type='text' className='form-control' onChange={handleSearch} value={filters.name} />
      </div>
      <DragDropContext
        onBeforeCapture={onBeforeCapture}
        onBeforeDragStart={onBeforeDragStart}
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <div className='container-fluid h-100'>
          <div className='d-flex h-100'>
            {Object.entries(filteredData).map((entry, index) => {
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
