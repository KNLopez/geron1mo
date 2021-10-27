import Modal from '../../../components/modals/MainModal'
import * as Yup from 'yup'
import {ErrorMessage, Field, Form, Formik, useFormik} from 'formik'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {studio_dashboardActions} from '../state/studio_dashboard'

import {RootState} from '../../../../setup/redux/RootReducer'

import {useEffect, useRef, useState} from 'react'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {KTSVG} from '../../../../_metronic/helpers'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/solid.min.css'
import {Studio_dashboard} from '../state/models'
import {modalActions} from '../../../components/modals/state/MainModalState'

const inits: Studio_dashboard = {
  leads_week: 0,
  sales_conversion: 0,
  rollover: 0,
  average_class_attendance: 0,
  cancels: 0,
  offer: 0,
}

const StudioDashboardSchema = Yup.object().shape({
  leads_week: Yup.string().required('This field is required').label('Leads per week'),
  sales_conversion: Yup.string().required('This field is required'),
  rollover: Yup.string().required('This field is required'),
  average_class_attendance: Yup.string().required('This field is required'),
  cancels: Yup.string().required('This field is required'),
  offer: Yup.string().required('This field is required'),
})

const CreateStudio_dashboard: React.FC<any> = () => {
  const dispatch = useDispatch()

  const {studio_dashboard, loadingStudio_dashboard, error}: any = useSelector(
    (state: RootState) => state.studio_dashboard,
    shallowEqual
  )

  const isEdit = studio_dashboard?.id
  let editData: any = {}

  const submit = (values: any) => {
    console.log(values)
  }

  const [initValues] = useState<Studio_dashboard>(inits)

  const formik = useFormik({
    initialValues: initValues,
    validationSchema: StudioDashboardSchema,
    onSubmit: (values, {setSubmitting}) => {
      console.log(values)

      setSubmitting(false)
    },
  })

  const title = isEdit ? 'Edit Studio_dashboard' : 'Add Dashboard Entry'
  const submitButtonText = isEdit ? 'Update' : 'Submit'

  return (
    <Modal
      title={title}
      onHide={() => dispatch(studio_dashboardActions.resetStudio_dashboard())}
      {...{submitButtonText}}
      buttonAction={formik.handleSubmit}
      // isValid={!loadingStudio_dashboard && formik.isValid}
    >
      <Formik validationSchema={StudioDashboardSchema} initialValues={initValues} onSubmit={submit}>
        {({status}) => (
          <Form className='form ' noValidate id='kt_modal_create_app_form'>
            <div className='w-100'>
              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                  <span className='required'>Total # of leads for the week</span>
                  <i
                    className='fas fa-exclamation-circle ms-2 fs-7'
                    data-bs-toggle='tooltip'
                    title='Total # of leads for the week'
                  ></i>
                </label>

                <Field
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  name='leads_week'
                  placeholder=''
                />
                <ErrorMessage
                  name='leads_week'
                  component='div'
                  className='fv-plugins-message-container invalid-feedback'
                />
              </div>

              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                  <span className='required'>Sales Conversion %</span>
                  <i
                    className='fas fa-exclamation-circle ms-2 fs-7'
                    data-bs-toggle='tooltip'
                    title='Sales Conversion %'
                  ></i>
                </label>

                <Field
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  name='sales_conversion'
                  placeholder=''
                />

                <ErrorMessage
                  name='sales_conversion'
                  component='div'
                  className='fv-plugins-message-container invalid-feedback'
                />
              </div>
              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                  <span className='required'>Rollover %</span>
                  <i
                    className='fas fa-exclamation-circle ms-2 fs-7'
                    data-bs-toggle='tooltip'
                    title='Sales Conversion %'
                  ></i>
                </label>

                <Field
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  name='rollover'
                  placeholder=''
                />

                <ErrorMessage
                  name='rollover'
                  component='div'
                  className='fv-plugins-message-container invalid-feedback'
                />
              </div>
              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                  <span className='required'>Average Member Attendance</span>
                  <i
                    className='fas fa-exclamation-circle ms-2 fs-7'
                    data-bs-toggle='tooltip'
                    title='Sales Conversion %'
                  ></i>
                </label>

                <Field
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  name='average_class_attendance'
                  placeholder=''
                />

                <ErrorMessage
                  name='average_class_attendance'
                  component='div'
                  className='fv-plugins-message-container invalid-feedback'
                />
              </div>
              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                  <span className='required'>
                    In-studio Conversion Rate (Intro offer to member) %
                  </span>
                  <i
                    className='fas fa-exclamation-circle ms-2 fs-7'
                    data-bs-toggle='tooltip'
                    title='Sales Conversion %'
                  ></i>
                </label>

                <Field
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  name='offer'
                  placeholder=''
                />

                <ErrorMessage
                  name='offer'
                  component='div'
                  className='fv-plugins-message-container invalid-feedback'
                />
              </div>
              <div className='fv-row mb-10'>
                <label className='d-flex align-items-center fs-5 fw-bold mb-2'>
                  <span className='required'>Churn/Cancels</span>
                  <i
                    className='fas fa-exclamation-circle ms-2 fs-7'
                    data-bs-toggle='tooltip'
                    title='Sales Conversion %'
                  ></i>
                </label>

                <Field
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  name='cancels'
                  placeholder=''
                />

                <ErrorMessage
                  name='cancels'
                  component='div'
                  className='fv-plugins-message-container invalid-feedback'
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {error && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{error.message}</div>
        </div>
      )}
    </Modal>
  )
}

export default CreateStudio_dashboard
