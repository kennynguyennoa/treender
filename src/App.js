import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/home';
import { Swiper } from './components/swiper';
import { Profile } from './components/profile';
import { Message } from './components/message';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='swiper' element={<Swiper />} />
        <Route path='profiles/:profile' element={<Profile />} />
        <Route path='message' element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
