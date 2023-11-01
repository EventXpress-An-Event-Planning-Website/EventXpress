import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../../assets/images/tickets/t1.jpg'
import image2 from '../../assets/images/tickets/t2.jpg'
import image3 from '../../assets/images/tickets/t3.jpg'
import image4 from '../../assets/images/tickets/t4.jpg'
import image5 from '../../assets/images/tickets/t5.jpg'
import image6 from '../../assets/images/tickets/t6.jpg'
import image7 from '../../assets/images/tickets/t7.jpg'
import image8 from '../../assets/images/tickets/t8.jpg'
import axios from 'axios'
const TicketCarousel = () => {
  const [ticketImages, setTicketImages] = useState([]);

  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get('/api/tickets/getTrendingTickets')
      .then((response) => {
        // Update the state with the fetched data
        setTicketImages(response.data.getTicketResponse);
      })
      .catch((error) => {
        console.error('Error fetching tickets:', error);
      });
  }, []);

  const updatedImages = ticketImages.map(item => {
    return { eventposter: `../../src/assets/images/uploads/${item.eventposter}` };
  });

  console.log(updatedImages);

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
