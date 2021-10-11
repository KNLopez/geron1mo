import Modal from '../../../components/modals/MainModal'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {campaignActions, InitialCampaignStateType} from '../state/campaign'
import clsx from 'clsx'
import {RootState} from '../../../../setup/redux/RootReducer'
import Datepicker from '../../../components/Flatpicker'

const CreateCampaign: React.FC<any> = () => {
  const dispatch = useDispatch()

  const {campaign, loadingCampaign, error}: InitialCampaignStateType = useSelector(
    (state: RootState) => state.campaign,
    shallowEqual
  )

  const isEdit = campaign?.id

  const CreateCampaignSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    details: Yup.string().required('Last Name is required'),
    status: Yup.string(),
    start_date: Yup.string(),
    end_date: Yup.string(),
    fb_campaign_id: Yup.string(),
  })

  const initialValues = isEdit
    ? campaign
    : {
        id: '',
        name: '',
        details: '',
        status: '',
        start_date: '',
        end_date: '',
        fb_campaign_id: '',
      }

  const formik = useFormik({
    initialValues,
    validationSchema: CreateCampaignSchema,
    onSubmit: (values, {setSubmitting}) => {
      isEdit
        ? dispatch(campaignActions.updateCampaign(values))
        : dispatch(campaignActions.createCampaign(values))
      setSubmitting(false)
    },
  })

  const title = isEdit ? 'Edit Campaign' : 'Create Campaign'
  const submitButtonText = isEdit ? 'Update' : 'Submit'

  return (
    <Modal
      title={title}
      buttonAction={formik.handleSubmit}
      isValid={!loadingCampaign && formik.isValid}
      onHide={() => dispatch(campaignActions.resetCampaign())}
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
            id='kt_modal_add_campaign_scroll'
            data-kt-scroll='true'
            data-kt-scroll-activate='{default: false, lg: true}'
            data-kt-scroll-max-height='auto'
            data-kt-scroll-dependencies='#kt_modal_add_campaign_header'
            data-kt-scroll-wrappers='#kt_modal_add_campaign_scroll'
            data-kt-scroll-offset='300px'
          >
            <div className='fv-row mb-7'>
              <label className='required fs-6 fw-bold mb-2'>Name</label>
              <input
                {...formik.getFieldProps('name')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.name && formik.errors.name},
                  {
                    'is-valid': formik.touched.name && !formik.errors.name,
                  }
                )}
                type='text'
                placeholder='Enter Campaign Name'
                name='name'
              />
            </div>

            <div className='fv-row mb-7'>
              <label className='fs-6 fw-bold mb-2'>
                <span className='required'>Details</span>
                <i
                  className='fas fa-exclamation-circle ms-1 fs-7'
                  data-bs-toggle='tooltip'
                  title='Campaign details'
                ></i>
              </label>

              <textarea
                {...formik.getFieldProps('details')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.details && formik.errors.details},
                  {
                    'is-valid': formik.touched.details && !formik.errors.details,
                  }
                )}
                placeholder='Campaign details'
                name='details'
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
                defaultValue=''
              >
                <option value='' disabled>
                  Select Status
                </option>
                <option value='active'>Active</option>
                <option value='cancelled'>Cancelled</option>
              </select>
            </div>
            <div className='fv-row mb-7'>
              <label className='fs-6 fw-bold mb-2'>Start Date</label>
              <Datepicker
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.start_date && formik.errors.start_date},
                  {
                    'is-valid': formik.touched.start_date && !formik.errors.start_date,
                  }
                )}
                value={formik.values.start_date}
                handleChange={formik.setFieldValue}
                placeholder='Start Date'
                name='start_date'
              />
            </div>
            <div className='fv-row mb-5'>
              <label className='fs-6 fw-bold mb-2'>End Date</label>
              {/* {console.log(formik.getFieldProps('end_date'))} */}
              <Datepicker
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.end_date && formik.errors.end_date},
                  {
                    'is-valid': formik.touched.end_date && !formik.errors.end_date,
                  }
                )}
                handleChange={formik.setFieldValue}
                value={formik.values.end_date}
                minDate={formik.values.start_date}
                placeholder='End Date'
                name='end_date'
              />
              {console.log(formik.values.end_date)}
            </div>
            <div className='fv-row mb-7'>
              <label className='required fs-6 fw-bold mb-2'>FB Campaign ID</label>
              <input
                {...formik.getFieldProps('fb_campaign_id')}
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  {'is-invalid': formik.touched.fb_campaign_id && formik.errors.fb_campaign_id},
                  {
                    'is-valid': formik.touched.fb_campaign_id && !formik.errors.fb_campaign_id,
                  }
                )}
                type='text'
                placeholder='Facebook Campaign ID'
                name='fb_campaign_id'
              />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default CreateCampaign
