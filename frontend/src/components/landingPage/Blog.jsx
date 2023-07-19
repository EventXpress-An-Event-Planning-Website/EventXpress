import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import gardenImage from '../../assets/images/garden.jpg';
import celebrationImage from '../../assets/images/img3.jpg';
import cateringImage from '../../assets/images/catering3.jpg';



const Blog = () => {

    const blogData = [
        {
            id: 1,
            image: celebrationImage,
            time: '15 Nov 2016',
            title: 'The perfect design',
            description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
            link: 'https://www.google.com'
        },
        {
            id: 2,
            image: celebrationImage,
            time: '15 Nov 2016',
            title: 'The perfect design',
            description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
            link: 'https://www.google.com'
        },
        {
            id: 3,
            image: celebrationImage,
            time: '15 Nov 2016',
            title: 'The perfect design',
            description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
            link: 'https://www.google.com'
        }
    ]

    return (
        <section id='blog' className='blog-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Latest From Blog</h2>
                    <div className='subtitle'>get our latest news from blog</div>
                </div>

                <Row className='portfoliolist'>
                    {
                        blogData.map(blog => {
                            return (
                                <Col sm={4} key={blog.id}>
                                    <div className='hedding'>
                                        <Card>
                                            <Card.Img variant="top" src={blog.image} />
                                            <Card.Body>
                                                <time>{blog.time}</time>
                                                <Card.Title>{blog.title}</Card.Title>
                                                <Card.Text>{blog.description}</Card.Text>
                                                <a href={blog.link} className='btn btn-primary'>Read More<i className="fa-solid fa-angle-right"></i></a>
                                            </Card.Body>
                                        </Card>

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

export default Blog