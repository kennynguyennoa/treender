import {useParams} from "react-router-dom";
import {db} from '../../db';
import './profile.css'
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate();
  const { profile } = useParams();
  const p = db.filter(e => e.id === profile)[0];

  const backToSwiper = () => {
    navigate("/swiper");
  }

  return(
    <div className="profile">
      <div className="profileImage">
        <img alt="" src={p.url} height="525" width="390"/>
      </div>
      <div className="profileText">
        <div className="downArrow" onClick={(backToSwiper)}>
          <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41475 23.9392C8.21534 24.9799 9.78465 24.9799 10.5852 23.9392L16.7303 15.9506C17.6576 14.7452 16.7982 13 15.2774 13C14.2651 13 13.4444 12.1793 13.4444 11.167L13.4444 2C13.4444 0.89543 12.549 -2.81982e-07 11.4444 -3.30264e-07L6.55556 -5.43964e-07C5.45099 -5.92246e-07 4.55556 0.89543 4.55556 2L4.55556 11.167C4.55556 12.1793 3.7349 13 2.72256 13C1.20177 13 0.342447 14.7452 1.26969 15.9506L7.41475 23.9392Z" fill="white"/>
          </svg>
        </div>
        <div className="nameAndAge">
          <div className="name">
            {p.name}
          </div>
          <div className="age">
            {p.age}
          </div>
        </div>
        <div className="aboutMeImage">
        <img alt="" src="/img/about.png" height="120" width="390"/>
        </div>
        <div className="aboutMe">
          <hr />
          <p><strong>About me</strong></p>
          <p>{p.description}</p>
        </div>
      </div>
    </div>
  );
}