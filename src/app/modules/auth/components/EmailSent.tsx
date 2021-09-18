/* eslint-disable jsx-a11y/anchor-is-valid */

import {useHistory} from 'react-router-dom'

export function EmailSent() {
  const history = useHistory()

  const handleClick = () => {
    history.push('/auth/login')
  }

  return (
    <div className='container'>
      <h2>You are one step away!</h2>
      <p>A confirmation link has been sent to your email.</p>
      <button className='btn btn-primary' onClick={handleClick}>
        Login
      </button>
    </div>
  )
}
