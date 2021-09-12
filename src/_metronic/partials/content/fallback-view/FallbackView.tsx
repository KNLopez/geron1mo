import {toAbsoluteUrl} from '../../../helpers'

export function FallbackView() {
  return (
    <div className=''>
      {/* <img src={toAbsoluteUrl('/media/logos/logo-geron1mo.png')} alt='Start logo' /> */}
      <span>Loading ...</span>
    </div>
  )
}
