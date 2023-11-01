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
// import ProfileScreen from './screens/ProfileScreen.jsx'
// import Cus_Home from './screens/Customer/Cus_Home.jsx'
import CreateEvent from './screens/Customer/createEvent.jsx'
import CusHome from './components/Cus/CusHome.jsx'
import CustomerEventDetails from './screens/Customer/CustomerEventDetails.jsx'
import Home from './screens/ServiceProvider/Home.jsx'
import PackageForm from './screens/ServiceProvider/PackageForm.jsx'
import PackagesView from './screens/ServiceProvider/PackagesView.jsx'
import PackageFullDetails from './screens/ServiceProvider/PackageFullDetails.jsx'
import ServiceProviderAvailability from './screens/ServiceProvider/ServiceProviderAvailability.jsx'
import PredefinedPrefList from './screens/ServiceProvider/PredefinedPack/PrePrefList.jsx'
import PredefOneType from './screens/ServiceProvider/PredefinedPack/TypeOne.jsx'
import AllTicketsPage from './screens/AllTicketsPage.jsx'
import SellTicketsPage from './screens/SellTicketsPage.jsx'
import AddTicketsPage from './screens/addTicketsPage.jsx'
import TicketInfoPage from './screens/TicketInfoPage.jsx'
import CusVenue from './components/Cus/CusVenue.jsx'
import Venue from "../src/components/Cus/Pages/Venue.jsx";
import Decoration from "../src/components/Cus/Pages/Decoration.jsx";
import Catering from "../src/components/Cus/Pages/Catering.jsx";
import Cake from "../src/components/Cus/Pages/Cake.jsx";
import SoundAndLight from "../src/components/Cus/Pages/SoundAndLight.jsx";
import Photography from "../src/components/Cus/Pages/Photography.jsx";
// import Entertainment from "../src/components/Cus/Pages/Entertainment.jsx";
import StageRental from "./components/Cus/Pages/StageRental.jsx";
import Sidebar from './components/Cus/Sidebar.jsx'
import VenueDes from './components/Cus/Pages/VenueDes.jsx'
import Birthday from './components/Cus/PrePackages/Birthday.jsx'
// import MyEventHome from './screens/ServiceProvider/SPEventHome.jsx'
import AdminScreen from './screens/AdminScreen.jsx'
import Users from './components/Admin/Users.jsx'
import BlockList from './screens/ServiceProvider/BlockList.jsx'
import EmailVerification from './components/EmailVerification.jsx'
import CheckYourEmail from './screens/CheckYourEmail.jsx'
import BirthdayDes from './components/Cus/PrePackages/BirthdayDes.jsx'
import ChatSidebar from './components/Cus/Chat/ChatSidebar.jsx'
import ChatDes from './components/Cus/Chat/ChatDes.jsx'
import BrideToBe from './components/Cus/PrePackages/BrideToBe.jsx'
import Anniversary from './components/Cus/PrePackages/Anniversary.jsx'
import Social from './components/Cus/PrePackages/Social.jsx'
import CustomerProfile from './screens/Customer/CustomerProfile.jsx'
import ServiceProviderRequests from './screens/ServiceProvider/ServiceProviderRequests.jsx'
// import ServiceProviderAvailability from './screens/ServiceProvider/ServiceProviderAvailability.jsx'
import CompareVenuePackages from './screens/Customer/CompareVenuePackages.jsx'
import DecorationDes from './components/Cus/Pages/DecorationDes.jsx'
import CateringDes from './components/Cus/Pages/CateringDes.jsx'
import CakeDes from './components/Cus/Pages/CakeDes.jsx'
import SoundAndLightDes from './components/Cus/Pages/SoundAndLightDes.jsx'
import PhotographyDes from './components/Cus/Pages/PhotographyDes.jsx'
import StageRentalDes from './components/Cus/Pages/StageRentalDes.jsx'
import UsersDetails from './components/Admin/UsersDetails.jsx'
import TicketSupports from './components/Admin/TicketSupports.jsx'
import AdminSupportView from './components/Admin/AdminSupportView.jsx'
import Revenue from './components/Admin/Revenue.jsx'
import AdminEvents from './components/Admin/AdminEvents.jsx'
import AdminEventDetails from './components/Admin/AdminEventDetails.jsx'
import CompareCakePackages from './screens/Customer/CompareCakePackages.jsx'
import ComparePhotographyPackages from './screens/Customer/ComparePhotographyPackages.jsx'
import CompareCateringPackages from './screens/Customer/CompareCateringPackages.jsx'
import CompareSoundAndLightPackages from './screens/Customer/CompareSoundAndLightPackages.jsx'
import CompareStageRentalPackages from './screens/Customer/CompareStageRentalPackages.jsx'

