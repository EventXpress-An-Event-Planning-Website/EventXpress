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
// import Cus_Home from './screens/Customer/Cus_Home.jsx'
import CreateEvent from './screens/Customer/createEvent.jsx'
import CusHome from './components/Cus/CusHome.jsx'
import CustomerEventDetails from './screens/Customer/CustomerEventDetails.jsx'
import Home from './screens/ServiceProvider/Home.jsx'
import PackageForm from './screens/ServiceProvider/PackageForm.jsx'
import PackagesView from './screens/ServiceProvider/PackagesView.jsx'
import PackageFullDetails from './screens/ServiceProvider/PackageFullDetails.jsx'
import AllTicketsPage from './screens/AllTicketsPage.jsx'
import SellTicketsPage from './screens/SellTicketsPage.jsx'
import AddTicketsPage from './screens/addTicketsPage.jsx'
import TicketInfoPage from './screens/TicketInfoPage.jsx'
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
import MyEventHome from './screens/ServiceProvider/SPEventHome.jsx'
import BirthdayDes from './components/Cus/PrePackages/BirthdayDes.jsx'
import ChatSidebar from './components/Cus/Chat/ChatSidebar.jsx'
import ChatDes from './components/Cus/Chat/ChatDes.jsx'
import BrideToBe from './components/Cus/PrePackages/BrideToBe.jsx'
import Anniversary from './components/Cus/PrePackages/Anniversary.jsx'
import Social from './components/Cus/PrePackages/Social.jsx'
import CustomerProfile from './screens/Customer/CustomerProfile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/logout" element={<HomeScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/register/customer" element={<RegisterCustomerScreen />} />
      <Route path="/register/serviceProvider" element={<RegisterServiceProviderScreen />} />
      {/* Private Route */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/customerHome" element={<CusHome />} />
        <Route path="/customer/buyTickets" element={<AllTicketsPage />} />
        <Route path="/customer/buyTickets/info" element={<TicketInfoPage />} />
        <Route path="/customer/sellTickets" element={<SellTicketsPage />} />
        <Route path="/customer/sellTickets/add" element={<AddTicketsPage />} />
        <Route path="/customer/customer/myEvents" element={<CreateEvent />} />
        <Route path="/customer/eventdetails" element={<CustomerEventDetails />} />
        <Route path="/customer/profile" element={<CustomerProfile />} />
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
        <Route path="/BirthdayDes" element={<BirthdayDes/>}/>
        <Route path="/BrideToBe" element={<BrideToBe/>}/>
        <Route path="/Anniversary" element={<Anniversary/>}/>
        <Route path="/Social" element={<Social/>}/>
        <Route path="/ChatSidebar" element={<ChatSidebar/>}/>
        <Route path="/ChatDes" element={<ChatDes/>}/>

      </Route>
   
      <Route path="/ServiceProvider/home" element={<Home />} />
      <Route path="/ServiceProvider/packageForm" element={<PackageForm />} />
      <Route path="/ServiceProvider/packagesView" element={<PackagesView />} />
      <Route path="/ServiceProvider/packageFullDetails" element={<PackageFullDetails />} />
      <Route path="/ServiceProvider/myEventhome" element={<MyEventHome />} />
   
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
