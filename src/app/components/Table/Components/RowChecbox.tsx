const RowCheckBox = (props: any) => {
  return (
    <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
      <input
        {...props}
        className='form-check-input'
        type='checkbox'
        data-kt-check='true'
        data-kt-check-target='#kt_customers_table .form-check-input'
      />
    </div>
  )
}

export default RowCheckBox
