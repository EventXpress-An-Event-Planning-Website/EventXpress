import Hero from '../components/Hero'
import Content from '../components/landingPage/Content'
import Services from '../components/landingPage/Services'
import About from '../components/landingPage/About'
import Works from '../components/landingPage/Works'
import Blog from '../components/landingPage/Blog'
import Reviews from '../components/landingPage/Reviews'
import Contact from '../components/landingPage/Contact'
// import Footer from '../components/landingPage/Footer'
import Header from '../components/header'
import Footer from '../components/ServiceProvider/SPHome/HomeFooter'

// import '../App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';




const HomeScreen = () => {
  return (
    <>
      
      {/* <Hero /> */}
      <Content />
      <About />
      <Services />
      <Works />
      <Reviews />
      <Blog />
      {/* <Contact /> */}
      <Footer />


    </>
  )
}

export default HomeScreen


// <section id='blog' className=''>
//             <Container fluid>
//                 <div className='title-holder'>
//                     <h2>Latest From Blog</h2>
//                     <div className='subtitle'>get our latest news from blog</div>
//                 </div>

//                 <Row className='portfoliolist'>
//                     {
//                         blogData.map(blog => {
//                             return (
//                                 <Col sm={4} key={blog.id}>
//                                     <div className='hedding'>
//                                         <Card>
//                                             <Card.Img variant="top" src={blog.image} />
//                                             <Card.Body>
//                                                 <time>{blog.time}</time>
//                                                 <Card.Title>{blog.title}</Card.Title>
//                                                 <Card.Text>{blog.description}</Card.Text>
//                                                 <a href={blog.link} className='btn btn-primary'>Read More<i className="fa-solid fa-angle-right"></i></a>
//                                             </Card.Body>
//                                         </Card>

//                                     </div>
//                                 </Col>
//                             )
//                         })
//                     }
//                 </Row>
//             </Container>
//         </section>