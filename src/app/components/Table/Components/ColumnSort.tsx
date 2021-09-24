interface ColumnSortProps {
  isSortedDesc: boolean
}

const ColumnSort: React.FC<ColumnSortProps> = ({isSortedDesc}) => {
  return (
    <>
      {isSortedDesc ? (
        <span className='svg-icon svg-icon-primary svg-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16px'
            height='16px'
            viewBox='0 0 24 24'
            version='1.1'
          >
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <polygon points='0 0 24 0 24 24 0 24' />
              <path
                d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                fill='#000000'
                fillRule='nonzero'
                transform='translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999) '
              />
            </g>
          </svg>
        </span>
      ) : (
        <span className='svg-icon svg-icon-primary svg-icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16px'
            height='16px'
            viewBox='0 0 24 24'
            version='1.1'
          >
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
              <polygon points='0 0 24 0 24 24 0 24' />
              <path
                d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                fill='#000000'
                fillRule='nonzero'
              />
            </g>
          </svg>
        </span>
      )}
    </>
  )
}

export default ColumnSort
