import { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row, InputGroup, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Packages = () => {
  
  const userId = localStorage.getItem('userInfo')
  const user = JSON.parse(userId);
  const id = user.id

  const [search, setSearch] = useState('');
  const [packagedata, setpackagedata] = useState([]);

  useEffect(() => {
    // Make a GET request when the component mounts
    axios
      .get(`/api/serviceProvider/getAllPackages?id=${id}`)
      .then((response) => {
        setpackagedata(response.data.PackDetails);
      })
      .catch((error) => {
        console.error('Error fetching packages:', error);
      });
  }, [id]);

  // Function to filter packages based on search input
  const filteredPackages = packagedata.filter((packageItem) => {
    const searchRegex = new RegExp(search, 'i'); // Case-insensitive search
    return (
      searchRegex.test(packageItem.package_busname) ||
      searchRegex.test(packageItem.package_title) ||
      searchRegex.test(packageItem.package_description)
    );
  });

  const navigate = useNavigate()
  const handleBtnClick = (package_id) => {
    navigate(`/ServiceProvider/packageFullDetails?id=${package_id}`);
  }

  return (
    <section id="package" className="package_blogs">
      <InputGroup className="search-header">
        <Form.Control
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search here"
          className="search-text"
        />
      </InputGroup>

      <Container fluid>
        <Row className='packFull_container'>
        {filteredPackages.length === 0 ? 
          ( // Check if there are no packages
            <div>No packages available</div>
          ) : (
            filteredPackages.map((packageItem) => {
              const editedImg = `../src/assets/images/uploads/${packageItem.sp_images}`;
              return (
                <Col sm={4} key={packageItem.package_id} className='packCard_container'>
                  <div className="pack_holder">
                    <Card>
                      <Card.Img variant="top" src={editedImg} />
                      <Card.Body>
                        <Card.Title style={{ fontWeight: 'bold' }}>{packageItem.package_busname}</Card.Title>
                        <Card.Title>{packageItem.package_title}</Card.Title>
                        <Card.Text className="cardDescription" style={{ WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>
                          {packageItem.package_description}
                        </Card.Text>
                        <br />
                        <Button onClick={()=>handleBtnClick(packageItem.package_id)}>View More</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })
          )
        }
        </Row>
      </Container>
    </section>
  );
};

export default Packages;
