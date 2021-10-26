import React from 'react'

interface Props {
  indeterminate?: boolean
}

const useCombinedRefs = (...refs: any[]): React.MutableRefObject<any> => {
  const targetRef = React.useRef()

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        ref.current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}

const RowCheckBox = React.forwardRef<HTMLInputElement, Props>(
  ({indeterminate, ...rest}, ref: React.Ref<HTMLInputElement>) => {
    const defaultRef = React.useRef(null)
    const combinedRef = useCombinedRefs(ref, defaultRef)

    React.useEffect(() => {
      if (combinedRef?.current) {
        combinedRef.current.indeterminate = indeterminate
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [combinedRef, indeterminate])

    return (
      <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
        <input ref={combinedRef} type='checkbox' {...rest} className='form-check-input' />
      </div>
    )
  }
)

export default RowCheckBox
