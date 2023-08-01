import React from 'react'
import Carousel from 'react-multi-carousel';
import CustomerEventCard from './CustomerEventCard';

const CusOngoingEvent = () => {

    const cuspendingEvent = [
        {id:1,eventName:'Birthday', eventDescription:"A birthday is a special and joyous annual celebration that marks the day a person was born. It is a time when friends and family come together to honor and express their love, appreciation, and well-wishes for the individual whose birthday it is. People often celebrate with gifts, parties, cakes, and other festivities, making it a memorable occasion filled with happiness and good wishes for the year ahead.", img:"birthday8.jpg"}
        
  ];

  const eventCards =[];
  for (let i = 0; i < cuspendingEvent.length; i++) {
    const event= cuspendingEvent[i%cuspendingEvent.length]
    eventCards.push(<CustomerEventCard event={event} />)
    
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
  return (
    <div>
      <>
        <div className='pendingevent'>
            <h2>Ongoing Events</h2>
            <hr></hr>
            <Carousel showDots="true" responsive={responsive}>
                {eventCards}
            </Carousel>

        </div>
    
    </>
    </div>
  )
}

export default CusOngoingEvent
