import { useState, useEffect } from "react";
import Header from "../components/Header";
import RoversButtonImage from "../components/RoversButtonImage";
import RoverDashboard from "./RoverDashboard";

import "../styles/Main.scss";

const Main = () => {
  const [rover, setRover] = useState("");
  console.log("rover", rover);

  useEffect(() => {
    console.log("rover", rover);
  }, [rover]);

  const handleRover = (e) => {
    setRover(e.target.value);
  };

  return (
    <div className="homepage">
      <Header />
      <p>rover: {rover}</p>
      {!rover && <RoversButtonImage handleRover={handleRover} rover={rover} />}
      {rover && <RoverDashboard rover={rover} />}
    </div>
  );
};

export default Main;
