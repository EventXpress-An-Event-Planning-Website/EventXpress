// import React from 'react'
import { useState } from "react";
import PreferenceList from "../../../components/ServiceProvider/PredefinedPack/PrefpreList";

const PrePrefList = () => {
  const [rows] = useState([
    { busName: "Nimal Silva", busAddress: "Hikkaduwa" },
    { busName: "Wasana Sandamali", busAddress: "Galaha" },
    { busName: "Kamal Ekanayaka", busAddress: "Dehiwala" },
    { busName: "Amal Jayarathna", busAddress: "Kalegana" },
    { busName: "Suvini Hansamali", busAddress: "Homagama" },
    { busName: "Rasika Dissanayake", busAddress: "Homagama" },
    { busName: "Amal Rathnayake", busAddress: "Homagama" },
  ]);

  return <PreferenceList rows={rows} />;
};

export default PrePrefList;
