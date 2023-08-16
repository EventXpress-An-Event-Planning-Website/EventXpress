import Carousel from 'react-bootstrap/Carousel';
import gardenImage from '../../assets/images/garden.jpg';
import celebrationImage from '../../assets/images/celebration.jpg';
import cateringImage from '../../assets/images/landing.jpg';

const Content = () => {

  const contentData = [
    {
      id: 1,
      image: gardenImage,
      title: 'Create Your Event Perfectly With Us',
      description: 'Embark on an unparalleled journey of perfection at EventXpress. Unleash your creativity and witness your visions come to life in an immersive event planning experience like no other.Join the event innovation revolution at EventXpress',
      // link: 'https://www.google.com'
    },
    {
      id: 2,
      image: celebrationImage,
      title: 'Start Planning Your Event With Us',
      description: 'Join us for a day of inspiration, expert insights, and hands-on activities that will empower you to craft flawless and unforgettable events.Dive into the world of event mastery at EventXpress',
      // link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: cateringImage,
      title: 'Enjoy The Services In Our Platform',
      description: 'Unveil the art of seamless planning, innovative design, and flawless execution as we guide you through a day of workshops, networking, and inspiration. Elevate your event game and join us in shaping extraordinary experiences together.',
      // link: 'https://www.twitter.com'
    }
  ];

  return (
    <div className="content-p">
    <section id='content' className='hero-block'>
      <Carousel>
        {contentData.map((content) => (
          <Carousel.Item key={content.id}>
            <img
              className="content-img"
              src={content.image}
              alt={content.title}
            />
            <Carousel.Caption>
              <h3>{content.title}</h3>
              <p>{content.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
    </div>
  );
};

export default Content;
