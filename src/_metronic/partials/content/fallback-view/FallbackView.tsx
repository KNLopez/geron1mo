import Loader from '../../../../app/components/Loader'
import {toAbsoluteUrl} from '../../../helpers'

export function FallbackView() {
  return <Loader LoadingText='Loading page' />
}
