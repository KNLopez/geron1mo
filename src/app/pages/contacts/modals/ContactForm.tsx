import Modal from '../../../components/modals/MainModal'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {contactActions, InitialContactStateType} from '../state/contact'
import clsx from 'clsx'
import {RootState} from '../../../../setup/redux/RootReducer'
import {campaignsActions} from '../../campaigns/state/campaigns'
import {useEffect, useMemo} from 'react'
import SelectBox from '../../../components/Select'
import {usersActions} from '../../users/state/users'

const ContactForm: React.FC<any> = () => {
  const dispatch = useDispatch()

  const {contact, loadingContact, error}: InitialContactStateType = useSelector(
    (state: RootState) => state.contact,
    shallowEqual
  )

  const {params}: any = useSelector(({modal}: RootState) => modal, shallowEqual)

  const {
    campaigns,
    loadingCampaigns,
    error: campaingsError,
  }: any = useSelector(({campaigns}: RootState) => campaigns, shallowEqual)

  useEffect(() => {
    dispatch(campaignsActions.fetchCampaigns())
    dispatch(usersActions.fetchUsers())
  }, [])

  const {
    users,
    loadingUsers,
    error: usersError,
  }: any = useSelector((state: RootState) => state.users, shallowEqual)

  const options = useMemo(
    () => users.map((user: any) => ({label: `${user.firstname} ${user.lastname}`, value: user.id})),
    [users]
  )

  const isEdit = contact?.id

  const CreateCustomerSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    phone: Yup.string(),
    status: Yup.string(),
    campaign_id: Yup.string(),
    email: Yup.string().email('Wrong email format').required('Email is required'),
  })

  const initialValues = isEdit
    ? contact
    : {
        id: '',
        firstname: '',
        lastname: '',
        status: '',
        phone: '',
        campaign_id: '',
        assigned: '',
        email: '',
      }

  const formik = useFormik({
    initialValues,
    validationSchema: CreateCustomerSchema,
    onSubmit: (values, {setSubmitting}) => {
      isEdit
        ? dispatch(contactActions.updateContact(values))
        : dispatch(contactActions.createContact(values))

      setSubmitting(false)
    },
  })

  const title = isEdit ? 'Edit Contact' : 'Create Contact'
  const submitButtonText = isEdit ? 'Update' : 'Submit'

  return (
    <Modal
      title={title}
      buttonAction={formik.handleSubmit}
      isValid={!loadingContact && formik.isValid}
      onHide={() => dispatch(contactActions.resetContact())}
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
                placeholder='contact@gmail.com'
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
                <option value='' disabled>
                  Select Status
                </option>
                <option value='open'>Open</option>
                <option value='won'>Won</option>
                <option value='paid'>Paid</option>
                <option value='cancelled'>Cancelled</option>
                <option value='lost'>Lost</option>
              </select>
            </div>
            <div className='fv-row mb-7'>
              <label className='fs-6 fw-bold mb-2'>Assigned To</label>
              <SelectBox
                options={options}
                isMulti
                loading={loadingUsers}
                name='assigned_to'
                handleChange={formik.setFieldValue}
              />
            </div>
            <div className={`${params?.id ? 'd-none' : 'fv-row mb-5'}`}>
              <label className='fs-6 fw-bold mb-2'>Campaign</label>
              <select
                className={clsx(
                  'form-select form-select-solid  select2-hidden-accessible',
                  {'is-invalid': formik.touched.campaign_id && formik.errors.campaign_id},
                  {
                    'is-valid': formik.touched.campaign_id && !formik.errors.campaign_id,
                  }
                )}
                {...formik.getFieldProps('campaign_id')}
                name='campaign_id'
                disabled={loadingCampaigns}
              >
                <option value='' disabled>
                  Select Campaign
                </option>
                {campaigns.map((campaign: any) => (
                  <option key={campaign.id} value={campaign.id}>
                    {campaign.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default ContactForm
