import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import { ToastContainer } from 'react-toastify'
import { CustomerNavbar } from './components/Cus/CustomerNavbar'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const location = useLocation()
  // Array of paths where the Header should not be rendered
  const excludedPaths = ['/login', '/register/customer', '/register/serviceProvider', '/customer/sellTickets/add', '/users/verify', '/checkYourEmail']

  // Function to check if the current path is in the excludedPaths
  const shouldRenderHeader = !excludedPaths.includes(location.pathname)
  return (
    <>
      {shouldRenderHeader && <Header />}
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default App
