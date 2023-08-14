// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-multi-carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
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
// import service1 from '../../assets/images/service1.png';
// import service2 from '../../assets/images/service2.png';
// import service3 from '../../assets/images/service3.png';
// import service4 from '../../assets/images/service4.png';
// import service5 from '../../assets/images/service5.png';
// import service6 from '../../assets/images/service6.png';
// import service7 from '../../assets/images/service7.png';
// import service8 from '../../assets/images/service8.png';
import ticket1 from '../../assets/images/ticket1.png';
import venue7 from '../../assets/images/venue7.jpg';
import catering4 from '../../assets/images/catering-4.webp';
import deco1 from '../../assets/images/deco1.jpg';
import photo8 from '../../assets/images/photo8.jpg';
import cake7 from '../../assets/images/cake7.jpg';
import sound6 from '../../assets/images/sound6.jpg';
import stage1 from '../../assets/images/stage1.png';
import stage7 from '../../assets/images/stage7.png';

const CusServices = () => {

    const worksData = [
        {
            id: 1,
            link: '/Venue',
            image: venue7,
            title: 'Venue',
        },
        {
            id: 2,
            link: '/Catering',
            image: catering4,
            title: 'Catering',
        },
        {
            id: 3,
            link: '/Decoration',
            image: deco1,
            title: 'Decoration',
        },
        {
            id: 4,
            link: '/Photography',
            image: photo8,
            title: 'Photography',
        },
        {
            id: 5,
            link: '/Cake',
            image: cake7,
            title: 'Cake',
        },
        {
            id: 6,
            link: '/StageRentals',
            image: stage1,
            title: 'Stage Rentals',
        },
        {
            id: 7,
            link: '/SoundAndLight',
            image: sound6,
            title: 'Sound and Light',
        },
        {
            id: 8,
            link: '/StageRentals',
            image: stage7,
            title: 'Tents for Rent',
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
                    <Link to={`/customer/buyTickets`}>
                    <button className='cusServices-ticket-btn'>Buy Tickets</button>
                    </Link>
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
