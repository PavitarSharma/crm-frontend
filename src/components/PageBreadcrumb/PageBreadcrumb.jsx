import { Breadcrumb }from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const PageBreadcrumb = ({ page }) => {
  return (
    <Breadcrumb className='mt-4'>
      <NavLink to="/dashboard">
        Home
      </NavLink>

      <div className='mx-2'>&#47;</div>
      
      <Breadcrumb.Item active >{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default PageBreadcrumb