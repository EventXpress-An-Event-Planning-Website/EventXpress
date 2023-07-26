// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-multi-carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import gardenImage from '../../assets/images/garden.jpg';
import celebrationImage from '../../assets/images/celebration.jpg';
import cateringImage from '../../assets/images/catering.jpg';
import catering2Image from '../../assets/images/catering3.jpg';
import catering3Image from '../../assets/images/catering2.jpg';
import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.avif';
import img6 from '../../assets/images/img6.jpg';
import service1 from '../../assets/images/service1.png';
import service2 from '../../assets/images/service2.png';
import service3 from '../../assets/images/service3.png';
import service4 from '../../assets/images/service4.png';
import service5 from '../../assets/images/service5.png';
import service6 from '../../assets/images/service6.png';
import service7 from '../../assets/images/service7.png';
import service8 from '../../assets/images/service8.png';
import ticket1 from '../../assets/images/ticket1.png';

const CusServices = () => {

    const worksData = [
        {
            id: 1,
            link: 'https://www.google.com',
            image: service1,
            title: 'The perfect design',
        },
        {
            id: 2,
            link: 'https://www.google.com',
            image: service2,
            title: 'The perfect design',
        },
        {
            id: 3,
            link: 'https://www.google.com',
            image: service3,
            title: 'The perfect design',
        },
        {
            id: 4,
            link: 'https://www.google.com',
            image: service4,
            title: 'The perfect design',
        },
        {
            id: 5,
            link: 'https://www.google.com',
            image: service5,
            title: 'The perfect design',
        },
        {
            id: 6,
            link: 'https://www.google.com',
            image: service6,
            title: 'The perfect design',
        }
        ,
        {
            id: 7,
            link: 'https://www.google.com',
            image: service7,
            title: 'The perfect design',
        },
        {
            id: 8,
            link: 'https://www.google.com',
            image: service8,
            title: 'The perfect design',
        }
    ]

    return (
        // <div className='cusServices-block'>
        <section id='works' className='block works-block cusServices-block'>

            <Container fluid className='aaa'>
                <div className='cusServices-title'>
                    <h2>Our Services</h2>
                </div>

                <Row className='portfoliolist'>
                    {
                        worksData.map(works => {
                            return (
                                <Col md={3} className='holder' key={works.id}>
                                    <div className='portfolio-wrapper'>
                                        <a href={works.link}>
                                            <Image src={works.image} className='cusServices-imgs'></Image>
                                            <div className='label text-center'>
                                                <h3>{works.title}</h3>
                                            </div>
                                        </a>
                                    </div>

                                </Col>
                            )
                        })
                    }
                </Row>

            </Container>

            {/* <Container fluid>
                    <div className='cusServices-title'>
                        <h2>Our Services</h2>
                    </div> */}


            <div className='cusServices-parent'>

                <div className='cusServices-ticket-des'>
                    BuY tiCkeTs<br />
                    To WaTCh <br />
                    youR<br />
                    favOrIte<br />
                    showS<br />
                    <button className='cusServices-ticket-btn'>Buy Tickets</button>
                </div>
                <div className='cusServices-ticket'>
                    <Image src={ticket1}></Image>
                </div>

            </div>

            {/* <Row>
        <Col>
        <Image src={ticket1}></Image>
        </Col>
        <Col>
        <div className='cusServices-ticket'>
            <pre>
            BuY tiCkeTs
            To WaTCh 
            youR 
            favOrIte
            showS
            </pre>
        </div>
        </Col>
      </Row> */}

            {/* </Container> */}
        </section>
        // </div>
    )
}



export default CusServices;
