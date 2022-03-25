import logo from './logo.svg';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const gallery = [
  {
    name: 'Tree 1',
    url: 'assets/tree1.jpeg',
    description: 'hei'
  },
  {
    name: 'Tree 2',
    url: 'assets/tree2.jpeg',
    description: 'hei'
  },
  {
    name: 'Tree 3',
    url: 'assets/tree3.jpeg',
    description: 'hei'
  },
  {
    name: 'Tree 4',
    url: 'assets/tree4.jpeg',
    description: 'hei'
  },
  {
    name: 'Tree 5',
    url: 'assets/tree5.jpeg',
    description: 'hei'
  }
];

function App() {
  return (
    <div className='App'>
      <img src={logo} alt='logo' className='App-logo' />
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
          {gallery.map((profile, index) => (
            <div className='cardContainer'>
              <img src={profile.url} className='gallery' />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
