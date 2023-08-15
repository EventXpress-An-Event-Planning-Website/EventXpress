import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/aboutUs2.jpg'
import img3 from '../../assets/images/aboutUs3.jpg'


const About = () => {
  const html = 80;
  const response = 95;
  const photoshop = 60;

  return (
    <Container fluid>
      <div id='about' className='title-holder'>
        <h2>About Us</h2>
        <div className='subtitle'>learn more about us</div>
      </div>
      <Row>       
        <Col sm={6}>
          <p>EventXpress was created with the intention of turning any dream event into a reality that goes above and beyond expectations.
          </p>

          <p>No event is too small or large for us and we make sure that every last detail is taken care of because our focus has always been on ensuring the highest levels of quality, safety, and dependability. These events range from small get-togethers to Anniversary celebrations.
          </p>

          <p>Speak with our knowledgeable, devoted, and motivated team about your upcoming event right away!
          </p>

        </Col>

        <Col sm={6}>
          {/* <Image src={img1}></Image> */}
          <CardGroup>
      <Card className=''>
        <Card.Img src={img3} className='about-img1'/>
      </Card>
      {/* <Card>
        <Card.Img src={img3}/>
      </Card> */}
      {/* <Card>
        <Card.Img src={img1} className='about-img1'/>
      </Card>
      <Card>
        <Card.Img src={img1} className='about-img2'/>
      </Card> */}
    </CardGroup>
        </Col>

      </Row>
    </Container>
  )
}

export default About
