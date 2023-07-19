import Carousel from 'react-bootstrap/Carousel';
import gardenImage from '../../assets/images/garden.jpg';
import celebrationImage from '../../assets/images/celebration.jpg';
import cateringImage from '../../assets/images/catering3.jpg';

const Content = () => {

  const contentData = [
    {
      id: 1,
      image: gardenImage,
      title: 'The perfect design for your website',
      description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: celebrationImage,
      title: 'Start your future financial plan',
      description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: cateringImage,
      title: 'Enjoy the difference',
      description: 'Use an integrated toolchain for the best user and developer experience. This page describes a few popular React toolchains which help with tasks like Scaling to many files and components. Using third-party libraries from npm.',
      link: 'https://www.twitter.com'
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