import AddtoPre from './screens/ServiceProvider/PredefinedPack/AddtoPre.jsx'
import PackageRequest from './components/Admin/PackageRequest.jsx'
import CompareDecoPackages from './screens/Customer/CompareDecoPackages.jsx'
// import AdminProfileForCustomer from './components/Admin/AdminProfileForCustomer.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/logout" element={<HomeScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/users/verify" element={<EmailVerification />} />
      <Route path="/register/customer" element={<RegisterCustomerScreen />} />
      <Route path="/register/serviceProvider" element={<RegisterServiceProviderScreen />} />
      <Route path="/checkYourEmail" element={<CheckYourEmail />} />

      {/* Private Route */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/customerHome" element={<CusHome />} />
        <Route path="/customer/buyTickets" element={<AllTicketsPage />} />
        <Route path="/customer/buyTickets/info" element={<TicketInfoPage />} />
        <Route path="/customer/sellTickets" element={<SellTicketsPage />} />
        <Route path="/customer/sellTickets/add" element={<AddTicketsPage />} />
        <Route path="/customer/myEvents" element={<CreateEvent />} />
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
        <Route path="/StageRental" element={<StageRental />} />

        <Route path="/VenueDes" element={<VenueDes />} />
        <Route path="/DecorationDes" element={<DecorationDes />} />
        <Route path="/CateringDes" element={<CateringDes />} />
        <Route path="/CakeDes" element={<CakeDes />} />
        <Route path="/SoundAndLightDes" element={<SoundAndLightDes />} />
        <Route path="/PhotographyDes" element={<PhotographyDes />} />
        <Route path="/StageRentalDes" element={<StageRentalDes />} />

        <Route path="/Birthday" element={<Birthday />} />
        <Route path="/BirthdayDes" element={<BirthdayDes />} />
        <Route path="/BrideToBe" element={<BrideToBe />} />
        <Route path="/Anniversary" element={<Anniversary />} />
        <Route path="/Social" element={<Social />} />
        <Route path="/ChatSidebar" element={<ChatSidebar />} />
        <Route path="/ChatDes" element={<ChatDes />} />
        <Route path="/customer/event/VenueCompare" element={<CompareVenuePackages />} />
        <Route path="/customer/event/Venue" element={<Venue />} />
        <Route path="/customer/event/VenueDes" element={<VenueDes />} />
        <Route path="/customer/event/Catering" element={<Catering />} />
        <Route path="/customer/event/CateringDes" element={<CateringDes />} />
        <Route path="/customer/event/Cakes" element={<Cake />} />
        <Route path="/customer/event/CakeDes" element={<CakeDes />} />
        <Route path="/customer/event/Decoration" element={<Decoration />} />
        <Route path="/customer/event/DecorationDes" element={<DecorationDes />} />
        <Route path="/customer/event/Photography" element={<Photography />} />
        <Route path="/customer/event/PhotographyDes" element={<PhotographyDes />} />
        <Route path="/customer/event/SoundAndLight" element={<SoundAndLight />} />
        <Route path="/customer/event/SoundAndLightDes" element={<SoundAndLightDes />} />
        <Route path="/customer/PredefinePackage/ServiceProvider-profile" element={<ProfileScreen />} />
        <Route path="/customer/event/CakeCompare" element={<CompareCakePackages/>}/>
        <Route path="/customer/event/DecoCompare" element={<CompareDecoPackages/>}/>
        <Route path="/customer/event/SoundAndLightDes" element={<SoundAndLightDes />} />        
        <Route path="/customer/PredefinePackage/ServiceProvider-profile" element={<ProfileScreen />} />
        <Route path="/customer/event/CakeCompare" element={<CompareCakePackages />} />
        <Route path="/customer/event/PhotographyCompare" element={<ComparePhotographyPackages />} />
        <Route path="/customer/event/CateringCompare" element={<CompareCateringPackages />} />
        <Route path="/customer/event/SoundAndLightCompare" element={<CompareSoundAndLightPackages />} />
        <Route path="/customer/event/StageRental" element={<StageRental />} />
        <Route path="/customer/event/StageRentalDes" element={<StageRentalDes />} />
        <Route path="/customer/event/StageRentalCompare" element={<CompareStageRentalPackages />} />
        <Route path="/BrideDes" element={<BirthdayDes />} />
        <Route path="/AnniversaryDes" element={<BirthdayDes />} />
        

      </Route>

      <Route path="/ServiceProvider/home" element={<Home />} />
      <Route path="/ServiceProvider/packageForm" element={<PackageForm />} />
      <Route path="/ServiceProvider/packagesView" element={<PackagesView />} />
      <Route path="/ServiceProvider/packageFullDetails" element={<PackageFullDetails />} />
      <Route path="/ServiceProvider/Requests" element={<ServiceProviderRequests />} />
      <Route path="/serviceProvider/availability" element={<ServiceProviderAvailability />} />


      {/* <Route path="/ServiceProvider/myEventhome" element={<MyEventHome />} /> */}
      {/* admin rout  */}
      <Route path="/adminDashboard" element={<AdminScreen />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/UsersDetails" element={<UsersDetails />} />
      <Route path="/TicketSupports" element={<TicketSupports />} />
      <Route path="/AdminSupportView" element={<AdminSupportView />} />
      <Route path="/Revenue" element={<Revenue />} />
      <Route path="/AdminEvents" element={<AdminEvents />} />
      <Route path="/AdminEventDetails" element={<AdminEventDetails />} />
      {/* <Route path="/AdminProfileForCustomer" element={<AdminProfileForCustomer />} /> */}

      {/* admin routes ends */}
      <Route path="/ServiceProvider/profile" element={<ProfileScreen />} />
      <Route path="/ServiceProvider/blockList" element={<BlockList />} />
      <Route path="/ServiceProvider/preferences" element={<PredefinedPrefList />} />
      <Route path="/ServiceProvider/typePack" element={<PredefOneType />} />
      <Route path="/ServiceProvider/typePacklist" element={<AddtoPre />} />
      {/* <Route path="/ServiceProvider/massege" element={<Massege />} /> */}
      <Route path="/PackageRequest" element={<PackageRequest />} />


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
