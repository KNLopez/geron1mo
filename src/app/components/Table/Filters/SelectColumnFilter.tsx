import {useMemo} from 'react'

const SelectColumnFilter = ({
  column: {filterValue, setFilter, preFilteredRows, id, Header},
  ...props
}: any) => {
  // Calculate the options for filtering
  // using the preFilteredRows

  const options = useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <div className='px-7 py-5'>
      <label className='form-label fs-5 fw-bold mb-3'>{Header}:</label>
      <select
        className='form-select form-select-solid fw-bolder'
        data-kt-select2='true'
        data-placeholder='Select option'
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value=''>All</option>
        {options.map((option: any, i) => {
          if (!option) {
            return
          }
          return (
            <option key={i + option} value={option}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectColumnFilter
