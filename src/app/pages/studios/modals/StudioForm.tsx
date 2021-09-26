import Modal from '../../../components/modals/MainModal'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik, FormikValues, useFormik} from 'formik'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {studioActions, InitialStudioStateType} from '../state/studio'
import clsx from 'clsx'
import {RootState} from '../../../../setup/redux/RootReducer'
import {Main} from '../../../../_metronic/partials/modals/create-app/Main'
import {useEffect, useRef, useState} from 'react'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {Studio} from '../state/models'

const inits: Studio = {
  name: '',
  location: '',
  email: '',
  owner_firstname: '',
  owner_lastname: '',
  owner_email: '',
  mobile_number: '',
  studio_manager_firstname: '',
  studio_manager_lastname: '',
  studio_manager_email: '',
}

const createAppSchema = [
  Yup.object({
    name: Yup.string().required('Studio Name is Required').label('Studio Name'),
    location: Yup.string().required().label('Studio Location'),
    email: Yup.string().email('Wrong email format').label('Studio Email').required(),
  }),
  Yup.object({
    owner_firstname: Yup.string().required().label("Owner's First Name"),
    owner_lastname: Yup.string().required().label("Owner's Last Name"),
    mobile_number: Yup.string().required().label("Owner's Mobile Number"),
    owner_email: Yup.string().email('Wrong email format').label("Owner's Email").required(),
  }),
  Yup.object({
    studio_manager_firstname: Yup.string().required().label("Owner's First Name"),
    studio_manager_lastname: Yup.string().required().label("Owner's Last Name"),
    studio_manager_email: Yup.string()
      .email('Wrong email format')
      .label("Studio Manager's Email")
      .required(),
  }),
]

