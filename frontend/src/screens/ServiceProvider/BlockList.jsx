// import React from 'react'
import { useState } from "react"
import SPBlockList from "../../components/ServiceProvider/BlockList"

const BlockList = () => {

  const [ rows ] = useState ([
    {busName: "Araliya beach", busAddress: "Dehiwala Colombo"},
    {busName: "Dua sound and lights", busAddress: "Dehiwala Colombo"},
    {busName: "Mashi cakes", busAddress: "Dehiwala Colombo"},
    {busName: "Mashi cakes", busAddress: "Dehiwala Colombo"},
    {busName: "Mashi cakes", busAddress: "Dehiwala Colombo"},
    {busName: "Mashi cakes", busAddress: "Dehiwala Colombo"},
    {busName: "Mashi cakes", busAddress: "Dehiwala Colombo"},
    {busName: "Mashi cakes", busAddress: "Dehiwala Colombo"},
    {busName: "Mashi cakes", busAddress: "Dehiwala Colombo"}
  ]); 

  return (
      <SPBlockList rows={rows}/>
  )
}

export default BlockList