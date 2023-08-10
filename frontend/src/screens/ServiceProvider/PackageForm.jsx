// import React from 'react'
import FormDetails from "../../components/ServiceProvider/SPCreateForm/FormDetails"
import Title from "../../components/ServiceProvider/SPCreateForm/Title"
// import FormOption from "../../components/ServiceProvider/SPCreateForm/FormOption"
import SPSidebar from "../../components/ServiceProvider/SPSidebar"

const PackageForm = () => {
  return (
    <div style={{ "display": "flex" }}>
      <div><SPSidebar /></div>
      <div style={{ "width": "78%" }}>
        <Title />
        <FormDetails />
        {/* <FormOption /> */}
      </div>
    </div>
  )
}

export default PackageForm