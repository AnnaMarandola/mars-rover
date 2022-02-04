import "../styles/RoverButtonImage.scss";

const RoversButtonImage = ({ handleRover, rover }) => {
  return (
    <div className="rovers-container">
      <div className="rover-imgBtn-container">
        <button className="rover-btn" value="curiosity" onClick={handleRover}>
          curiosity
        </button>
      </div>
      <div className="rover-imgBtn-container">
        <button className="rover-btn" value="oppotunity" onClick={handleRover}>
          opportunity
        </button>
      </div>
      <div className="rover-imgBtn-container">
        <button className="rover-btn" value="spirit" onClick={handleRover}>
          spirit
        </button>
      </div>
    </div>
  );
};

export default RoversButtonImage;
