const Loader = ({LoadingText = 'Please wait...'}) => {
  return (
    <span className='indicator-progress p-4 ' style={{display: 'block'}}>
      {LoadingText}
      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
    </span>
  )
}

export default Loader
