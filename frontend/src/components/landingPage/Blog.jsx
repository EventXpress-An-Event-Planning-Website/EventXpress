import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import celebrationImage from '../../assets/images/img3.jpg';
import photo7 from '../../assets/images/photo7.jpg';
import venue8 from '../../assets/images/venue8.jpg';
import { id } from 'date-fns/locale';

const Blog = () => {

    const blogData = [
        {
            id: 1,
            image: photo7,
            time: '15 Nov 2022',
            title: 'How to choose a perfect photographer',
            description: 'Every photographer has a different style. Are you looking for more candid, photo-journalistic images? Or do you want posed portraits? Maybe you have your heart set on natural light photos...',
            link: ``
        },
        {
            id: 2,
            image: celebrationImage,
            time: '10 Apr 2020',
            title: 'How to choose a perfect Decorations',
            description: 'Decorative accessories can be used to add contrast in rooms filled with neutrals, for instance – pops of color throughout the spaces offer visual interest. You should also...',
            link: 'https://www.google.com'
        },
        {
            id: 3,
            image: venue8,
            time: '05 Des 2019',
            title: 'How to choose a perfect Venue',
            description: 'When organizing an event, you are confronted with many decisions, but choosing the right venue and location is the one decision that will have the largest impact on your event. Everything...',
            link: 'https://www.google.com'
        }
    ]

    return (
        <section id='blog' className='blog-block w-100'>
            <Container fluid >
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
                                                <time className='blog-date'>{blog.time}</time>
                                                <Card.Title className='blog-title'>{blog.title}</Card.Title>
                                                <Card.Text className='blog-des'>{blog.description}</Card.Text>
                                                <a href={`/viewBlogs?id=${blog.id}`} className='button button-primary blog-read-more'>Read More<i className="fa-solid fa-angle-right"></i></a>
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