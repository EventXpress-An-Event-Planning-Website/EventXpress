// import React from 'react'
import { Button } from "react-bootstrap"

const SPEventLink = () => {
  return (
    <section className="event_filter_section">
        <Button className="eventfilter_btn">All</Button> 
        <Button className="eventfilter_btn">Drama/Theater</Button>
        <Button className="eventfilter_btn">Movie</Button>
        <Button className="eventfilter_btn">Sports</Button>
        <Button className="eventfilter_btn">Concert/Shows</Button>
        <Button className="eventfilter_btn">Exhibiion</Button>
    </section>
    
  )
}

export default SPEventLink