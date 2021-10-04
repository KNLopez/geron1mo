import 'flatpickr/dist/themes/airbnb.css'
import {Field} from 'formik'

import Flatpickr from 'react-flatpickr'

interface DatePickerComponentProps {
  value?: string
  label?: string
  handleChange: (name: any, date: any) => any
  name?: string
  className?: string
  placeholder?: string
  minDate?: string
}

const Datepicker = ({
  value = '',
  label,
  handleChange,
  name,
  minDate,
  ...props
}: DatePickerComponentProps) => {
  const dateHandler = (date: any) => {
    console.log(date)
    handleChange(name, date[0])
  }

  return (
    <div className='fv-row mb-10'>
      <label className='d-flex align-items-center fs-5 fw-bold mb-2'>{label}</label>

      <Flatpickr
        {...props}
        name={name}
        onChange={dateHandler}
        options={{dateFormat: 'm-d-Y', minDate}}
      />
    </div>
  )
}

export default Datepicker
