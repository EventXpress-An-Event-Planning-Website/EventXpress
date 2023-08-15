import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact Us</h2>
                    <div className='subtitle'>get connected with us</div>
                </div>
            </Container>


            <Container>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className="fas fa-envelope"></i>
                            hello@domain.com
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            011-123-4567
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            London, United Kingdom
                        </li>

                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Contact