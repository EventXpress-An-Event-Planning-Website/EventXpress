import React from 'react'
import {Carousel,Button} from 'react-bootstrap';
import gardenImage from '../../assets/images/festival.png';
import celebrationImage from '../../assets/images/celebration.jpg';
import cateringImage from '../../assets/images/catering3.jpg';
import eventCarrousal from '../../assets/images/eventCarousal1.jpg'
import eventCarrousal2 from '../../assets/images/eventCarousal2.jpg'

const CreateEventCarrousal = () => {
  
    const contentData = [
        {
          id: 1,
          image: celebrationImage,
        },
        {
          id: 2,
          image: eventCarrousal2,
        },
        {
          id: 3,
          image: eventCarrousal,
        }
      ];
  return (

    <>
        
            <Carousel>
                {contentData.map((content) => (
                <Carousel.Item key={content.id}>
                <img
                    className="cus-event-img"
                    src={content.image}
                />
                </Carousel.Item>
                ))}
        
            </Carousel>
        </>
    )
  
}

export default CreateEventCarrousal
