import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import img1 from '../../assets/images/img1.jpg'

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
          <Image src={img1}></Image>
        </Col>
        <Col sm={6}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
          </p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.
          </p>

        </Col>
      </Row>
    </Container>
  )
}

export default About
