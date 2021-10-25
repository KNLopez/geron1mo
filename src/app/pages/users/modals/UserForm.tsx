import Modal from '../../../components/modals/MainModal'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {userActions, InitialUserStateType} from '../state/user'
import clsx from 'clsx'
import {RootState} from '../../../../setup/redux/RootReducer'
import Datepicker from '../../../components/Flatpicker'

const UserForm: React.FC<any> = () => {
  const dispatch = useDispatch()

  const {user, loadingUser, error}: InitialUserStateType = useSelector(
    (state: RootState) => state.user,
    shallowEqual
  )

  const isEdit = user?.id

  const CreateCustomerSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    title: Yup.string(),
    job_description: Yup.string(),
    status: Yup.string(),
    contact_number: Yup.string(),
    role: Yup.string(),
    birthday: Yup.string(),
    start_date: Yup.string(),
    studios: Yup.array(),
    email: Yup.string().email('Wrong email format').required('Email is required'),
  })

  const initialValues = isEdit
    ? user
    : {
        firstname: '',
        lastname: '',
        start_date: '',
        title: '',
        job_description: '',
        email: '',
        contact_number: '',
        meeting_link: '',
        birthday: '',
        status: '',
        studios: [],
        role: '',
      }

  const formik = useFormik({
    initialValues,
    validationSchema: CreateCustomerSchema,
    onSubmit: (values, {setSubmitting}) => {
      isEdit ? dispatch(userActions.updateUser(values)) : dispatch(userActions.createUser(values))

      setSubmitting(false)
    },
  })

  const title = isEdit ? 'Edit User' : 'Create User'
  const submitButtonText = isEdit ? 'Update' : 'Submit'

  return (
    <Modal
      title={title}
      buttonAction={formik.handleSubmit}
      isValid={!loadingUser && formik.isValid}
      onHide={() => dispatch(userActions.resetUser())}
      {...{submitButtonText}}
    >
      {formik.status ? (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      ) : null}
      <form className='form' noValidate>
        <div className='modal-body py-10 px-lg-17'>
          <div
            className='scroll-y me-n7 pe-7'
            id='kt_modal_add_customer_scroll'
            data-kt-scroll='true'
            data-kt-scroll-activate='{default: false, lg: true}'
            data-kt-scroll-max-height='auto'
            data-kt-scroll-dependencies='#kt_modal_add_customer_header'
            data-kt-scroll-wrappers='#kt_modal_add_customer_scroll'
            data-kt-scroll-offset='300px'
          >
            <div className='fv-row mb-7'>
              <label className='required fs-6 fw-bold mb-2'>First Name</label>
              <input
                {...formik.getFieldProps('firstname')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.firstname && formik.errors.firstname},
                  {
                    'is-valid': formik.touched.firstname && !formik.errors.firstname,
                  }
                )}
                type='text'
                placeholder='Enter First Name'
                name='firstname'
              />
            </div>
            <div className='fv-row mb-7'>
              <label className='required fs-6 fw-bold mb-2'>Last Name</label>
              <input
                {...formik.getFieldProps('lastname')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.lastname && formik.errors.lastname},
                  {
                    'is-valid': formik.touched.lastname && !formik.errors.lastname,
                  }
                )}
                type='text'
                placeholder='Enter Last Name'
                name='lastname'
              />
            </div>
            <div className='fv-row mb-5'>
              <label className='fs-6 fw-bold mb-2'>Start Date</label>
              <Datepicker
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.start_date && formik.errors.start_date},
                  {
                    'is-valid': formik.touched.start_date && !formik.errors.start_date,
                  }
                )}
                handleChange={formik.setFieldValue}
                placeholder='Start Date'
                name='start_date'
              />
            </div>
            <div className='fv-row mb-7'>
              <label className='required fs-6 fw-bold mb-2'>Title</label>
              <input
                {...formik.getFieldProps('title')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.lastname && formik.errors.lastname},
                  {
                    'is-valid': formik.touched.lastname && !formik.errors.lastname,
                  }
                )}
                type='text'
                placeholder='User Title'
                name='title'
              />
            </div>
            <div className='fv-row mb-7'>
              <label className='required fs-6 fw-bold mb-2'>Job Description</label>
              <textarea
                {...formik.getFieldProps('job_description')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.lastname && formik.errors.lastname},
                  {
                    'is-valid': formik.touched.lastname && !formik.errors.lastname,
                  }
                )}
                placeholder='I make clients happy!'
                name='job_description'
              />
            </div>
            <div className='fv-row mb-7'>
              <label className='fs-6 fw-bold mb-2'>
                <span className='required'>Email</span>
                <i
                  className='fas fa-exclamation-circle ms-1 fs-7'
                  data-bs-toggle='tooltip'
                  title='Email address must be active'
                ></i>
              </label>

              <input
                {...formik.getFieldProps('email')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.email && formik.errors.email},
                  {
                    'is-valid': formik.touched.email && !formik.errors.email,
                  }
                )}
                type='email'
                placeholder='user@gmail.com'
                name='email'
              />
            </div>
            <div className='fv-row mb-7'>
              <label className='fs-6 fw-bold mb-2'>Phone Number</label>
              <input
                {...formik.getFieldProps('contact_number')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.contact_number && formik.errors.contact_number},
                  {
                    'is-valid': formik.touched.contact_number && !formik.errors.contact_number,
                  }
                )}
                type='text'
                placeholder='+88-888-8888'
                name='contact_number'
              />
            </div>

            <div className='fv-row mb-7'>
              <label className='required fs-6 fw-bold mb-2'>Meeting Link</label>
              <input
                {...formik.getFieldProps('meeting_link')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.lastname && formik.errors.lastname},
                  {
                    'is-valid': formik.touched.lastname && !formik.errors.lastname,
                  }
                )}
                type='text'
                placeholder='http://linktomeeting.com'
                name='meeting_link'
              />
            </div>
            <div className='fv-row mb-7'>
              <label className='required fs-6 fw-bold mb-2'>Birthday</label>
              <Datepicker
                {...formik.getFieldProps('birthday')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.lastname && formik.errors.lastname},
                  {
                    'is-valid': formik.touched.lastname && !formik.errors.lastname,
                  }
                )}
                handleChange={formik.setFieldValue}
                placeholder='6/17/77'
                name='birthday'
              />
            </div>
            <div className='fv-row mb-7'>
              <label className='required fs-6 fw-bold mb-2'>Assigned Studios</label>
            </div>
            <div className='fv-row mb-7'>
              <label className='fs-6 fw-bold mb-2'>Role</label>
              <select
                className={clsx(
                  'form-select form-select-solid  select2-hidden-accessible',
                  {'is-invalid': formik.touched.role && formik.errors.role},
                  {
                    'is-valid': formik.touched.role && !formik.errors.role,
                  }
                )}
                {...formik.getFieldProps('role')}
                name='role'
                defaultValue=''
              >
                <option value='' disabled>
                  Select Status
                </option>
                <option value='Wolves'>Wolves</option>
                <option value='Rockets'>Rockets</option>
                <option value='Staff'>Staff</option>
              </select>
            </div>
            <div className='fv-row mb-7'>
              <label className='fs-6 fw-bold mb-2'>Status</label>
              <select
                className={clsx(
                  'form-select form-select-solid  select2-hidden-accessible',
                  {'is-invalid': formik.touched.status && formik.errors.status},
                  {
                    'is-valid': formik.touched.status && !formik.errors.status,
                  }
                )}
                {...formik.getFieldProps('status')}
                name='status'
                defaultValue=''
              >
                <option value='' disabled>
                  Select Status
                </option>
                <option value='active'>Active</option>
                <option value='cancelled'>Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default UserForm
