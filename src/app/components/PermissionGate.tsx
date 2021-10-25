import {shallowEqual, useSelector} from 'react-redux'
import {RootState} from '../../setup'

const PermissionGate = ({permission, children}: any) => {
  const {permissions} = useSelector(({auth}: RootState) => auth, shallowEqual)
  if (!permissions[permission]) return null

  return <>children</>
}

export default PermissionGate
