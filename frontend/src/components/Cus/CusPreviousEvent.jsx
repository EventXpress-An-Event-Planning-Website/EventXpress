import React, { useState }  from 'react'
import Carousel from 'react-multi-carousel';
import CustomerEventCard from './CustomerEventCard';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';

const CusPreviousEvent = ({eventData}) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const [cusPreviousEvent, setCusPreviousEvent] = useState([]);
      const [cusPreviousPublicEvent, setCusPreviousPublicEvent] = useState([]);
      const currentDate = new Date();
      const currentDateString = currentDate.toISOString().split('T')[0];
      
      
  // Filter the eventData array to get events with event_maintype === 'Private'
  // and event_date is in the future
  useEffect(() => {
    if (eventData) {
      console.log(eventData);
      const filteredPrivateEvents = eventData.filter(
        (event) => event.event_maintype === 'Private' && new Date(event.event_date).toISOString().split('T')[0] < currentDateString
      );
      const filteredPublicEvents = eventData.filter(
        (event) => event.event_maintype === 'Public' && new Date(event.event_date).toISOString().split('T')[0] < currentDateString
      );
     

      const privateEvents = filteredPrivateEvents.map((event) => ({
        id: event.event_id,
        eventName: event.event_name,
        eventDescription: event.event_description,
        img: event.event_img,
        date: new Date(event.event_date).toISOString().split('T')[0]
      }));

      const publicEvents = filteredPublicEvents.map((event) => ({
        id: event.event_id,
        eventName: event.event_name,
        eventDescription: event.event_description,
        img: event.event_img,
        date:new Date(event.event_date).toISOString().split('T')[0]
      }));
      // console.log(privateEvents);
      // console.log(publicEvents);

      setCusPreviousEvent(privateEvents);
      setCusPreviousPublicEvent(publicEvents);
    }
  }, [eventData]);
  console.log(cusPreviousEvent);
  console.log(cusPreviousPublicEvent);
   

      const eventCards = cusPreviousEvent.map((event) => (
        <CustomerEventCard key={event.id} event={event} />
      ));
      const publicEventCards = cusPreviousPublicEvent.map((event1) => (
        <CustomerEventCard key={event1.id} event={event1} />
      ));

      // Add state to manage which carousel to display
  const [showPrivateEventCarousel, setShowPrivateEventCarousel] = useState(true);

  // Add useEffect to set the default carousel on component mount
  useEffect(() => {
    setShowPrivateEventCarousel(true);
  }, []);

  const handleShowPrivateEventCarousel = () => {
    setShowPrivateEventCarousel(true);
  };

  const handleShowPublicEventCarousel = () => {
    setShowPrivateEventCarousel(false);
  };
  return (
    <>
        <div className='pendingevent'>
          <div className='event-heading-container'>
              <h2 style={{ marginTop: '10px',marginLeft:'10px' }}>Completed Events</h2>
              <div className='private-and-public-btn-container'>
                <Button className={showPrivateEventCarousel ? 'privateEvent-btn active' : 'privateEvent-btn'} onClick={handleShowPrivateEventCarousel}>
                  Private Event
                </Button>
                <Button className={!showPrivateEventCarousel ? 'publicEvent-btn active' : 'publicEvent-btn'} onClick={handleShowPublicEventCarousel}>
                  Public Event
                </Button>
              </div>
            </div>
            <hr></hr>
            {showPrivateEventCarousel && cusPreviousEvent.length > 0 ? (
              <Carousel showDots responsive={responsive} className='privateEvent'>
                {eventCards}
              </Carousel>
            ) : (
            showPrivateEventCarousel && cusPreviousEvent.length === 0 && (
              <div className='no-events-message'>No private events available.</div>
            )
            )}
            {!showPrivateEventCarousel && cusPreviousPublicEvent.length > 0 ? (
              <Carousel showDots responsive={responsive} className='publicEvent'>
                {publicEventCards}
              </Carousel>
            ) : (!showPrivateEventCarousel &&cusPreviousPublicEvent.length === 0 && (
            <div className='no-events-message'>No public events available.</div>
              )
            )}
        </div>
    
    </>
  )
}



export default CusPreviousEvent
