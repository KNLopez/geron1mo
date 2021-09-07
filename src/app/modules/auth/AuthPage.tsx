/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'

export function AuthPage() {
  useEffect(() => {
    document.body.classList.add('bg-white')
    return () => {
      document.body.classList.remove('bg-white')
    }
  }, [])

  return (
    <div className='w-100 h-100'>
      <div className='row h-100'>
        <div className='col-md-6 d-flex flex-center bg-dark'>some content</div>
        {/* begin::Content */}
        <div className='col-md-6 d-flex flex-center flex-column flex-column-fluid'>
          {/* begin::Logo */}

          {/* end::Logo */}
          {/* begin::Wrapper */}
          <div className='w-lg-500px bg-white rounded  p-10 p-lg-15 mx-auto'>
            <Switch>
              <Route path='/auth/login' component={Login} />
              <Route path='/auth/registration' component={Registration} />
              <Route path='/auth/forgot-password' component={ForgotPassword} />
              <Redirect from='/auth' exact={true} to='/auth/login' />
              <Redirect to='/auth/login' />
            </Switch>
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Content */}
        {/* begin::Footer */}
      </div>
      {/* <div className='d-flex flex-center flex-column-auto p-10'>
        <div className='d-flex align-items-center fw-bold fs-6'>
          <a href='#' className='text-muted text-hover-primary px-2'>
            About
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact
          </a>

          <a href='#' className='text-muted text-hover-primary px-2'>
            Contact Us
          </a>
        </div>
      </div> */}
      {/* end::Footer */}
    </div>
  )
}
