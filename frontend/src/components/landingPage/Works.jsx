import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.avif';
import img6 from '../../assets/images/img6.jpg';


const Works = () => {

    const worksData = [
        {
            id: 1,
            image: img1,
            title: 'Anniversary Celebration',
            subtitle: 'of Ryan and Roshell',
        },
        {
            id: 2,
            image: img2,
            title: 'DJ party',
            subtitle: 'at Fiestra',
        },
        {
            id: 3,
            image: img3,
            title: 'Anniversary Celebration',
            subtitle: 'of Buddika and Senali',
        },
        {
            id: 4,
            image: img4,
            title: 'Birthday Celebration',
            subtitle: 'of Diana Michell',
        },
        {
            id: 5,
            image: img5,
            title: 'Farewell',
            subtitle: 'of Mr.perera',
        },
        {
            id: 6,
            image: img6,
            title: 'DJ Night',
            subtitle: 'in Orchestraz',
        }
    ]

    //     let active = 2;
    // let items = [];
    // for (let number = 1; number <= 5; number++) {
    //   items.push(
    //     <Pagination.Item key={number} active={number === active}>
    //       {number}
    //     </Pagination.Item>,
    //   );
    // }


    return (
        <section id='works' className='block works-block'>

            <Container fluid>
                <div className='title-holder'>
                    <h2>Our Works</h2>
                    <div className='subtitle'>our awesome works</div>
                </div>

                <Row className='portfoliolist'>
                    {
                        worksData.map(works => {
                            return (
                                <Col sm={4} className='holder' key={works.id}>
                                    <div className='portfolio-wrapper'>
                                        <a href={works.link}>
                                            <Image src={works.image}></Image>
                                            <div className='label text-center'>
                                                <h3>{works.title}</h3>
                                                <h6>{works.subtitle}</h6>
                                            </div>
                                        </a>
                                    </div>

                                </Col>
                            )
                        })
                    }
                </Row>

            </Container>
        </section>
    )
}

export default Works
