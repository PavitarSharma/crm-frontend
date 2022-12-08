const Footer = () => {
  const date = new Date()

  const getFullYear = date.getFullYear()

  return (
    <div className="text-center copy-right bg-dark text-white py-4">
      &copy; CRM all right reserved - {getFullYear}.
    </div>
  )
}

export default Footer