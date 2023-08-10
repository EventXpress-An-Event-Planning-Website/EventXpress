import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaServicestack } from 'react-icons/fa';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            icon: <FaServicestack/>,
            title: 'Create Your Own Event',
            description: 'Person who register as a customer can create hisown event through our system. He can get the services given by the service providers to create his event and can easily maintain it as a to-do list. Also customer can add the service that we do not have yet in our system and after going through that services we can add them for easiness of our future customers.',
        },
        {
            id: 2,
            icon: `fas fa-clone`,
            title: 'We Give Various Services',
            description: 'We give services like venue, catering, cakes, sound and lighning, stage rentals, decorations and photography for the prefered events for the customers who trust our platform and get register for now. In the near future we expand our services for the customers.',
        },
        {
            id: 3,
            icon: `fas fa-clone`,
            title: 'Buy Tickets',
            description: 'Customers who have registerd in our website, can buy tickects for the musical shows, concerts, dramas, exhibitions which published within our platform. Customer does not want prior knowledge of our system because we have easily navigatable user friendly interfaces. So, anyone can easily experience it.',
        },
        {
            id: 4,
            icon: `fas fa-clone`,
            title: 'Service providers Can Publish Their Services',
            description: 'A person who registered as a service provider can publish their services through our platform to the customers. Venue, catering, cakes, sound and lighning, stage rentals, decorations and photography are the services we accept for now but soon we decide to expand the varieties for the easiness of customers. ',
        },
        {
            id: 5,
            icon: `fas fa-clone`,
            title: 'Sell Tickets',
            description: 'Customer can create his own event like concert, musical show, exhibition or any kind of public event and sell tickects for others for hisown event. Any price range of tickets are acceptable in our platform.',
        },
        {
            id: 6,
            icon: `fas fa-clone`,
            title: 'Chat Option',
            description: 'If a customer choose some kind of service for hisown event, he can simply go through ther services which publish by various service providers and choose the preferred one. We give the chat facility for that customer to connect with the choosen service provider to get more detail about that service.',
        }
    ];

    return (
        <section id="services" className="block services-block">
            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Services</h2>
                    <div className='subtitle'>services we provide</div>
                </div>
                <Row>
                    {
                        serviceData.map(services => {
                            return (
                                <Col sm={4} className='holder' key={services.id}>
                                    <div className='icon'>
                                        <i className={services.icon}></i>
                                    </div>
                                    <h3 className='services-title'>{services.title}</h3>
                                    <p className='services-des'>{services.description}</p>

                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>


    );
};
export default Services
