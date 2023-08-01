import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../../assets/images/tickets/CT-NEW-EVENT.jpg'
import image2 from '../../assets/images/tickets/event-new-api-hamuwemuda.jpg'
import image3 from '../../assets/images/tickets/Eventstalk-2023 -NEW-Event-Banner.jpg'
import image4 from '../../assets/images/tickets/kapthuru-gee-event-01.jpg'
import image5 from '../../assets/images/tickets/legends-new-event-banner.jpg'
import image6 from '../../assets/images/tickets/MA-NOWANA-MAMA11.png'
import image7 from '../../assets/images/tickets/Marians-teaser.jpg'
import image8 from '../../assets/images/tickets/sankranthi-event-new.jpg'
const TicketCarousel = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ]
  return (
    <Carousel fade>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default TicketCarousel
