// import React from 'react'
import PackFull from '../../components/ServiceProvider/FullPackDetails/PackageFullView'
import OptionDetails from '../../components/ServiceProvider/FullPackDetails/OptionView'
import SPSidebar from "../../components/ServiceProvider/SPSidebar"

const PackageFullDetails = () => {
  return (
    <div style={{ "display": "flex" }}>
      <div><SPSidebar /></div>
      <div>
        <PackFull />
        <OptionDetails />
      </div>
    </div>
  )
}

export default PackageFullDetails