import React from 'react'
import {Carousel,Button} from 'react-bootstrap';
import gardenImage from '../../assets/images/festival.png';
import celebrationImage from '../../assets/images/celebration.jpg';
import cateringImage from '../../assets/images/catering3.jpg';

const CusCrrousal = () => {
    const contentData = [
        {
          id: 1,
          image: gardenImage,
        },
        {
          id: 2,
          image: celebrationImage,
        },
        {
          id: 3,
          image: cateringImage,
        }
      ];
  return (

    <>
        
            <Carousel>
                {contentData.map((content) => (
                <Carousel.Item key={content.id}>
                <img
                    className="cus-img"
                    src={content.image}
                />
                </Carousel.Item>
                ))}
        
            </Carousel>
        </>
    )
}

export { CusCrrousal }
