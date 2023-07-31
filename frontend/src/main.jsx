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
import ProfileScreen from './screens/ServiceProvider/SPprofile.jsx'
import Home from './screens/ServiceProvider/Home.jsx'
import PackageForm from './screens/ServiceProvider/PackageForm.jsx'
import PackagesView from './screens/ServiceProvider/PackagesView.jsx'
import PackageFullDetails from './screens/ServiceProvider/PackageFullDetails.jsx'
import CusHome from './components/Cus/CusHome.jsx'
import MyEventHome from './screens/ServiceProvider/SPEventHome.jsx'
import BlockList from './screens/ServiceProvider/BlockList.jsx'
import Calendar from './screens/ServiceProvider/Calendar.jsx'

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
      </Route>
      <Route path="/ServiceProvider/home" element={<Home />} />
      <Route path="/ServiceProvider/packageForm" element={<PackageForm />} />
      <Route path="/ServiceProvider/packagesView" element={<PackagesView />} />
      <Route path="/ServiceProvider/packageFullDetails" element={<PackageFullDetails />} />
      <Route path="/ServiceProvider/myEventhome" element={<MyEventHome />} />
      <Route path="/ServiceProvider/blockList" element={<BlockList />} />
      <Route path="/ServiceProvider/calendar" element={<Calendar />} />
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
