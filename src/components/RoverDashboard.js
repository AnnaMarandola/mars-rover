import { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import CURIOSITY from "../assets/curiosity.png";

import "../styles/RoverDashboard.scss";
import CameraInput from "./CameraInput";

const RoverDashboard = ({ rover }) => {
  const [data, setData] = useState([]);
  const [camera, setCamera] = useState("fhaz");


  useEffect(() => {
    const fetch = () => {
      axios
        .get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=2021-01-14&camera=${camera}&page=1&api_key=rYl16UaXLpqPxrzPWvZ1JVEPpADLBPB6DIRrpA8u`
        )
        .then((response) => response.data)
        .then((data) => setData(data.photos));
    };
    fetch();
  }, [camera, rover, setData]);

  const handleCamera = (e) => {
    setCamera(e.target.value);
  };

  return (
    <div className="dashboard">
      <div className="card">
        <img src={CURIOSITY} alt="rover" className="roverImg" />
        <div className="infosContainer">
          <p className="cardText">name: curiosity</p>
          <p className="cardText">landing date: 2012-08-06</p>
          <p className="cardText">launch date: 2011-11-26</p>
          <p className="cardText">status: <span>active</span></p>
          <div className="camsContainer">
            <p>cameras:</p>
            <CameraInput handleCamera={handleCamera} />
          </div>
        </div>
      { data && <Gallery data={data} />}
      </div>
    </div>
  );
};

export default RoverDashboard;
