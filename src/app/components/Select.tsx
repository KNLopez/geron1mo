import {useEffect, useState} from 'react'
import Select from 'react-select'

const SelectBox = ({options, isMulti, name, handleChange, value, loading}: any) => {
  const [optionSelected, setSelectedOptions] = useState()

  const selectHandler = (selected: any) => {
    const values = selected.map((select: any) => select.value)
    setSelectedOptions(selected)
    handleChange(name, values)
  }

  useEffect(() => {
    if (!value || !value?.length || !options.length) return

    const currentValue = options.filter((option: any) => {
      return value.includes(option.value)
    })

    setSelectedOptions(currentValue)
  }, [])

  return (
    <Select
      isMulti={isMulti}
      options={options}
      isLoading={loading}
      closeMenuOnSelect={true}
      onChange={selectHandler}
      value={optionSelected}
      name={name}
    />
  )
}

export default SelectBox
