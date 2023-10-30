//import React from "react";
import Calender from "../../components/ServiceProvider/Calender";
import SPSidebar from "../../components/ServiceProvider/SPSidebar"

const ServiceProviderAvailability = () => {
  return (
    <div style={{ "display": "flex" }}>
      <div><SPSidebar /></div>
      <div><Calender /></div>
  </div>
  );
};

export default ServiceProviderAvailability;
