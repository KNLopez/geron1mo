import {FC, useRef, useEffect, useState} from 'react'
import {shallowEqual, useSelector, connect, useDispatch, ConnectedProps} from 'react-redux'
import {LayoutSplashScreen} from '../../../../_metronic/layout/core'
import * as auth from './AuthRedux'
import {RootState} from '../../../../setup'
import {getAuthToken} from './AuthCRUD'
import {actions} from './AuthRedux'

const mapState = (state: RootState) => ({auth: state.auth})
const connector = connect(mapState, auth.actions)
type PropsFromRedux = ConnectedProps<typeof connector>

const AuthInit: FC<PropsFromRedux> = (props) => {
  const dispatch = useDispatch()
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  const user = useSelector<RootState>(({auth}) => auth.user, shallowEqual)

  // We should request user by authToken before rendering the application
  useEffect(() => {
    const requestUser = async () => {
      try {
        const userToken = await getAuthToken()
        if (!userToken) {
          dispatch(props.logout())
        } else {
          dispatch(
            actions.setUser({
              user: {
                email: 'kurtdevph@gmail.com',
                username: 'Kurt Lopez',
              },
            })
          )
        }
        setShowSplashScreen(false)
      } catch (err) {
        console.log(err)
      }
    }

    if (!user) {
      requestUser()
    } else {
      dispatch(props.logout())
      setShowSplashScreen(false)
    }
    // eslint-disable-next-line
  }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{props.children}</>
}

export default connector(AuthInit)
