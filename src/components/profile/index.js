import {useParams} from "react-router-dom";

export const Profile = () => {
  const { profile } = useParams();
  console.log("Name: " + profile);

  return(
    <div className="profile">
      <div className="profileImage">
        <img alt="" src="" />
      </div>
      <div className="profileText">
        Profile
      </div>
    </div>
  );
}