import { useState, useEffect } from "react";
import Header from "../components/Header";
import RoversButtonImage from "../components/RoversButtonImage";
import RoverDashboard from "./RoverDashboard";

import "../styles/Main.scss";

const Main = () => {
  const [rover, setRover] = useState("");

  useEffect(() => {
  }, [rover]);

  const handleRover = (e) => {
    setRover(e.target.value);
  };

  return (
    <div className="homepage">
      <Header />
      {!rover && <RoversButtonImage handleRover={handleRover} rover={rover} />}
      {rover && <RoverDashboard rover={rover} />}
    </div>
  );
};

export default Main;
