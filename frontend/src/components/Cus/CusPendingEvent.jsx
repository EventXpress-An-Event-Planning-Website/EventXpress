import React, { useState }  from 'react'
import Carousel from 'react-multi-carousel';
import CustomerEventCard from './CustomerEventCard';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';

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
        {id:1,eventName:'Birthday',date:'2023-09-05', eventDescription:"A birthday is a special and joyous annual celebration that marks the day a person was born. It is a time when friends and family come together to honor and express their love, appreciation, and well-wishes for the individual whose birthday it is. People often celebrate with gifts, parties, cakes, and other festivities, making it a memorable occasion filled with happiness and good wishes for the year ahead.", img:"birthday8.jpg"},
        {id:2,eventName:'Birthday',date:'2023-09-20', eventDescription:"A birthday is a special day that marks the anniversary of a person's birth. It's a joyous occasion when individuals celebrate their life and the passing of another year. Birthdays are often celebrated with gatherings, parties, or intimate moments with loved ones. They involve various traditions like blowing out candles on a birthday cake, making a wish, and receiving presents or well-wishes. It's a time for reflection, gratitude, and excitement for the year ahead, as friends and family come together to honor and show appreciation for the individual's existence and presence in their lives.",img:"birthday7.jpg"},
        {id:3,eventName:'Bright to be',date:'2023-10-08', eventDescription:"A bright to be party is a unique and exciting concept where friends and family come together to celebrate the impending arrival of a baby. It's a joyful occasion filled with anticipation and happiness for the parents-to-be as they prepare to welcome their little one into the world. The party is often characterized by vibrant and cheerful decorations, reflecting the brightness that a new life brings. Guests typically offer gifts for the baby and the parents, and the event is a time for loved ones to share in the excitement and offer their support and well-wishes for the growing family.",img:"event3.png"},
        {id:4,eventName:'Anivesary',date:'2023-10-22', eventDescription:"An anniversary is a special occasion that commemorates a significant event or milestone, typically observed on the same date each year. It marks the passage of time since a noteworthy event, such as a wedding, the establishment of a business, or the beginning of a relationship. Anniversaries hold sentimental value, serving as a time for individuals or couples to celebrate their achievements, cherish memories, and reaffirm their commitment to one another. Whether it's a romantic celebration between partners or a commemoration shared with family and friends, anniversaries are a time for joy, reflection, and appreciation for the meaningful moments that have shaped lives and relationships.",img:"event1.png"},
        {id:5,eventName:'Event',date:'2023-11-01', eventDescription:"hi",img:"celebration.jpg"},
        {id:6,eventName:'Event',date:'2023-11-08', eventDescription:"hi",img:"celebration.jpg"},
        {id:7,eventName:'Event',date:'2023-11-18', eventDescription:"hi",img:"celebration.jpg"},
        {id:8,eventName:'Event',date:'2023-11-24', eventDescription:"hi",img:"celebration.jpg"},
      ];

      const cuspendingPublicEvent = [
        {id:1,eventName:'ACE HOOD', eventDescription:"A ACE HOOD is a special and joyous annual celebration that marks the day a person was musician. It is a time when friends and family come together to honor and express their love, appreciation, and well-wishes for the individual whose birthday it is. People often celebrate with gifts, parties, cakes, and other festivities, making it a memorable occasion filled with happiness and good wishes for the year ahead.", img:"show4.jpg"}
        
      ];

      const eventCards = cuspendingEvent.map((event) => (
        <CustomerEventCard key={event.id} event={event} />
      ));
      const publicEventCards = cuspendingPublicEvent.map((event1) => (
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
              <h2 style={{ marginTop: '10px',marginLeft:'10px' }}>Pending Events</h2>
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
  )
}



export default CusPendingEvent
