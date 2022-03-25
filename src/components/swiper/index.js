import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { db } from '../../db';

export const Swiper = () => {
  return (
    <div className='container'>
      <Carousel
        autoPlay={false}
        showArrows={false}
        showStatus={false}
        emulateTouch={true}
        showThumbs={false}
        dynamicHeight={false}
        infiniteLoop={true}
        showIndicators={false}>
        {db.map((profile, index) => (
          <div className='cardContainer'>
            <img src={profile.url} className='gallery' />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
