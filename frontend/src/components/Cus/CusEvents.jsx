// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import gardenImage from '../../assets/images/garden.jpg';
import celebrationImage from '../../assets/images/celebration.jpg';
import cateringImage from '../../assets/images/catering.jpg';
import catering2Image from '../../assets/images/catering3.jpg';
import catering3Image from '../../assets/images/catering2.jpg';
import event1 from '../../assets/images/event1.png';
import event2 from '../../assets/images/event2.png';
import event3 from '../../assets/images/event3.png';
import event4 from '../../assets/images/event4.png';
import event5 from '../../assets/images/event5.png';
import event6 from '../../assets/images/event6.png';
import event7 from '../../assets/images/event7.png';
import Social8 from '../../assets/images/Social8.jpg';

const CusEvents = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
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

    const eventsData = [
        {
            id: 1,
            image: event1,
            title: 'Anniversary',
            path: '/Anniversary'
        },
        {
            id: 2,
            image: event4,
            title: 'Birthday Celebration',
            path: '/Birthday'
        },
        {
            id: 3,
            image: event3,
            title: 'Bride to be',
            path: '/BrideTobe'
        },
        {
            id: 4,
            image: Social8,
            title: 'Social Events',
            path: '/Social'
        },
        {
            id: 5,
            image: event5,
            title: 'Concert',
            path: '/Birthday'
        },
        {
            id: 6,
            image: event6,
            title: 'Christmas Celebration',
            path: '/Birthday'
        },
        {
            id: 7,
            image: event2,
            title: 'Graduation',
            path: '/Birthday'
        }
    ];

    return (

        <div className='block cus-event'>
            <h3>Need a help to plan your Event?</h3>
            <p>Choose a budget friendly package to your event</p>

            <Carousel showDots={true} responsive={responsive} className='cus-event-dots'>
                {eventsData.map((event) => (

                    <Card style={{ width: '15rem' }}>
                        <Link to={event.path}>
                        <img src={event.image} className='event-img' fluid />
                        </Link>
                        {/* <Card.Body> */}
                        <p>{event.title}</p>
                        {/* </Card.Body> */}
                    </Card>


                ))}
            </Carousel>
        </div>


    )
};

export default CusEvents;