const CreateStudio: React.FC<any> = () => {
  const dispatch = useDispatch()

  const {loadingStudio, error}: InitialStudioStateType = useSelector(
    (state: RootState) => state.studio,
    shallowEqual
  )

  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAppSchema[0])
  const [initValues] = useState<Studio>(inits)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAppSchema[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: Studio, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setCurrentSchema(createAppSchema[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      dispatch(studioActions.createStudio(values))
      // stepper.current.goto(1)
      // actions.resetForm()
    }
  }

  useEffect(() => {
    if (error) {
      alert('error!')
    }
  }, [error])

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <Modal
      title='Create Studio'
      buttonText='Add Studio'
      onEntered={loadStepper}
      onHide={() => dispatch(studioActions.resetStudio())}
      // buttonAction={formik.handleSubmit}
      // isValid={!loadingStudio && formik.isValid}
    >
      <div className='modal-body py-lg-10 px-lg-10'>
        <div
          ref={stepperRef}
          className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
        >
          <div className='d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px'>
            <div className='stepper-nav ps-lg-10'>
              <div className='stepper-item current' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>1</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Studio Details</h3>

                  <div className='stepper-desc'>Name your Studio</div>
                </div>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>2</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Studio Owner's Info</h3>

                  <div className='stepper-desc'>Let us know who you are</div>
                </div>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>3</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Studio Manager</h3>

                  <div className='stepper-desc'>Add your Studio Manager</div>
                </div>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <div className='stepper-line w-40px'></div>

                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>4</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title'>Finalize Studio</h3>

                  <div className='stepper-desc'>Review and Submit</div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex-row-fluid py-lg-5 ps-15'>
            <Formik
              validationSchema={currentSchema}
              initialValues={initValues}
              onSubmit={submitStep}
            >
              {({status}) => (
                <Form className='form ' noValidate id='kt_modal_create_app_form'>
                  <div className='current' data-kt-stepper-element='content'>
                    <div className='w-100'>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Studio Name</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='You Studio Name'
                          ></i>
                        </label>

                        <Field
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          name='name'
                          placeholder=''
                        />
                        <ErrorMessage
                          name='name'
                          component='div'
                          className='fv-plugins-message-container invalid-feedback'
                        />
                      </div>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Studio Location</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='Location of your Studio'
                          ></i>
                        </label>

                        <Field
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          name='location'
                          placeholder=''
                        />

                        <ErrorMessage
                          name='location'
                          component='div'
                          className='fv-plugins-message-container invalid-feedback'
                        />
                      </div>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Studio Email</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='Email Address of your studio'
                          ></i>
                        </label>

                        <Field
                          type='email'
                          className='form-control form-control-lg form-control-solid'
                          name='email'
                          placeholder=''
                        />

                        <ErrorMessage
                          name='email'
                          component='div'
                          className='fv-plugins-message-container invalid-feedback'
                        />
                      </div>

                      {/* <div className='fv-row'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-4'>
                          <span className='required'>Category</span>

                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='Select your app category'
                          ></i>
                        </label>

                        <div className='fv-row'>
                          <label className='d-flex flex-stack mb-5 cursor-pointer'>
                            <span className='d-flex align-items-center me-2'>
                              <span className='symbol symbol-50px me-6'>
                                <span className='symbol-label bg-light-primary'>
                                  <KTSVG
                                    path='/media/icons/duotone/Home/Globe.svg'
                                    className='svg-icon-1 svg-icon-primary'
                                  />
                                </span>
                              </span>

                              <span className='d-flex flex-column'>
                                <span className='fw-bolder fs-6'>Quick Online Courses</span>

                                <span className='fs-7 text-muted'>
                                  Creating a clear text structure is just one SEO
                                </span>
                              </span>
                            </span>

                            <span className='form-check form-check-custom form-check-solid'>
                              <Field
                                className='form-check-input'
                                type='radio'
                                name='category'
                                value='1'
                              />
                            </span>
                          </label>

                          <label className='d-flex flex-stack mb-5 cursor-pointer'>
                            <span className='d-flex align-items-center me-2'>
                              <span className='symbol symbol-50px me-6'>
                                <span className='symbol-label bg-light-danger  '>
                                  <KTSVG
                                    path='/media/icons/duotone/Layout/Layout-4-blocks-2.svg'
                                    className='svg-icon-1 svg-icon-danger'
                                  />
                                </span>
                              </span>

                              <span className='d-flex flex-column'>
                                <span className='fw-bolder fs-6'>Face to Face Discussions</span>

                                <span className='fs-7 text-muted'>
                                  Creating a clear text structure is just one aspect
                                </span>
                              </span>
                            </span>

                            <span className='form-check form-check-custom form-check-solid'>
                              <Field
                                className='form-check-input'
                                type='radio'
                                name='category'
                                value='2'
                              />
                            </span>
                          </label>

                          <label className='d-flex flex-stack cursor-pointer'>
                            <span className='d-flex align-items-center me-2'>
                              <span className='symbol symbol-50px me-6'>
                                <span className='symbol-label bg-light-success'>
                                  <KTSVG
                                    path='/media/icons/duotone/Devices/Watch1.svg'
                                    className='svg-icon-1 svg-icon-success'
                                  />
                                </span>
                              </span>

                              <span className='d-flex flex-column'>
                                <span className='fw-bolder fs-6'>Full Intro Training</span>

                                <span className='fs-7 text-muted'>
                                  Creating a clear text structure copywriting
                                </span>
                              </span>
                            </span>

                            <span className='form-check form-check-custom form-check-solid'>
                              <Field
                                className='form-check-input'
                                type='radio'
                                name='category'
                                value='3'
                              />
                            </span>
                          </label>
                        </div>

                        <div className='fv-plugins-message-container invalid-feedback'>
                          <ErrorMessage name='category' />
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <div data-kt-stepper-element='content'>
                    <div className='w-100'>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Owner's First Name</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='Your First Name'
                          ></i>
                        </label>

                        <Field
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          name='owner_firstname'
                          placeholder=''
                        />
                        <ErrorMessage
                          name='owner_firstname'
                          component='div'
                          className='fv-plugins-message-container invalid-feedback'
                        />
                      </div>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Owner's Last Name</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='Your Last Name'
                          ></i>
                        </label>

                        <Field
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          name='owner_lastname'
                          placeholder=''
                        />

                        <ErrorMessage
                          name='owner_lastname'
                          component='div'
                          className='fv-plugins-message-container invalid-feedback'
                        />
                      </div>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Owner's Mobile Number</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='Mobile Number of Studio Owner'
                          ></i>
                        </label>

                        <Field
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          name='mobile_number'
                          placeholder=''
                        />

                        <ErrorMessage
                          name='mobile_number'
                          component='div'
                          className='fv-plugins-message-container invalid-feedback'
                        />
                      </div>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Owner's Email</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='Email Address of Studio  Owner'
                          ></i>
                        </label>

                        <Field
                          type='email'
                          className='form-control form-control-lg form-control-solid'
                          name='owner_email'
                          placeholder=''
                        />

                        <ErrorMessage
                          name='owner_email'
                          component='div'
                          className='fv-plugins-message-container invalid-feedback'
                        />
                      </div>
                    </div>
                  </div>

                  <div data-kt-stepper-element='content'>
                    <div className='w-100'>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Studio Manager's First Name</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='First Name of Studio Manager'
                          ></i>
                        </label>

                        <Field
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          name='studio_manager_firstname'
                          placeholder=''
                        />
                        <ErrorMessage
                          name='studio_manager_firstname'
                          component='div'
                          className='fv-plugins-message-container invalid-feedback'
                        />
                      </div>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Studio Manager's Last Name</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='Last Name of Studio Manager'
                          ></i>
                        </label>

                        <Field
                          type='text'
                          className='form-control form-control-lg form-control-solid'
                          name='studio_manager_lastname'
                          placeholder=''
                        />

                        <ErrorMessage
                          name='studio_manager_lastname'
                          component='div'
                          className='fv-plugins-message-container invalid-feedback'
                        />
                      </div>
                      <div className='fv-row mb-10'>
                        <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                          <span className='required'>Studio Manager's Email</span>
                          <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title='Email Address of Studio Manager'
                          ></i>
                        </label>

                        <Field
                          type='email'
                          className='form-control form-control-lg form-control-solid'
                          name='studio_manager_email'
                          placeholder=''
                        />

                        <ErrorMessage
                          name='studio_manager_email'
                          component='div'
                          className='fv-plugins-message-container invalid-feedback'
                        />
                      </div>
                    </div>
                  </div>

                  <div data-kt-stepper-element='content'>
                    <div className='w-100 text-center'>
                      <h1 className='fw-bolder text-dark mb-3'>You're Almost Done!</h1>

                      <div className='text-muted fw-bold fs-3'>
                        Submit your Studio to kickstart your Campaigns.
                      </div>

                      <div className='text-center px-4 py-15'>
                        <img
                          src={toAbsoluteUrl('/media/illustrations/todo.png')}
                          alt=''
                          className='mw-100 mh-150px'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='d-flex flex-stack pt-10'>
                    <div className='me-2'>
                      <button
                        onClick={prevStep}
                        type='button'
                        className='btn btn-lg btn-light-primary me-3'
                        data-kt-stepper-action='previous'
                      >
                        <KTSVG
                          path='/media/icons/duotone/Navigation/Left-2.svg'
                          className='svg-icon-4 me-1'
                        />
                        Back
                      </button>
                    </div>

                    <div>
                      <button
                        type='submit'
                        className='btn btn-lg btn-primary me-3'
                        disabled={loadingStudio}
                      >
                        <span className='indicator-label'>
                          {loadingStudio && (
                            <span className='indicator-progress' style={{display: 'block'}}>
                              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                            </span>
                          )}
                          {stepper.current?.currentStepIndex !==
                            stepper.current?.totatStepsNumber! - 1 && 'Continue'}
                          {stepper.current?.currentStepIndex ===
                            stepper.current?.totatStepsNumber! - 1 && 'Submit'}
                          <KTSVG
                            path='/media/icons/duotone/Navigation/Right-2.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {error && (
          <div className='mb-lg-15 alert alert-danger'>
            <div className='alert-text font-weight-bold'>{error.message}</div>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default CreateStudio
