// import React from 'react'
import { useState } from "react"
import AllList from "../../components/ServiceProvider/BlockPrefList/AllSPList"
import PrefBlock from "../../components/ServiceProvider/BlockPrefList/PrefBlock";
import SPSidebar from "../../components/ServiceProvider/SPSidebar"

const BlockList = () => {

  const [ rows ] = useState ([
    {busName: "Araliya beach", busAddress: "Hikkaduwa"},
    {busName: "Dua sound and lights", busAddress: "Galaha Kandy"},
    {busName: "Mashi cakes", busAddress: "Dehiwala Colombo"},
    {busName: "Amal catering service", busAddress: "Kalegana Galle"},
    {busName: "Suvini decorations", busAddress: "Homagama"}
  ]); 

  return (
    <div style={{ "display": "flex" }}>
      <div><SPSidebar /></div>
      <div style={{ "width": "80%" }}>
        <PrefBlock rows={rows}/>
        <AllList rows={rows}/>
      </div>
      
    </div>
  )
}

export default BlockList