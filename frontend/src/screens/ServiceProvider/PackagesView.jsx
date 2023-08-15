// import React from 'react'
import Packages from "../../components/ServiceProvider/Packages"
import SPSidebar from "../../components/ServiceProvider/SPSidebar"

const PackagesView = () => {
  return (
    <div style={{ "display": "flex" }}>
      <div><SPSidebar /></div>
      <div><Packages /></div>
    </div>
  )
}

export default PackagesView