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
import CusVenue from './components/Cus/CusVenue.jsx'
import Venue from "../src/components/Cus/Pages/Venue.jsx";
import Decoration from "../src/components/Cus/Pages/Decoration.jsx";
import Catering from "../src/components/Cus/Pages/Catering.jsx";
import Cake from "../src/components/Cus/Pages/cake.jsx";
import SoundAndLight from "../src/components/Cus/Pages/SoundAndLight.jsx";
import Photography from "../src/components/Cus/Pages/Photography.jsx";
import Entertainment from "../src/components/Cus/Pages/Entertainment.jsx";
import StageRentals from "../src/components/Cus/Pages/StageRentals.jsx";
import Sidebar from './components/Cus/Sidebar.jsx'
import VenueDes from './components/Cus/Pages/VenueDes.jsx'
import Birthday from './components/Cus/PrePackages/Birthday.jsx'

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

        <Route path="/CusVenue" element={<CusVenue />} />

        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Venue" element={<Venue />} />
        <Route path="/Decoration" element={<Decoration />} />
        <Route path="/Catering" element={<Catering />} />
        <Route path="/Cake" element={<Cake />} />
        <Route path="/SoundAndLight" element={<SoundAndLight />} />
        <Route path="/Photography" element={<Photography />} />
        {/* <Route path="/Entertainment" element={<Entertainment />} /> */}
        <Route path="/StageRentals" element={<StageRentals />} />

        <Route path="/VenueDes" element={<VenueDes />} />
        <Route path="/Birthday" element={<Birthday/>}/>

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
