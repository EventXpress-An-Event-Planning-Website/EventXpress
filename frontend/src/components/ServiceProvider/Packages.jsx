import { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import img1 from '../../assets/images/hotel.jpg';
// import img2 from '../../assets/images/cake4.jpg';
// import img3 from '../../assets/images/anniversary1.jpg';

// const blogData = [
//   {
//     id: 1,
//     image: img1,
//     title: 'Araliya Beach Resort',
//     description:
//       'Embellished with the charms of immaculate beaches, lush coconut groves, and stunning oceanic vistas from all its abodes, Unawatuna Beach Resort & Spa is a premier amongst Unawatuna hotels! Being the first star-class and five-star hotel in Unawatuna, the property is composed of a wide array of exclusive accommodation options, bars, restaurants, boutiques, and entertainment hubs making it an idyllic destination to experience pure tropical bliss!',
//   },
//   {
//     id: 2,
//     image: img2,
//     title: 'Fruit Cake',
//     description:
//       'Indulge your loved ones with our exquisite Fruit Delight Chocolate Gateau. This delectable treat is adorned with a generous assortment of mixed exotic fruits, beautifully layered within our moist and decadent chocolate sponge cake. Each layer is generously filled with a luscious combination of rich and creamy whipping cream. The gateau is elegantly covered with smooth chocolate butter icing and delicately decorated with a drizzle of delectable ganache. A true delight for fruit and chocolate lovers alike.',
//   },
//   {
//     id: 3,
//     image: img3,
//     title: 'Green Almond Hotel',
//     description:
//       'Embellished with the charms of immaculate beaches, lush coconut groves, and stunning oceanic vistas from all its abodes, Unawatuna Beach Resort & Spa is a premier amongst Unawatuna hotels! Being the first star-class and five-star hotel in Unawatuna, the property is composed of a wide array of exclusive accommodation options, bars, restaurants, boutiques, and entertainment hubs making it an idyllic destination to experience pure tropical bliss!',
//   }
// ];


const Packages = () => {

  const [cakedata, setcakedata] = useState([]);
  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get('/api/serviceProvider/getAllCakePackages')
      .then((response) => {
        console.log(response.data.CakePackDetails);
        // Update the state with the fetched data
        // console.log(response.data.getAllTicketsResponse);
        setcakedata(response.data.CakePackDetails);
      })
      .catch((error) => {
        console.error('Error fetching tickets:', error);
      });
  }, []);

  return (
    <section id="package" className="package_blogs">
      <Container fluid>
        <Row>
          {cakedata.map((packages) => {
            const edditedImg = `../src/assets/images/uploads//${packages.sp_images}`
            return (
              <Col sm={4} key={packages.package_id}>
                <div className="pack_holder">
                  <Card>
                    <Card.Img variant="top" src={edditedImg} />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: 'bold' }}>{packages.package_busname}</Card.Title>
                      <Card.Title>{packages.package_title}</Card.Title>
                      <Card.Text className="cardDescription" style={{ WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>
                        {packages.package_description}
                      </Card.Text>
                      <br />
                      <Link to={`/ServiceProvider/packageFullDetails`}>
                        <Button>View More</Button>
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
