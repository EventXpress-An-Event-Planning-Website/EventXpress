import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        })
    })

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        // <section id='testimonials' className='footer-block'>
        <footer className="footer">
            <Container className="container">
                <Row class="row">
                    <Col lg={4} className="footer-col">
                        <h4>About</h4>
                        <ul>
                            <li><a href="/ezvote/Pages/aboutUs">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                        </ul>
                    </Col>
                    <Col lg={4} className="footer-col">
                        <h4>My Account</h4>
                        <ul>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </Col>
                    {/* <Col md={4} className="footer-col">
                        <h4>Products & Features</h4>
                        <ul>
                            <li><a href="#">Meetings</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                        </Col> */}

                    <Col lg={4} className="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </Col>

                </Row>
            </Container>



            <Container fluid>
                <div className='copyright'>© 2022 EventXpress. All Right Reserved.</div>
                {
                    showTopBtn && (<div className='go-top' onClick={goTop}></div>)
                }
            </Container>
        </footer>
        // </section>
    )
}

export default Footer