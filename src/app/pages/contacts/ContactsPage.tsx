import data, {Customer} from './mock'

const Contacts = () => {
  return (
    <div className='content d-flex flex-column flex-column-fluid' id='kt_content'>
      <div className='toolbar' id='kt_toolbar'>
        <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
          <div className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'>
            <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1'>
              Customer List
            </h1>

            <span className='h-20px border-gray-200 border-start mx-4'></span>

            <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
              <li className='breadcrumb-item text-muted'>
                <a href='../../demo1/dist/index.html' className='text-muted text-hover-primary'>
                  Home
                </a>
              </li>

              <li className='breadcrumb-item'>
                <span className='bullet bg-gray-200 w-5px h-2px'></span>
              </li>

              <li className='breadcrumb-item text-dark'>Customers</li>
            </ul>
          </div>

          <div className='d-flex align-items-center py-1'>
            <div className='me-4'>
              <a
                href='#'
                className='btn btn-sm btn-flex btn-light btn-active-primary fw-bolder'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <span className='svg-icon svg-icon-5 svg-icon-gray-500 me-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24px'
                    height='24px'
                    viewBox='0 0 24 24'
                    version='1.1'
                  >
                    <g stroke='none' strokeWidth='1' fill='none' fill-rule='evenodd'>
                      <rect x='0' y='0' width='24' height='24' />
                      <path
                        d='M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z'
                        fill='#000000'
                      />
                    </g>
                  </svg>
                </span>
                Filter
              </a>

              <div
                className='menu menu-sub menu-sub-dropdown w-250px w-md-300px'
                data-kt-menu='true'
                id='kt_menu_610d484f57ad7'
              >
                <div className='px-7 py-5'>
                  <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
                </div>

                <div className='separator border-gray-200'></div>

                <div className='px-7 py-5'>
                  <div className='mb-10'>
                    <label className='form-label fw-bold'>Status:</label>

                    <div>
                      <select
                        className='form-select form-select-solid'
                        data-kt-select2='true'
                        data-placeholder='Select option'
                        data-dropdown-parent='#kt_menu_610d484f57ad7'
                        data-allow-clear='true'
                      >
                        <option></option>
                        <option value='1'>Approved</option>
                        <option value='2'>Pending</option>
                        <option value='2'>In Process</option>
                        <option value='2'>Rejected</option>
                      </select>
                    </div>
                  </div>

                  <div className='mb-10'>
                    <label className='form-label fw-bold'>Member Type:</label>

                    <div className='d-flex'>
                      <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                        <input className='form-check-input' type='checkbox' value='1' />
                        <span className='form-check-label'>Author</span>
                      </label>

                      <label className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input className='form-check-input' type='checkbox' value='2' />
                        <span className='form-check-label'>Customer</span>
                      </label>
                    </div>
                  </div>

                  <div className='mb-10'>
                    <label className='form-label fw-bold'>Notifications:</label>

                    <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        name='notifications'
                      />
                      <label className='form-check-label'>Enabled</label>
                    </div>
                  </div>

                  <div className='d-flex justify-content-end'>
                    <button
                      type='reset'
                      className='btn btn-sm btn-light btn-active-light-primary me-2'
                      data-kt-menu-dismiss='true'
                    >
                      Reset
                    </button>
                    <button
                      type='submit'
                      className='btn btn-sm btn-primary'
                      data-kt-menu-dismiss='true'
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <a
              href='#'
              className='btn btn-sm btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#kt_modal_create_app'
              id='kt_toolbar_primary_button'
            >
              Create
            </a>
          </div>
        </div>
      </div>

      <div className='post d-flex flex-column-fluid' id='kt_post'>
        <div id='kt_content_container' className='container-fluid'>
          <div className='card'>
            <div className='card-header border-0 pt-6'>
              <div className='card-title'>
                <div className='d-flex align-items-center position-relative my-1'>
                  <span className='svg-icon svg-icon-1 position-absolute ms-6'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24px'
                      height='24px'
                      viewBox='0 0 24 24'
                      version='1.1'
                    >
                      <g stroke='none' strokeWidth='1' fill='none' fill-rule='evenodd'>
                        <rect x='0' y='0' width='24' height='24' />
                        <path
                          d='M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z'
                          fill='#000000'
                          fill-rule='nonzero'
                          opacity='0.3'
                        />
                        <path
                          d='M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z'
                          fill='#000000'
                          fill-rule='nonzero'
                        />
                      </g>
                    </svg>
                  </span>

                  <input
                    type='text'
                    data-kt-customer-table-filter='search'
                    className='form-control form-control-solid w-250px ps-15'
                    placeholder='Search Customers'
                  />
                </div>
              </div>

              <div className='card-toolbar'>
                <div className='d-flex justify-content-end' data-kt-customer-table-toolbar='base'>
                  <button
                    type='button'
                    className='btn btn-light-primary me-3'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                  >
                    <span className='svg-icon svg-icon-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24px'
                        height='24px'
                        viewBox='0 0 24 24'
                        version='1.1'
                      >
                        <g stroke='none' strokeWidth='1' fill='none' fill-rule='evenodd'>
                          <rect x='0' y='0' width='24' height='24' />
                          <path
                            d='M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z'
                            fill='#000000'
                          />
                        </g>
                      </svg>
                    </span>
                    Filter
                  </button>

                  <div
                    className='menu menu-sub menu-sub-dropdown w-300px w-md-325px'
                    data-kt-menu='true'
                    id='kt-toolbar-filter'
                  >
                    <div className='px-7 py-5'>
                      <div className='fs-4 text-dark fw-bolder'>Filter Options</div>
                    </div>

                    <div className='separator border-gray-200'></div>

                    <div className='px-7 py-5'>
                      <div className='mb-10'>
                        <label className='form-label fs-5 fw-bold mb-3'>Month:</label>

                        <select
                          className='form-select form-select-solid fw-bolder'
                          data-kt-select2='true'
                          data-placeholder='Select option'
                          data-allow-clear='true'
                          data-kt-customer-table-filter='month'
                          data-dropdown-parent='#kt-toolbar-filter'
                        >
                          <option></option>
                          <option value='aug'>August</option>
                          <option value='sep'>September</option>
                          <option value='oct'>October</option>
                          <option value='nov'>November</option>
                          <option value='dec'>December</option>
                        </select>
                      </div>

                      <div className='mb-10'>
                        <label className='form-label fs-5 fw-bold mb-3'>Payment Type:</label>

                        <div
                          className='d-flex flex-column flex-wrap fw-bold'
                          data-kt-customer-table-filter='payment_type'
                        >
                          <label className='form-check form-check-sm form-check-custom form-check-solid mb-3 me-5'>
                            <input
                              className='form-check-input'
                              type='radio'
                              name='payment_type'
                              value='all'
                            />
                            <span className='form-check-label text-gray-600'>All</span>
                          </label>

                          <label className='form-check form-check-sm form-check-custom form-check-solid mb-3 me-5'>
                            <input
                              className='form-check-input'
                              type='radio'
                              name='payment_type'
                              value='visa'
                            />
                            <span className='form-check-label text-gray-600'>Visa</span>
                          </label>

                          <label className='form-check form-check-sm form-check-custom form-check-solid mb-3'>
                            <input
                              className='form-check-input'
                              type='radio'
                              name='payment_type'
                              value='mastercard'
                            />
                            <span className='form-check-label text-gray-600'>Mastercard</span>
                          </label>

                          <label className='form-check form-check-sm form-check-custom form-check-solid'>
                            <input
                              className='form-check-input'
                              type='radio'
                              name='payment_type'
                              value='american_express'
                            />
                            <span className='form-check-label text-gray-600'>American Express</span>
                          </label>
                        </div>
                      </div>

                      <div className='d-flex justify-content-end'>
                        <button
                          type='reset'
                          className='btn btn-light btn-active-light-primary me-2'
                          data-kt-menu-dismiss='true'
                          data-kt-customer-table-filter='reset'
                        >
                          Reset
                        </button>
                        <button
                          type='submit'
                          className='btn btn-primary'
                          data-kt-menu-dismiss='true'
                          data-kt-customer-table-filter='filter'
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    type='button'
                    className='btn btn-light-primary me-3'
                    data-bs-toggle='modal'
                    data-bs-target='#kt_customers_export_modal'
                  >
                    <span className='svg-icon svg-icon-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24px'
                        height='24px'
                        viewBox='0 0 24 24'
                        version='1.1'
                      >
                        <g stroke='none' strokeWidth='1' fill='none' fill-rule='evenodd'>
                          <rect x='0' y='0' width='24' height='24' />
                          <path
                            d='M17,8 C16.4477153,8 16,7.55228475 16,7 C16,6.44771525 16.4477153,6 17,6 L18,6 C20.209139,6 22,7.790861 22,10 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,9.99305689 C2,7.7839179 3.790861,5.99305689 6,5.99305689 L7.00000482,5.99305689 C7.55228957,5.99305689 8.00000482,6.44077214 8.00000482,6.99305689 C8.00000482,7.54534164 7.55228957,7.99305689 7.00000482,7.99305689 L6,7.99305689 C4.8954305,7.99305689 4,8.88848739 4,9.99305689 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,10 C20,8.8954305 19.1045695,8 18,8 L17,8 Z'
                            fill='#000000'
                            fill-rule='nonzero'
                            opacity='0.3'
                          />
                          <rect
                            fill='#000000'
                            opacity='0.3'
                            transform='translate(12.000000, 8.000000) scale(1, -1) rotate(-180.000000) translate(-12.000000, -8.000000)'
                            x='11'
                            y='2'
                            width='2'
                            height='12'
                            rx='1'
                          />
                          <path
                            d='M12,2.58578644 L14.2928932,0.292893219 C14.6834175,-0.0976310729 15.3165825,-0.0976310729 15.7071068,0.292893219 C16.0976311,0.683417511 16.0976311,1.31658249 15.7071068,1.70710678 L12.7071068,4.70710678 C12.3165825,5.09763107 11.6834175,5.09763107 11.2928932,4.70710678 L8.29289322,1.70710678 C7.90236893,1.31658249 7.90236893,0.683417511 8.29289322,0.292893219 C8.68341751,-0.0976310729 9.31658249,-0.0976310729 9.70710678,0.292893219 L12,2.58578644 Z'
                            fill='#000000'
                            fill-rule='nonzero'
                            transform='translate(12.000000, 2.500000) scale(1, -1) translate(-12.000000, -2.500000)'
                          />
                        </g>
                      </svg>
                    </span>
                    Export
                  </button>

                  <button
                    type='button'
                    className='btn btn-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#kt_modal_add_customer'
                  >
                    <span className='svg-icon svg-icon-2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24px'
                        height='24px'
                        viewBox='0 0 24 24'
                        version='1.1'
                      >
                        <rect fill='#000000' x='4' y='11' width='16' height='2' rx='1' />
                        <rect
                          fill='#000000'
                          opacity='0.5'
                          transform='translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000)'
                          x='4'
                          y='11'
                          width='16'
                          height='2'
                          rx='1'
                        />
                      </svg>
                    </span>
                    Add Customer
                  </button>
                </div>

                <div
                  className='d-flex justify-content-end align-items-center d-none'
                  data-kt-customer-table-toolbar='selected'
                >
                  <div className='fw-bolder me-5'>
                    <span className='me-2' data-kt-customer-table-select='selected_count'></span>
                    Selected
                  </div>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-kt-customer-table-select='delete_selected'
                  >
                    Delete Selected
                  </button>
                </div>
              </div>
            </div>

            <div className='card-body pt-0'>
              <div className='table-responsive'>
                <table
                  className='table align-middle table-row-dashed fs-6 gy-5'
                  id='kt_customers_table'
                >
                  <thead>
                    <tr className='text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0'>
                      <th className='w-10px pe-2'>
                        <div className='form-check form-check-sm form-check-custom form-check-solid me-3'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            data-kt-check='true'
                            data-kt-check-target='#kt_customers_table .form-check-input'
                          />
                        </div>
                      </th>
                      <th className='min-w-125px'>Name</th>
                      <th className='min-w-125px'>Phone</th>
                      <th className='min-w-125px'>Email</th>
                      <th className='min-w-125px'>Studio</th>
                      <th className='min-w-125px'>Status</th>
                      <th className='min-w-125px'>Date Created</th>
                      <th className='min-w-125px'>Assigee</th>
                      <th className='min-w-125px'>Campaigns</th>
                      <th className='min-w-125px'>Value</th>
                      <th className='text-end min-w-70px'>Actions</th>
                    </tr>
                  </thead>

                  <tbody className='fw-bold text-gray-600'>
                    {Object.keys(data).map((key: any) => {
                      const {
                        name,
                        phone,
                        email,
                        studio,
                        status,
                        dateCreated,
                        assignee,
                        campaigns,
                        value,
                      }: Customer = data[key]

                      return (
                        <tr key={key}>
                          <td>
                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                              <input className='form-check-input' type='checkbox' value='1' />
                            </div>
                          </td>
                          <td>
                            <a
                              href='../../demo1/dist/apps/customers/view.html'
                              className='text-gray-800 text-hover-primary mb-1'
                            >
                              {name}
                            </a>
                          </td>
                          <td>
                            <a href='#' className='text-gray-600 text-hover-primary mb-1'>
                              {phone}
                            </a>
                          </td>
                          <td>
                            <a href='#' className='text-gray-600 text-hover-primary mb-1'>
                              {email}
                            </a>
                          </td>
                          <td>
                            <a href='#' className='text-gray-600 text-hover-primary mb-1'>
                              {studio}
                            </a>
                          </td>
                          <td>
                            <a href='#' className='text-gray-600 text-hover-primary mb-1'>
                              {status}
                            </a>
                          </td>
                          <td>{dateCreated.toUTCString()}</td>
                          <td>{assignee}</td>
                          <td>Campaigns</td>
                          <td>{value}</td>
                          <td className='text-end'>
                            <button
                              className='btn btn-sm btn-light btn-active-light-primary show menu-dropdown'
                              data-kt-menu-trigger='click'
                              data-kt-menu-placement='bottom-end'
                            >
                              Actions
                              <span className='svg-icon svg-icon-5 m-0'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width='24px'
                                  height='24px'
                                  viewBox='0 0 24 24'
                                  version='1.1'
                                >
                                  <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                                    <polygon points='0 0 24 0 24 24 0 24' />
                                    <path
                                      d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                                      fill='#000000'
                                      fillRule='nonzero'
                                      transform='translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)'
                                    />
                                  </g>
                                </svg>
                              </span>
                            </button>

                            <div
                              className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4'
                              data-kt-menu='true'
                            >
                              <div className='menu-item px-3'>
                                <a
                                  href='../../demo1/dist/apps/customers/view.html'
                                  className='menu-link px-3'
                                >
                                  View
                                </a>
                              </div>

                              <div className='menu-item px-3'>
                                <a
                                  href='#'
                                  className='menu-link px-3'
                                  data-kt-customer-table-filter='delete_row'
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className='modal fade' id='kt_modal_add_customer' tabIndex={-1} aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered mw-650px'>
              <div className='modal-content'>
                <form
                  className='form'
                  action='#'
                  id='kt_modal_add_customer_form'
                  data-kt-redirect='../../demo1/dist/apps/customers/list.html'
                >
                  <div className='modal-header' id='kt_modal_add_customer_header'>
                    <h2 className='fw-bolder'>Add a Customer</h2>

                    <div
                      id='kt_modal_add_customer_close'
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
                          placeholder=''
                          name='name'
                          value='Sean Bean'
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
                          placeholder=''
                          name='email'
                          value='sean@dellito.com'
                        />
                      </div>

                      <div className='fv-row mb-15'>
                        <label className='fs-6 fw-bold mb-2'>Description</label>

                        <input
                          type='text'
                          className='form-control form-control-solid'
                          placeholder=''
                          name='description'
                        />
                      </div>

                      <div
                        className='fw-bolder fs-3 rotate collapsible mb-7'
                        data-bs-toggle='collapse'
                        role='button'
                        aria-expanded='false'
                        aria-controls='kt_customer_view_details'
                      >
                        Shipping Information
                        <span className='ms-2 rotate-180'>
                          <span className='svg-icon svg-icon-3'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24px'
                              height='24px'
                              viewBox='0 0 24 24'
                              version='1.1'
                            >
                              <g stroke='none' strokeWidth='1' fill='none' fill-rule='evenodd'>
                                <polygon points='0 0 24 0 24 24 0 24' />
                                <path
                                  d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                                  fill='#000000'
                                  fill-rule='nonzero'
                                  transform='translate(12.000003, 11.999999) rotate(-180.000000) translate(-12.000003, -11.999999)'
                                />
                              </g>
                            </svg>
                          </span>
                        </span>
                      </div>

                      <div id='kt_modal_add_customer_billing_info' className='collapse show'>
                        <div className='d-flex flex-column mb-7 fv-row'>
                          <label className='required fs-6 fw-bold mb-2'>Address Line 1</label>

                          <input
                            className='form-control form-control-solid'
                            placeholder=''
                            name='address1'
                            value='101, Collins Street'
                          />
                        </div>

                        <div className='d-flex flex-column mb-7 fv-row'>
                          <label className='fs-6 fw-bold mb-2'>Address Line 2</label>

                          <input
                            className='form-control form-control-solid'
                            placeholder=''
                            name='address2'
                            value=''
                          />
                        </div>

                        <div className='d-flex flex-column mb-7 fv-row'>
                          <label className='required fs-6 fw-bold mb-2'>Town</label>

                          <input
                            className='form-control form-control-solid'
                            placeholder=''
                            name='city'
                            value='Melbourne'
                          />
                        </div>

                        <div className='row g-9 mb-7'>
                          <div className='col-md-6 fv-row'>
                            <label className='required fs-6 fw-bold mb-2'>State / Province</label>

                            <input
                              className='form-control form-control-solid'
                              placeholder=''
                              name='state'
                              value='Victoria'
                            />
                          </div>

                          <div className='col-md-6 fv-row'>
                            <label className='required fs-6 fw-bold mb-2'>Post Code</label>

                            <input
                              className='form-control form-control-solid'
                              placeholder=''
                              name='postcode'
                              value='3000'
                            />
                          </div>
                        </div>

                        <div className='d-flex flex-column mb-7 fv-row'>
                          <label className='fs-6 fw-bold mb-2'>
                            <span className='required'>Country</span>
                            <i
                              className='fas fa-exclamation-circle ms-1 fs-7'
                              data-bs-toggle='tooltip'
                              title='Country of origination'
                            ></i>
                          </label>

                          <select
                            name='country'
                            aria-label='Select a Country'
                            data-control='select2'
                            data-placeholder='Select a Country...'
                            data-dropdown-parent='#kt_modal_add_customer'
                            className='form-select form-select-solid fw-bolder'
                          >
                            <option value=''>Select a Country...</option>
                            <option value='AF'>Afghanistan</option>
                            <option value='AX'>Aland Islands</option>
                            <option value='AL'>Albania</option>
                            <option value='DZ'>Algeria</option>
                            <option value='AS'>American Samoa</option>
                            <option value='AD'>Andorra</option>
                            <option value='AO'>Angola</option>
                            <option value='AI'>Anguilla</option>
                            <option value='AQ'>Antarctica</option>
                            <option value='AG'>Antigua and Barbuda</option>
                            <option value='AR'>Argentina</option>
                            <option value='AM'>Armenia</option>
                            <option value='AW'>Aruba</option>
                            <option value='AU'>Australia</option>
                            <option value='AT'>Austria</option>
                            <option value='AZ'>Azerbaijan</option>
                            <option value='BS'>Bahamas</option>
                            <option value='BH'>Bahrain</option>
                            <option value='BD'>Bangladesh</option>
                            <option value='BB'>Barbados</option>
                            <option value='BY'>Belarus</option>
                            <option value='BE'>Belgium</option>
                            <option value='BZ'>Belize</option>
                            <option value='BJ'>Benin</option>
                            <option value='BM'>Bermuda</option>
                            <option value='BT'>Bhutan</option>
                            <option value='BO'>Bolivia, Plurinational State of</option>
                            <option value='BQ'>Bonaire, Sint Eustatius and Saba</option>
                            <option value='BA'>Bosnia and Herzegovina</option>
                            <option value='BW'>Botswana</option>
                            <option value='BV'>Bouvet Island</option>
                            <option value='BR'>Brazil</option>
                            <option value='IO'>British Indian Ocean Territory</option>
                            <option value='BN'>Brunei Darussalam</option>
                            <option value='BG'>Bulgaria</option>
                            <option value='BF'>Burkina Faso</option>
                            <option value='BI'>Burundi</option>
                            <option value='KH'>Cambodia</option>
                            <option value='CM'>Cameroon</option>
                            <option value='CA'>Canada</option>
                            <option value='CV'>Cape Verde</option>
                            <option value='KY'>Cayman Islands</option>
                            <option value='CF'>Central African Republic</option>
                            <option value='TD'>Chad</option>
                            <option value='CL'>Chile</option>
                            <option value='CN'>China</option>
                            <option value='CX'>Christmas Island</option>
                            <option value='CC'>Cocos (Keeling) Islands</option>
                            <option value='CO'>Colombia</option>
                            <option value='KM'>Comoros</option>
                            <option value='CG'>Congo</option>
                            <option value='CD'>Congo, the Democratic Republic of the</option>
                            <option value='CK'>Cook Islands</option>
                            <option value='CR'>Costa Rica</option>
                            <option value='CI'>Côte d'Ivoire</option>
                            <option value='HR'>Croatia</option>
                            <option value='CU'>Cuba</option>
                            <option value='CW'>Curaçao</option>
                            <option value='CY'>Cyprus</option>
                            <option value='CZ'>Czech Republic</option>
                            <option value='DK'>Denmark</option>
                            <option value='DJ'>Djibouti</option>
                            <option value='DM'>Dominica</option>
                            <option value='DO'>Dominican Republic</option>
                            <option value='EC'>Ecuador</option>
                            <option value='EG'>Egypt</option>
                            <option value='SV'>El Salvador</option>
                            <option value='GQ'>Equatorial Guinea</option>
                            <option value='ER'>Eritrea</option>
                            <option value='EE'>Estonia</option>
                            <option value='ET'>Ethiopia</option>
                            <option value='FK'>Falkland Islands (Malvinas)</option>
                            <option value='FO'>Faroe Islands</option>
                            <option value='FJ'>Fiji</option>
                            <option value='FI'>Finland</option>
                            <option value='FR'>France</option>
                            <option value='GF'>French Guiana</option>
                            <option value='PF'>French Polynesia</option>
                            <option value='TF'>French Southern Territories</option>
                            <option value='GA'>Gabon</option>
                            <option value='GM'>Gambia</option>
                            <option value='GE'>Georgia</option>
                            <option value='DE'>Germany</option>
                            <option value='GH'>Ghana</option>
                            <option value='GI'>Gibraltar</option>
                            <option value='GR'>Greece</option>
                            <option value='GL'>Greenland</option>
                            <option value='GD'>Grenada</option>
                            <option value='GP'>Guadeloupe</option>
                            <option value='GU'>Guam</option>
                            <option value='GT'>Guatemala</option>
                            <option value='GG'>Guernsey</option>
                            <option value='GN'>Guinea</option>
                            <option value='GW'>Guinea-Bissau</option>
                            <option value='GY'>Guyana</option>
                            <option value='HT'>Haiti</option>
                            <option value='HM'>Heard Island and McDonald Islands</option>
                            <option value='VA'>Holy See (Vatican City State)</option>
                            <option value='HN'>Honduras</option>
                            <option value='HK'>Hong Kong</option>
                            <option value='HU'>Hungary</option>
                            <option value='IS'>Iceland</option>
                            <option value='IN'>India</option>
                            <option value='ID'>Indonesia</option>
                            <option value='IR'>Iran, Islamic Republic of</option>
                            <option value='IQ'>Iraq</option>
                            <option value='IE'>Ireland</option>
                            <option value='IM'>Isle of Man</option>
                            <option value='IL'>Israel</option>
                            <option value='IT'>Italy</option>
                            <option value='JM'>Jamaica</option>
                            <option value='JP'>Japan</option>
                            <option value='JE'>Jersey</option>
                            <option value='JO'>Jordan</option>
                            <option value='KZ'>Kazakhstan</option>
                            <option value='KE'>Kenya</option>
                            <option value='KI'>Kiribati</option>
                            <option value='KP'>Korea, Democratic People's Republic of</option>
                            <option value='KW'>Kuwait</option>
                            <option value='KG'>Kyrgyzstan</option>
                            <option value='LA'>Lao People's Democratic Republic</option>
                            <option value='LV'>Latvia</option>
                            <option value='LB'>Lebanon</option>
                            <option value='LS'>Lesotho</option>
                            <option value='LR'>Liberia</option>
                            <option value='LY'>Libya</option>
                            <option value='LI'>Liechtenstein</option>
                            <option value='LT'>Lithuania</option>
                            <option value='LU'>Luxembourg</option>
                            <option value='MO'>Macao</option>
                            <option value='MK'>Macedonia, the former Yugoslav Republic of</option>
                            <option value='MG'>Madagascar</option>
                            <option value='MW'>Malawi</option>
                            <option value='MY'>Malaysia</option>
                            <option value='MV'>Maldives</option>
                            <option value='ML'>Mali</option>
                            <option value='MT'>Malta</option>
                            <option value='MH'>Marshall Islands</option>
                            <option value='MQ'>Martinique</option>
                            <option value='MR'>Mauritania</option>
                            <option value='MU'>Mauritius</option>
                            <option value='YT'>Mayotte</option>
                            <option value='MX'>Mexico</option>
                            <option value='FM'>Micronesia, Federated States of</option>
                            <option value='MD'>Moldova, Republic of</option>
                            <option value='MC'>Monaco</option>
                            <option value='MN'>Mongolia</option>
                            <option value='ME'>Montenegro</option>
                            <option value='MS'>Montserrat</option>
                            <option value='MA'>Morocco</option>
                            <option value='MZ'>Mozambique</option>
                            <option value='MM'>Myanmar</option>
                            <option value='NA'>Namibia</option>
                            <option value='NR'>Nauru</option>
                            <option value='NP'>Nepal</option>
                            <option value='NL'>Netherlands</option>
                            <option value='NC'>New Caledonia</option>
                            <option value='NZ'>New Zealand</option>
                            <option value='NI'>Nicaragua</option>
                            <option value='NE'>Niger</option>
                            <option value='NG'>Nigeria</option>
                            <option value='NU'>Niue</option>
                            <option value='NF'>Norfolk Island</option>
                            <option value='MP'>Northern Mariana Islands</option>
                            <option value='NO'>Norway</option>
                            <option value='OM'>Oman</option>
                            <option value='PK'>Pakistan</option>
                            <option value='PW'>Palau</option>
                            <option value='PS'>Palestinian Territory, Occupied</option>
                            <option value='PA'>Panama</option>
                            <option value='PG'>Papua New Guinea</option>
                            <option value='PY'>Paraguay</option>
                            <option value='PE'>Peru</option>
                            <option value='PH'>Philippines</option>
                            <option value='PN'>Pitcairn</option>
                            <option value='PL'>Poland</option>
                            <option value='PT'>Portugal</option>
                            <option value='PR'>Puerto Rico</option>
                            <option value='QA'>Qatar</option>
                            <option value='RE'>Réunion</option>
                            <option value='RO'>Romania</option>
                            <option value='RU'>Russian Federation</option>
                            <option value='RW'>Rwanda</option>
                            <option value='BL'>Saint Barthélemy</option>
                            <option value='SH'>Saint Helena, Ascension and Tristan da Cunha</option>
                            <option value='KN'>Saint Kitts and Nevis</option>
                            <option value='LC'>Saint Lucia</option>
                            <option value='MF'>Saint Martin (French part)</option>
                            <option value='PM'>Saint Pierre and Miquelon</option>
                            <option value='VC'>Saint Vincent and the Grenadines</option>
                            <option value='WS'>Samoa</option>
                            <option value='SM'>San Marino</option>
                            <option value='ST'>Sao Tome and Principe</option>
                            <option value='SA'>Saudi Arabia</option>
                            <option value='SN'>Senegal</option>
                            <option value='RS'>Serbia</option>
                            <option value='SC'>Seychelles</option>
                            <option value='SL'>Sierra Leone</option>
                            <option value='SG'>Singapore</option>
                            <option value='SX'>Sint Maarten (Dutch part)</option>
                            <option value='SK'>Slovakia</option>
                            <option value='SI'>Slovenia</option>
                            <option value='SB'>Solomon Islands</option>
                            <option value='SO'>Somalia</option>
                            <option value='ZA'>South Africa</option>
                            <option value='GS'>South Georgia and the South Sandwich Islands</option>
                            <option value='KR'>South Korea</option>
                            <option value='SS'>South Sudan</option>
                            <option value='ES'>Spain</option>
                            <option value='LK'>Sri Lanka</option>
                            <option value='SD'>Sudan</option>
                            <option value='SR'>Suriname</option>
                            <option value='SJ'>Svalbard and Jan Mayen</option>
                            <option value='SZ'>Swaziland</option>
                            <option value='SE'>Sweden</option>
                            <option value='CH'>Switzerland</option>
                            <option value='SY'>Syrian Arab Republic</option>
                            <option value='TW'>Taiwan, Province of China</option>
                            <option value='TJ'>Tajikistan</option>
                            <option value='TZ'>Tanzania, United Republic of</option>
                            <option value='TH'>Thailand</option>
                            <option value='TL'>Timor-Leste</option>
                            <option value='TG'>Togo</option>
                            <option value='TK'>Tokelau</option>
                            <option value='TO'>Tonga</option>
                            <option value='TT'>Trinidad and Tobago</option>
                            <option value='TN'>Tunisia</option>
                            <option value='TR'>Turkey</option>
                            <option value='TM'>Turkmenistan</option>
                            <option value='TC'>Turks and Caicos Islands</option>
                            <option value='TV'>Tuvalu</option>
                            <option value='UG'>Uganda</option>
                            <option value='UA'>Ukraine</option>
                            <option value='AE'>United Arab Emirates</option>
                            <option value='GB'>United Kingdom</option>
                            <option value='US'>United States</option>
                            <option value='UY'>Uruguay</option>
                            <option value='UZ'>Uzbekistan</option>
                            <option value='VU'>Vanuatu</option>
                            <option value='VE'>Venezuela, Bolivarian Republic of</option>
                            <option value='VN'>Vietnam</option>
                            <option value='VI'>Virgin Islands</option>
                            <option value='WF'>Wallis and Futuna</option>
                            <option value='EH'>Western Sahara</option>
                            <option value='YE'>Yemen</option>
                            <option value='ZM'>Zambia</option>
                            <option value='ZW'>Zimbabwe</option>
                          </select>
                        </div>

                        <div className='fv-row mb-7'>
                          <div className='d-flex flex-stack'>
                            <div className='me-5'>
                              <label className='fs-6 fw-bold'>Use as a billing adderess?</label>

                              <div className='fs-7 fw-bold text-muted'>
                                If you need more info, please check budget planning
                              </div>
                            </div>

                            <label className='form-check form-switch form-check-custom form-check-solid'>
                              <input
                                className='form-check-input'
                                name='billing'
                                type='checkbox'
                                value='1'
                                id='kt_modal_add_customer_billing'
                              />

                              <span className='form-check-label fw-bold text-muted'>Yes</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
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
                </form>
              </div>
            </div>
          </div>

          <div
            className='modal fade'
            id='kt_customers_export_modal'
            tabIndex={-1}
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered mw-650px'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h2 className='fw-bolder'>Export Customers</h2>

                  <div
                    id='kt_customers_export_close'
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

                <div className='modal-body scroll-y mx-5 mx-xl-15 my-7'>
                  <form id='kt_customers_export_form' className='form' action='#'>
                    <div className='fv-row mb-10'>
                      <label className='fs-5 fw-bold form-label mb-5'>Select Date Range:</label>

                      <input
                        className='form-control form-control-solid'
                        placeholder='Pick a date'
                        name='date'
                      />
                    </div>

                    <div className='fv-row mb-10'>
                      <label className='fs-5 fw-bold form-label mb-5'>Select Export Format:</label>

                      <select
                        data-control='select2'
                        data-placeholder='Select a format'
                        data-hide-search='true'
                        name='format'
                        className='form-select form-select-solid'
                      >
                        <option value='excell'>Excel</option>
                        <option value='pdf'>PDF</option>
                        <option value='cvs'>CVS</option>
                        <option value='zip'>ZIP</option>
                      </select>
                    </div>

                    <div className='row fv-row mb-15'>
                      <label className='fs-5 fw-bold form-label mb-5'>Payment Type:</label>

                      <div className='d-flex flex-column'>
                        <label className='form-check form-check-custom form-check-sm form-check-solid mb-3'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value='1'
                            name='payment_type'
                          />
                          <span className='form-check-label text-gray-600 fw-bold'>All</span>
                        </label>

                        <label className='form-check form-check-custom form-check-sm form-check-solid mb-3'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value='2'
                            name='payment_type'
                          />
                          <span className='form-check-label text-gray-600 fw-bold'>Visa</span>
                        </label>

                        <label className='form-check form-check-custom form-check-sm form-check-solid mb-3'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value='3'
                            name='payment_type'
                          />
                          <span className='form-check-label text-gray-600 fw-bold'>Mastercard</span>
                        </label>

                        <label className='form-check form-check-custom form-check-sm form-check-solid'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value='4'
                            name='payment_type'
                          />
                          <span className='form-check-label text-gray-600 fw-bold'>
                            American Express
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className='text-center'>
                      <button
                        type='reset'
                        id='kt_customers_export_cancel'
                        className='btn btn-light me-3'
                      >
                        Discard
                      </button>
                      <button
                        type='submit'
                        id='kt_customers_export_submit'
                        className='btn btn-primary'
                      >
                        <span className='indicator-label'>Submit</span>
                        <span className='indicator-progress'>
                          Please wait...
                          <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
