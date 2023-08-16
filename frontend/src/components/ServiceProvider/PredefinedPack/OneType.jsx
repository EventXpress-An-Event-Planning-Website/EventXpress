// import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/hotel.jpg';
import img2 from '../../../assets/images/img4.jpg';
import img3 from '../../../assets/images/img5.avif';

const blogData = [
  {
    id: 1,
    image: img1,
    title: 'Araliya Beach Resort',
    description:
      'Embellished with the charms of immaculate beaches, lush coconut groves, and stunning oceanic vistas from all its abodes, Unawatuna Beach Resort & Spa is a premier amongst Unawatuna hotels! Being the first star-class and five-star hotel in Unawatuna, the property is composed of a wide array of exclusive accommodation options, bars, restaurants, boutiques, and entertainment hubs making it an idyllic destination to experience pure tropical bliss!',
  },
  {
    id: 2,
    image: img2,
    title: 'Citrus Hotel',
    description:
      'Embellished with the charms of immaculate beaches, lush coconut groves, and stunning oceanic vistas from all its abodes, Unawatuna Beach Resort & Spa is a premier amongst Unawatuna hotels! Being the first star-class and five-star hotel in Unawatuna, the property is composed of a wide array of exclusive accommodation options, bars, restaurants, boutiques, and entertainment hubs making it an idyllic destination to experience pure tropical bliss!',
  },
  {
    id: 3,
    image: img3,
    title: 'Green Almond Hotel',
    description:
      'Embellished with the charms of immaculate beaches, lush coconut groves, and stunning oceanic vistas from all its abodes, Unawatuna Beach Resort & Spa is a premier amongst Unawatuna hotels! Being the first star-class and five-star hotel in Unawatuna, the property is composed of a wide array of exclusive accommodation options, bars, restaurants, boutiques, and entertainment hubs making it an idyllic destination to experience pure tropical bliss!',
  }
];
  
const OneType = () => {
    return (
      <section id="blog" className="package_blogs">
        <Container fluid>
          <Row>
            {blogData.map((blog) => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className="pack_holder">
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text className="cardDescription" style={{ WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>
                          {blog.description}
                        </Card.Text>
                        <br />
                        <Link to={`/ServiceProvider/typePacklist`}>
                          <Button className="view_btn">Read More</Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
}

export default OneType