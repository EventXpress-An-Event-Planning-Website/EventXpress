import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import people1 from '../../assets/images/people2.avif';
import people2 from '../../assets/images/people1.jpg';
import people3 from '../../assets/images/people3.jpg';

const Reviews = () => {

  const ReviewsData = [
    {
      id: 1,
      name: 'John Wills',
      image: people1,
      description: 'Thank you for the outstanding work of the EventXpress. We had a wonderful time and could not imagine pulling off our meeting without the guidance of your platform. Simply put, they exceeded all our expectations and could not have been more patient on the requests we made of them over the past few months.',
      // designation: 'Manager'
    },
    {
      id: 2,
      name: 'Mary Fernando',
      image: people2,
      description: 'Supplier procurement, Ease of Use, Budget management, and Exhibition management are the topmost factors that positively impact user satisfaction for Event Management Platforms products. EventXpress is highly accomplished these needs for my anniversary celebration. Highly reccomend EventXpress platform',
      // designation: 'Manager'
    },
    {
      id: 3,
      name: 'John Wills',
      image: people3,
      description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
      // designation: 'Manager'
    },
    // {
    //     id: 4,
    //     name: 'Kavi Nimeshi',
    //     description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
    //     designation: 'Executive Officer'
    // }
  ]
  return (
    <section id='testimonials' className='testimonials-block'>
      <Container fluid>
        <div className='title-holder'>
          <h2>CLIENT TESTIMONIALS</h2>
          <div className='subtitle'>what client says about us</div>
        </div>
        <Carousel
          controls={false}
          indicators={false}
          interval={null}
          slide={true}
          touch={true}
        >
          <Carousel.Item>
            <Row>
              {ReviewsData.map((review) => (
                <Col key={review.id}>
                  <Card>
                    <Card.Body>
                      <Image xs={6} src={review.image} roundedCircle className='testimonials-img'></Image>
                      <Card.Text>{review.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <div className='name'>{review.name}</div>
                      <div className='designation'>{review.designation}</div>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>


      </Container>
    </section>
  )
}

export default Reviews