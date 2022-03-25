import {useParams} from "react-router-dom";
import {db} from '../../db';
import './profile.css'

export const Profile = () => {
  const { profile } = useParams();
  const p = db.filter(e => e.id === profile)[0];

  return(
    <div className="profile">
      <div className="profileImage">
        <img alt="" src={p.url} height="525" width="390"/>
      </div>
      <div className="profileText">
        <div className="downArrow">
          
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