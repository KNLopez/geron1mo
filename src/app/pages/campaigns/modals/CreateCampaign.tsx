import Modal from '../../../components/modals/MainModal'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {campaignActions, InitialCampaignStateType} from '../state/campaign'
import clsx from 'clsx'
import {RootState} from '../../../../setup/redux/RootReducer'

const CreateCampaign: React.FC<any> = () => {
  const dispatch = useDispatch()

  const {loadingCampaign, error}: InitialCampaignStateType = useSelector(
    (state: RootState) => state.campaign,
    shallowEqual
  )

  const CreateCampaignSchema = Yup.object().shape({
    firstname: Yup.string().required('First Name is required'),
    lastname: Yup.string().required('Last Name is required'),
    phone: Yup.string(),
    status: Yup.string(),
    assigned: Yup.string(),
    campaign_name: Yup.string(),
    email: Yup.string().email('Wrong email format').required('Email is required'),
  })

  const initialValues = {
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
    validationSchema: CreateCampaignSchema,
    onSubmit: (values, {setSubmitting}) => {
      dispatch(campaignActions.createCampaign(values))
      setSubmitting(false)
    },
  })

  return (
    <Modal
      title='Create Campaign'
      buttonText='Add Campaign'
      buttonAction={formik.handleSubmit}
      isValid={!loadingCampaign && formik.isValid}
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
            id='kt_modal_add_campaign_scroll'
            data-kt-scroll='true'
            data-kt-scroll-activate='{default: false, lg: true}'
            data-kt-scroll-max-height='auto'
            data-kt-scroll-dependencies='#kt_modal_add_campaign_header'
            data-kt-scroll-wrappers='#kt_modal_add_campaign_scroll'
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
                placeholder='campaign@gmail.com'
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
              <input
                {...formik.getFieldProps('status')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.status && formik.errors.status},
                  {
                    'is-valid': formik.touched.status && !formik.errors.status,
                  }
                )}
                type='text'
                placeholder='Active'
                name='status'
              />
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
                  'form-control form-control-lg form-control-solid',
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

export default CreateCampaign
