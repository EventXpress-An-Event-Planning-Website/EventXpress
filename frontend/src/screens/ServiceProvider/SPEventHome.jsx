// import React from 'react'
import SPEventHomeHeader from "../../components/ServiceProvider/SPEvent/SPEventHomeHeader"
import SPEventTrend from "../../components/ServiceProvider/SPEvent/SPEventTrend"
import SPEventLink from "../../components/ServiceProvider/SPEvent/SPEventLink"
import SPEvents from "../../components/ServiceProvider/SPEvent/SPEvents"
import HomeFooter from "../../components/ServiceProvider/SPHome/HomeFooter"

const SPEventHome = () => {
  return (
    <>
      <SPEventHomeHeader />
      <SPEventTrend />
      <SPEventLink />
      <SPEvents />
      <HomeFooter />
    </>
  )
}

export default SPEventHome