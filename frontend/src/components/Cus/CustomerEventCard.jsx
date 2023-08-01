import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const CustomerEventCard = ({event}) => {
  console.log({event});


    const navigate = useNavigate()
  const handleButtonClick = ()=>{
    navigate('/customer/eventdetails');
  }

  const MAX_WORDS = 15;
  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length <= maxWords) {
      return text;
    } else {
      return words.slice(0, maxWords).join(' ') +' see more...';
    }
  };

  const truncatedDescription = truncateText(event.eventDescription, MAX_WORDS);

  
  return (
    <>
        
        <Card style={{ width: '18rem'}} className='customerEventCardcon'>
        <Card.Img variant="top" src={`../../src/assets/images/${event.img}`} className='event-card-image'/>
        <Card.Body>
            <Card.Title>{event.eventName}</Card.Title>
            
            <Card.Text>
             {truncatedDescription}
            </Card.Text>
            <Button variant="primary" onClick={handleButtonClick}>More Datails</Button>
        </Card.Body>
        </Card>
 
    </>
  )
}

export default CustomerEventCard
