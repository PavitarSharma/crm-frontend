import { Breadcrumb }from 'react-bootstrap'

const PageBreadcrumb = ({ page }) => {
  return (
    <Breadcrumb className='mt-4'>
      <Breadcrumb.Item href="/dashboard" style={{ color: "#000"}}>Home</Breadcrumb.Item>
      
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default PageBreadcrumb