import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="swiper" element={<Swiper />} />
        <Route path="profile" element={<Profile />} />
        <Route path="message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
