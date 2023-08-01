import React from 'react'
import Carousel from 'react-multi-carousel';
import CustomerEventCard from './CustomerEventCard';

const CusPreviousEvent = () => {

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
        {id:1,eventName:'Birthday', eventDescription:"A birthday is a special and joyous annual celebration that marks the day a person was born. It is a time when friends and family come together to honor and express their love, appreciation, and well-wishes for the individual whose birthday it is. People often celebrate with gifts, parties, cakes, and other festivities, making it a memorable occasion filled with happiness and good wishes for the year ahead.", img:"birthday5.jpg"},
        {id:2,eventName:'Anivesary', eventDescription:"An anniversary is a special occasion that commemorates a significant event or milestone, typically observed on the same date each year. It marks the passage of time since a noteworthy event, such as a wedding, the establishment of a business, or the beginning of a relationship. Anniversaries hold sentimental value, serving as a time for individuals or couples to celebrate their achievements, cherish memories, and reaffirm their commitment to one another. Whether it's a romantic celebration between partners or a commemoration shared with family and friends, anniversaries are a time for joy, reflection, and appreciation for the meaningful moments that have shaped lives and relationships.",img:"event1.png"},
        {id:3,eventName:'Birthday', eventDescription:"A birthday is a special day that marks the anniversary of a person's birth. It's a joyous occasion when individuals celebrate their life and the passing of another year. Birthdays are often celebrated with gatherings, parties, or intimate moments with loved ones. They involve various traditions like blowing out candles on a birthday cake, making a wish, and receiving presents or well-wishes. It's a time for reflection, gratitude, and excitement for the year ahead, as friends and family come together to honor and show appreciation for the individual's existence and presence in their lives.",img:"birthday2.jpg"},
        {id:4,eventName:'Birthday', eventDescription:"A birthday is a special and significant day that marks the anniversary of a person's birth. It's a time for celebration and appreciation of life, as well as an opportunity for friends and family to come together to honor and show love to the individual whose birthday it is. Traditionally, birthdays are celebrated with various customs, such as birthday cakes, candles, gifts, and well-wishes. It's a joyous occasion that allows people to reflect on the past year, set new goals for the future, and create lasting memories with the people they care about.",img:"birthday1.jpg"},
        {id:5,eventName:'Event', eventDescription:"hi",img:"celebration.jpg"},
        
  ];

  const eventCards =[];
  for (let i = 0; i < cuspendingEvent.length; i++) {
    const event= cuspendingEvent[i%cuspendingEvent.length]
    eventCards.push(<CustomerEventCard event={event} />)
    
  }
  return (
    
      <>
        <div className='pendingevent'>
            <h2>Previous Events</h2>
            <hr></hr>
            <Carousel showDots="true" responsive={responsive}>
                {eventCards}
            </Carousel>

        </div>
    
    </>

  )
}

export default CusPreviousEvent
