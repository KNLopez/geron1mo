import Modal from '../../../components/modals/MainModal'

const CreateContact: React.FC<any> = () => {
  return (
    <Modal title='Create Contact' id='kt_modal_add_customer'>
      <div className='modal-dialog modal-dialog-centered mw-650px'>
        <div className='modal-content'>
          <form className='form' action='#' id='kt_modal_add_customer_form'>
            <div className='modal-header' id='kt_modal_add_customer_header'>
              <h2 className='fw-bolder'>Add a Contact</h2>
              <div
                id='kt_modal_add_customer_cancel'
                className='btn btn-icon btn-sm btn-active-icon-primary'
              >
                <span className='svg-icon svg-icon-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24px'
                    height='24px'
                    viewBox='0 0 24 24'
                    version='1.1'
                  >
                    <g
                      transform='translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)'
                      fill='#000000'
                    >
                      <rect fill='#000000' x='0' y='7' width='16' height='2' rx='1' />
                      <rect
                        fill='#000000'
                        opacity='0.5'
                        transform='translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)'
                        x='0'
                        y='7'
                        width='16'
                        height='2'
                        rx='1'
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>

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
                  <label className='required fs-6 fw-bold mb-2'>Name</label>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Enter Full Name'
                    name='name'
                    value=''
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
                    type='email'
                    className='form-control form-control-solid'
                    placeholder='contact@gmail.com'
                    name='email'
                    value=''
                  />
                </div>
                <div className='fv-row mb-15'>
                  <label className='fs-6 fw-bold mb-2'>Phone</label>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='+88-888-8888'
                    name='phone'
                  />
                </div>
                <div className='fv-row mb-15'>
                  <label className='fs-6 fw-bold mb-2'>Status</label>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Active'
                    name='status'
                  />
                </div>
                <div className='fv-row mb-15'>
                  <label className='fs-6 fw-bold mb-2'>Assigned To</label>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Doza'
                    name='assigned'
                  />
                </div>
                <div className='fv-row mb-15'>
                  <label className='fs-6 fw-bold mb-2'>Campaign</label>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Awesome campaign name'
                    name='campaign_name'
                  />
                </div>
                <div className='modal-footer flex-center'>
                  <button
                    type='reset'
                    id='kt_modal_add_customer_cancel'
                    className='btn btn-light me-3'
                  >
                    Discard
                  </button>
                  <button
                    type='submit'
                    id='kt_modal_add_customer_submit'
                    className='btn btn-primary'
                  >
                    <span className='indicator-label'>Submit</span>
                    <span className='indicator-progress'>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default CreateContact
