// import React from 'react'
import { useState } from 'react';
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
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repudiandae nisi sunt, quis error cumque tempore, recusandae illo ducimus dolor commodi non iste itaque soluta iusto laboriosam sint in cum?',
    },
    {
      id: 2,
      image: img2,
      title: 'Citrus Hikkaduwa',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repudiandae nisi sunt, quis error cumque tempore, recusandae illo ducimus dolor commodi non iste itaque soluta iusto laboriosam sint in cum?',
    },
    {
      id: 3,
      image: img3,
      title: 'Green Almond Hotel',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repudiandae nisi sunt, quis error cumque tempore, recusandae illo ducimus dolor commodi non iste itaque soluta iusto laboriosam sint in cum?',
    },
];
  
const descriptionReadStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
};

const OneType = () => {
    const [isOpen, setIsOpen] = useState(Array(blogData.length).fill(false));

    const handleToggleDescription = (index) => {
      const newOpenState = [...isOpen];
      newOpenState[index] = !newOpenState[index];
      setIsOpen(newOpenState);
    };
  
    return (
      <section id="blog" className="package_blogs">
        <Container fluid>
          <Row>
            {blogData.map((blog, index) => {
              const isCardOpen = isOpen[index];
              return (
                <Col sm={4} key={blog.id}>
                  <div className="pack_holder">
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text className="cardDescription" style={isCardOpen ? null : descriptionReadStyle}>
                          {blog.description}
                        </Card.Text>
                        <button
                          className="btn-btn-primary"
                          onClick={() => handleToggleDescription(index)}
                        >
                          {isCardOpen ? 'read less' : 'read more'}
                        </button>
                        <br />
                        <Link to={`/ServiceProvider/typePacklist`}>
                          <Button className="view_btn">View</Button>
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