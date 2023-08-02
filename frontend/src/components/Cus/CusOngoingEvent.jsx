import React, { useState }  from 'react'
import Carousel from 'react-multi-carousel';
import CustomerEventCard from './CustomerEventCard';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';

const CusOngoingEvent = () => {

    const cuspendingEvent = [
        {id:1,eventName:'Birthday',date:'2023-08-02', eventDescription:"A birthday is a special and joyous annual celebration that marks the day a person was born. It is a time when friends and family come together to honor and express their love, appreciation, and well-wishes for the individual whose birthday it is. People often celebrate with gifts, parties, cakes, and other festivities, making it a memorable occasion filled with happiness and good wishes for the year ahead.", img:"birthday8.jpg"}
        
  ];
  const cuspendingPublicEvent = [
    {id:1,eventName:'Raja Kapuru',date:'2023-08-02', eventDescription:"A birthday is a special and joyous annual celebration that marks the day a person was born. It is a time when friends and family come together to honor and express their love, appreciation, and well-wishes for the individual whose birthday it is. People often celebrate with gifts, parties, cakes, and other festivities, making it a memorable occasion filled with happiness and good wishes for the year ahead.", img:"show6.jpg"}
    
];
  const eventCards =[];
  for (let i = 0; i < cuspendingEvent.length; i++) {
    const event= cuspendingEvent[i%cuspendingEvent.length]
    eventCards.push(<CustomerEventCard event={event} />)
    
  }
  const publicEventCards =[];
  for (let i = 0; i < cuspendingPublicEvent.length; i++) {
    const event1= cuspendingPublicEvent[i%cuspendingPublicEvent.length]
    publicEventCards.push(<CustomerEventCard event={event1} />)
    
  }


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
    <div>
      <>
        <div className='pendingevent'>
          <div className='event-heading-container'>
            <h2 style={{ marginTop: '10px',marginLeft:'10px' }}>Ongoing Events</h2>
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
          {showPrivateEventCarousel && cuspendingEvent.length > 0 ? (
              <Carousel showDots responsive={responsive} className='privateEvent'>
                {eventCards}
              </Carousel>
            ) : (
            showPrivateEventCarousel && cuspendingEvent.length === 0 && (
              <div className='no-events-message'>No private events available.</div>
            )
            )}
            {!showPrivateEventCarousel && cuspendingPublicEvent.length > 0 ? (
              <Carousel showDots responsive={responsive} className='publicEvent'>
                {publicEventCards}
              </Carousel>
            ) : (!showPrivateEventCarousel &&cuspendingPublicEvent.length === 0 && (
            <div className='no-events-message'>No public events available.</div>
              )
            )}

        </div>
    
    </>
    </div>
  )
}

export default CusOngoingEvent
