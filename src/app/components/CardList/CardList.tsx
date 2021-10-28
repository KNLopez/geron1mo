import {Card1} from '../../../_metronic/partials/content/cards/Card1'
import {FallbackView} from '../../../_metronic/partials/content/fallback-view/FallbackView'

const bgs = ['bg-warning', 'bg-success', 'bg-info', 'bg-danger', 'bg-dark']

const CardList = ({data, onClick, loading}: any) => {
  if (loading) return <FallbackView />
  return (
    <>
      {data.map((item: any) => {
        const numberValue = item.name ? item.name.toLowerCase().charCodeAt(0) - 97 + 1 : 0
        return (
          <button
            className='mb-4 p-4 d-flex border border-white flex-row btn btn-white btn-hover-outline-info btn-active'
            onClick={() => onClick(item)}
          >
            <div
              className='symbol symbol-35px symbol-circle d-flex align-items-center '
              data-bs-toggle='tooltip'
              title=''
              data-bs-original-title={`${item.firstname} ${item.lastname}`}
            >
              <span
                className={`symbol-label text-inverse-primary fw-bolder ms-2 ${
                  bgs[numberValue % bgs.length]
                }`}
              >
                {item.name?.charAt(0)}
              </span>
            </div>
            <div className='d-flex flex-column align-items-start justify-content-start ms-3'>
              <a className='text-dark fw-bolder text-hover-primary fs-6'>{item.name}</a>
              <span className='text-muted fw-bold text-start'>{item.address}</span>
            </div>
          </button>
        )
      })}
    </>
  )
}

export default CardList
