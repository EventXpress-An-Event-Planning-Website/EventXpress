import React from 'react'
import {Carousel,Button} from 'react-bootstrap';
import gardenImage from '../../assets/images/festival.png';
import celebrationImage from '../../assets/images/celebration.jpg';
import cateringImage from '../../assets/images/catering3.jpg';
import eventCarrousal_1 from '../../assets/images/festival4.jpg'
import eventCarrousal_2 from '../../assets/images/festival5.jpg'
import eventCarrousal_3 from '../../assets/images/festival6.jpg';

const CreateEventCarrousal = () => {
  
    const contentData = [
        {
          id: 1,
          image: eventCarrousal_2,
        },
        {
          id: 2,
          image: eventCarrousal_3,
        },
        {
          id: 3,
          image: eventCarrousal_1,
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
