import Modal from '../../../components/modals/MainModal'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {userActions, InitialUserStateType} from '../state/user'
import clsx from 'clsx'
import {RootState} from '../../../../setup/redux/RootReducer'

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
    phone: Yup.string(),
    status: Yup.string(),
    assigned: Yup.string(),
    campaign_name: Yup.string(),
    email: Yup.string().email('Wrong email format').required('Email is required'),
  })

  const initialValues = isEdit
    ? user
    : {
        id: '',
        firstname: '',
        lastname: '',
        status: '',
        phone: '',
        campaign_name: '',
        assigned: '',
        email: '',
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
                placeholder='Enter Full Name'
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
                placeholder='Enter Full Name'
                name='lastname'
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
              <label className='fs-6 fw-bold mb-2'>Phone</label>
              <input
                {...formik.getFieldProps('phone')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.phone && formik.errors.phone},
                  {
                    'is-valid': formik.touched.phone && !formik.errors.phone,
                  }
                )}
                type='text'
                placeholder='+88-888-8888'
                name='phone'
              />
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
              >
                <option value='' disabled selected>
                  Select Status
                </option>
                <option value='lead'>Lead</option>
                <option value='won'>Won</option>
                <option value='lost'>Lost</option>
                <option value='active'>Active</option>
                <option value='cancelled'>Cancelled</option>
              </select>
            </div>
            <div className='fv-row mb-7'>
              <label className='fs-6 fw-bold mb-2'>Assigned To</label>
              <input
                {...formik.getFieldProps('assigned')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.assigned && formik.errors.assigned},
                  {
                    'is-valid': formik.touched.assigned && !formik.errors.assigned,
                  }
                )}
                type='text'
                placeholder='Doza'
                name='assigned'
              />
            </div>
            <div className='fv-row mb-5'>
              <label className='fs-6 fw-bold mb-2'>Campaign</label>
              <input
                {...formik.getFieldProps('campaign_name')}
                className={clsx(
                  'form-control form-control-lg form-control-solid ',
                  {'is-invalid': formik.touched.campaign_name && formik.errors.campaign_name},
                  {
                    'is-valid': formik.touched.campaign_name && !formik.errors.campaign_name,
                  }
                )}
                type='text'
                placeholder='Awesome campaign name'
                name='campaign_name'
              />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default UserForm
