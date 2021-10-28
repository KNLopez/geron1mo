/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useLocation} from 'react-router-dom'
import Table from '../../components/Table/Table'
import data from './data'
import {ModalTypes} from '../../components/modals/models'
import {modalActions} from '../../components/modals/state/MainModalState'
import {useDispatch} from 'react-redux'
import ModalButton from '../../components/modals/ModalButton'

const StudioProfile: React.FC<any> = ({studio}) => {
  const dispatch = useDispatch()

  const handleDelete = () => {}

  const handleRowClick = (value: any) => {
    dispatch(modalActions.showModal({type: ModalTypes.STUDIO_DASHBOARD_FORM}))
  }

  console.log(data, studio)

  if (!studio) return null
  return (
    <div className='card mb-5 mb-xl-10 position-sticky' style={{top: 150}}>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <a
                    href='#'
                    className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1 text-capitalize'
                  >
                    {studio.name}
                  </a>
                  <a href='#'>
                    <KTSVG
                      path='/media/icons/duotone/Design/Verified.svg'
                      className='svg-icon-1 svg-icon-primary'
                    />
                  </a>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                  >
                    {studio.address}
                  </a>
                </div>
              </div>

              <div className='d-flex my-4'>
                <a href='#' className='btn btn-sm btn-light me-2' id='kt_user_follow_button'>
                  <KTSVG
                    path='/media/icons/duotone/Navigation/Double-check.svg'
                    className='svg-icon-3 d-none'
                  />
                </a>
                <div className='me-0'>
                  <button
                    className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                    data-kt-menu-trigger='click'
                    data-kt-menu-placement='bottom-end'
                    data-kt-menu-flip='top-end'
                  >
                    <i className='bi bi-three-dots fs-3'></i>
                  </button>
                  <Dropdown1 />
                </div>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotone/Navigation/Arrow-up.svg'
                        className='svg-icon-3 svg-icon-info me-2'
                      />
                      <div className='fs-2 fw-bolder'>150</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Leads</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotone/Navigation/Arrow-down.svg'
                        className='svg-icon-3 svg-icon-info me-2'
                      />
                      <div className='fs-2 fw-bolder'>67%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Sales Conversion</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotone/Navigation/Arrow-down.svg'
                        className='svg-icon-3 svg-icon-danger me-2'
                      />
                      <div className='fs-2 fw-bolder'>29%</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Rollover</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotone/Navigation/Arrow-up.svg'
                        className='svg-icon-3 svg-icon-success me-2'
                      />
                      <div className='fs-2 fw-bolder'>119</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Ave. Member Attendance</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotone/Navigation/Arrow-down.svg'
                        className='svg-icon-3 svg-icon-success me-2'
                      />
                      <div className='fs-2 fw-bolder'>4</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Cancels</div>
                  </div>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTSVG
                        path='/media/icons/duotone/Navigation/Minus.svg'
                        className='svg-icon-3 svg-icon- me-2'
                      />
                      <div className='fs-2 fw-bolder'>0</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>Net Growth</div>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-column border-top mt-4'>
                <Table
                  style={{maxHeight: '45vh', overflowY: 'auto'}}
                  data={data.mockData}
                  columns={data.columns}
                  deleteAction={handleDelete}
                  searchPlaceholder='Search entries'
                  rowClick={handleRowClick}
                  loading={false}
                  addActionModal={() => (
                    <ModalButton
                      buttonText='Add Entry'
                      modalType={ModalTypes.STUDIO_DASHBOARD_FORM}
                    />
                  )}
                />
              </div>

              {/* <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                  <span className='fw-bold fs-6 text-gray-400'>Profile Compleation</span>
                  <span className='fw-bolder fs-6'>50%</span>
                </div>
                <div className='h-5px mx-3 w-100 bg-light mb-3'>
                  <div
                    className='bg-success rounded h-5px'
                    role='progressbar'
                    style={{width: '50%'}}
                  ></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {StudioProfile}
