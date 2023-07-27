import React from 'react'
import Carousel from 'react-multi-carousel';
import CustomerEventCard from './CustomerEventCard';

const CusPendingEvent = () => {

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
      const cuspendingEvent = [
            {id:1,eventName:'Event1', eventDescription:"An event description is a text or copy that tells audiences all the essential details about your event. These details should come together so that it compels potential attendees to register. But more than driving up attendance, a good event description can pique the interest of non-members and even the press."},
            {id:2,eventName:'Event', eventDescription:"hi"},
            {id:3,eventName:'Event', eventDescription:"hi"},
            {id:4,eventName:'Event', eventDescription:"hi"},
            {id:5,eventName:'Event', eventDescription:"hi"},
            {id:6,eventName:'Event', eventDescription:"hi"},
            {id:7,eventName:'Event', eventDescription:"hi"},
            {id:8,eventName:'Event', eventDescription:"hi"},
            {id:9,eventName:'Event', eventDescription:"hi"},
            {id:10,eventName:'Event', eventDescription:"hi"},
      ];

      const eventCards =[];
      for (let i = 0; i < 10; i++) {
        const event= cuspendingEvent[i%cuspendingEvent.length]
        eventCards.push(<CustomerEventCard event={event} />)
        
      }
  return (
    <>
        <div className='pendingevent'>
            <h2>Pending Events</h2>
            <hr></hr>
            <Carousel showDots="true" responsive={responsive}>
                {eventCards}
            </Carousel>

        </div>
    
    </>
  )
}



export default CusPendingEvent
