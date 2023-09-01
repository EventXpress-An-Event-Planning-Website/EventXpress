// import React from 'react'
import { useState } from "react"
import AllList from "../../components/ServiceProvider/BlockPrefList/AllSPList"
import PrefBlock from "../../components/ServiceProvider/BlockPrefList/PrefBlock";
import SPSidebar from "../../components/ServiceProvider/SPSidebar"

const BlockList = () => {

  const [ rows ] = useState ([
    {busName: "Nimal Silva", busAddress: "Hikkaduwa"},
    {busName: "Wasana Sandamali", busAddress: "Peradeniya"},
    {busName: "Kamal Ekanayaka", busAddress: "Dehiwala"},
    {busName: "Amal Jayarathna", busAddress: "Galle"},
    {busName: "Suvini Hansamali", busAddress: "Homagama"}
  ]); 

  return (
    <div style={{ "display": "flex" }}>
      <div><SPSidebar /></div>
      <div style={{ "width": "80%", "marginLeft": "9%" }}>
        <PrefBlock rows={rows}/>
        <AllList rows={rows}/>
      </div>
      
    </div>
  )
}

export default BlockList