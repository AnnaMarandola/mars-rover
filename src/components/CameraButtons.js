const CameraButtons = ({ handleCamera }) => {
    return (
        <div className="cam-container">
        <button value="fhaz" onClick={handleCamera}>
          FHAZ
        </button>
        <button value="rhaz" onClick={handleCamera}>
          RHAZ
        </button>
        <button value="mast" onClick={handleCamera}>
          MAST
        </button>
        <button value="chemcam" onClick={handleCamera}>
          CHEMCAM
        </button>
        <button value="mahli" onClick={handleCamera}>
          MAHLI
        </button>
        <button value="mardi" onClick={handleCamera}>
          MARDI
        </button>
        <button value="navcam" onClick={handleCamera}>
          NAVCAM
        </button>
      </div>
    );
  };
  
  export default CameraButtons;
  