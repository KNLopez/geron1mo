export interface BreadCrumb {
  title: string
  url?: string
}

export interface ToolbarProps {
  title: string
  breadcrumbs: BreadCrumb[]
}

const Toolbar: React.FC<ToolbarProps> = ({title, breadcrumbs}) => {
  return (
    <div className='toolbar' id='kt_toolbar'>
      <div id='kt_toolbar_container' className='container-fluid d-flex flex-stack'>
        <div className='page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0'>
          <h1 className='d-flex align-items-center text-dark fw-bolder fs-3 my-1'>{title}</h1>
          <span className='h-20px border-gray-200 border-start mx-4'></span>
          <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
            {breadcrumbs.map((breadcrumb, index) => {
              if (index === breadcrumbs.length - 1) {
                return <li className='breadcrumb-item text-dark'>{breadcrumb.title}</li>
              }
              return (
                <>
                  <li className='breadcrumb-item text-muted'>
                    <a href={breadcrumb.url} className='text-muted text-hover-primary'>
                      {breadcrumb.title}
                    </a>
                  </li>
                  <li className='breadcrumb-item'>
                    <span className='bullet bg-gray-200 w-5px h-2px'></span>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
