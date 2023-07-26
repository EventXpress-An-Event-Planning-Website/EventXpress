import Carousel from 'react-bootstrap/Carousel';
import gardenImage from '../../assets/images/festival.png';
import celebrationImage from '../../assets/images/celebration.jpg';
import cateringImage from '../../assets/images/catering3.jpg';
import CusEvents from './CusEvents';

const CusHome = () => {

  const contentData = [
    {
      id: 1,
      image: gardenImage,
    },
    {
      id: 2,
      image: celebrationImage,
    },
    {
      id: 3,
      image: cateringImage,
    }
  ];

  return (
    <section id='content' className='cus-block'>
      <Carousel>
        {contentData.map((content) => (
          <Carousel.Item key={content.id}>
            <img
              className="cus-img"
              src={content.image}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <CusEvents/>

    </section>

  );
};

export default CusHome;
