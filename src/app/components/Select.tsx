import {useState} from 'react'
import Select from 'react-select'

const SelectBox = ({options, isMulti, name, handleChange, value}: any) => {
  const [optionSelected, setSelectedOptions] = useState(value)

  const optionsDef: any = [
    {value: '1', label: 'Studio 1'},
    {value: '2', label: 'Studio 2'},
    {value: '3', label: 'Studio 3'},
  ]

  const selectHandler = (selected: any) => {
    const values = selected.map((select: any) => select.value)
    setSelectedOptions(selected)
    handleChange(name, values)
  }

  return (
    <Select
      isMulti={isMulti}
      options={options.length ? options : optionsDef}
      isLoading={!optionsDef}
      closeMenuOnSelect={true}
      onChange={selectHandler}
      value={optionSelected}
      name={name}
    />
  )
}

export default SelectBox
