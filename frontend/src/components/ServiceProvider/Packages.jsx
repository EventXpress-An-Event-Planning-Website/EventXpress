// import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/hotel.jpg';
import img2 from '../../assets/images/cake4.jpg';
import img3 from '../../assets/images/anniversary1.jpg';

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
    title: 'Fruit Cake',
    description:
      'Indulge your loved ones with our exquisite Fruit Delight Chocolate Gateau. This delectable treat is adorned with a generous assortment of mixed exotic fruits, beautifully layered within our moist and decadent chocolate sponge cake. Each layer is generously filled with a luscious combination of rich and creamy whipping cream. The gateau is elegantly covered with smooth chocolate butter icing and delicately decorated with a drizzle of delectable ganache. A true delight for fruit and chocolate lovers alike.',
  },
  {
    id: 3,
    image: img3,
    title: 'Green Almond Hotel',
    description:
      'Embellished with the charms of immaculate beaches, lush coconut groves, and stunning oceanic vistas from all its abodes, Unawatuna Beach Resort & Spa is a premier amongst Unawatuna hotels! Being the first star-class and five-star hotel in Unawatuna, the property is composed of a wide array of exclusive accommodation options, bars, restaurants, boutiques, and entertainment hubs making it an idyllic destination to experience pure tropical bliss!',
  }
];

const Packages = () => {
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
                      <Link to={`/ServiceProvider/packageFullDetails`}>
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
};

export default Packages;
