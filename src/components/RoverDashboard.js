import { useState, useEffect } from "react";
import axios from "axios";
import Gallery from "./Gallery";
import CURIOSITY from "../assets/curiosity.png";

import "../styles/RoverDashboard.scss";
import CameraInput from "./CameraInput";

const RoverDashboard = ({ rover }) => {
  const [data, setData] = useState([]);
  const [camera, setCamera] = useState("fhaz");

  console.log("data", data);

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
    console.log("camera", camera);
  }, [camera, rover, setData]);

  const handleCamera = (e) => {
    setCamera(e.target.value);
  };

  return (
    <div className="dashboard">
      <div className="card">
        <img src={CURIOSITY} alt="rover" className="roverImg" />
        <div className="infosContainer">
          <h3 className="cardText">name: curiosity</h3>
          <h3 className="cardText">landing date: 2012-08-06</h3>
          <h3 className="cardText">launch date: 2011-11-26</h3>
          <h3 className="cardText">status: active</h3>
          <div className="camsContainer">
            <h3>cameras:</h3>
            <CameraInput handleCamera={handleCamera} />
          </div>
        </div>
      { data && <Gallery data={data} />}
      </div>
    </div>
  );
};

export default RoverDashboard;
