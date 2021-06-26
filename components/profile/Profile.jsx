import React from "react";
import "./profile.style.css";
class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="profile">
          <h1>Arif uz zaman</h1>
          <p>Web design and developer, Graphic and UI designer</p>
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <ul>
            <li>Web design</li>
            <li>Web development</li>
            <li>JavaScript</li>
            <li>UI design</li>
          </ul>
        </div>
        <div className="social">
          <h1>Solcial links</h1>
          <ul>
            <li>
              <a href="#">Facebook </a>
            </li>
            <li>
              <a href="#">Linkdin</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
