// import React from 'react'
import FormDetails from "../../components/ServiceProvider/SPCreateForm/FormDetails"
import Title from "../../components/ServiceProvider/SPCreateForm/Title"
import SPSidebar from "../../components/ServiceProvider/SPSidebar"

const PackageForm = () => {
  return (
    <div style={{ "display": "flex" }}>
      <div><SPSidebar /></div>
      <div style={{ "width": "78%" }}>
        <Title />
        <FormDetails />
      </div>
    </div>
  )
}

export default PackageForm