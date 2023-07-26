import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import store from './store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import PrivateRoute from './components/PrivateRoute.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'
import RegisterScreen from './screens/RegisterScreen.jsx'
import RegisterCustomerScreen from './screens/RegisterCustomerScreen.jsx'
import RegisterServiceProviderScreen from './screens/RegisterServiceProviderScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import CusHome from './components/Cus/CusHome.jsx'
import AllTicketsPage from './screens/AllTicketsPage.jsx'
import SellTicketsPage from './screens/SellTicketsPage.jsx'
import AddTicketsPage from './screens/addTicketsPage.jsx'
import TicketInfoPage from './screens/TicketInfoPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/register/customer" element={<RegisterCustomerScreen />} />
      <Route path="/register/serviceProvider" element={<RegisterServiceProviderScreen />} />
      {/* Private Route */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/customerHome" element={<CusHome />} />
        <Route path="/buy-tickets" element={<AllTicketsPage />} />
        <Route path="/buy-tickets/info" element={<TicketInfoPage />} />
        <Route path="/sell-tickets" element={<SellTicketsPage />} />
        <Route path="/sell-tickets/add" element={<AddTicketsPage />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
