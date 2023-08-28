// import React from 'react'
import AddToPreList from '../../../components/ServiceProvider/PredefinedPack/AddtoPredefined'
import SPSidebar from "../../../components/ServiceProvider/SPSidebar"

const AddtoPre = () => {
  return (
    <div style={{ "display": "flex" }}>
      <div><SPSidebar /></div>
      <div>
        <AddToPreList />
      </div>
    </div>
    
  )
}

export default AddtoPre