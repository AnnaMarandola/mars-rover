import NASA from "../assets/NASA.png";
import "../styles/header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Mars Rover Photos</h1>
      <div className="subtitle">
        <img src={NASA} alt="nasa api" className="nasa" />
        <p>APIs</p>
      </div>
    </div>
  );
};

export default Header;
