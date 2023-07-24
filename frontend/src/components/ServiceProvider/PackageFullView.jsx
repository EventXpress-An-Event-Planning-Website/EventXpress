// import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import mainImage from '../../assets/images/hotel.jpg'

const blogData = [
    {
        id: 1,
        location: 'Dehiwala',
        title: 'Araliya Beach Resort',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repudiandae nisi sunt, quis error cumque tempore, recusandae illo ducimus dolor commodi non iste itaque soluta iusto laboriosam sint in cum?',
        link: 'https://www.google.com'
    }
]

const PackageFullView = () => {
  return (
    <section id="main_content" className="main_content">
        <Container fluid>
            <Row>
                <Col><img src={mainImage}/></Col>

                <Col sm={6}>
                {blogData.map((blog) => {
                    return (
                        <Col sm={4} key={blog.id}>
                            <div>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{blog.title}</Card.Title><br></br>
                                        <Card.Subtitle>{blog.location}</Card.Subtitle>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    )
                })}
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default PackageFullView