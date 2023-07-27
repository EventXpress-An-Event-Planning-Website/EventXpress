import { Outlet } from 'react-router-dom'
import Header from './components/header'
import {ToastContainer} from 'react-toastify'
import {CustomerNavbar} from './components/Cus/CustomerNavbar'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <>
      <Header/>
      <ToastContainer />
      
      <Outlet />
      
    </>
  )
}

export default App
