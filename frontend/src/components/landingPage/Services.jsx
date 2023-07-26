import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            icon: `fas fa-clone`,
            title: 'The perfect design for your website',
            description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
        },
        {
            id: 2,
            icon: `fas fa-clone`,
            title: 'Start your future financial plan',
            description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
        },
        {
            id: 3,
            icon: `fas fa-clone`,
            title: 'Enjoy the difference',
            description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
        },
        {
            id: 4,
            icon: `fas fa-clone`,
            title: 'Start your future financial plan',
            description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
        },
        {
            id: 5,
            icon: `fas fa-clone`,
            title: 'Start your future financial plan',
            description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
        },
        {
            id: 6,
            icon: `fas fa-clone`,
            title: 'Start your future financial plan',
            description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
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
                                    <h3>{services.title}</h3>
                                    <p>{services.description}</p>

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
