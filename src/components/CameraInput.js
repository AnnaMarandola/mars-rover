const CameraInput = ({ handleCamera }) => {
  return (
    <div>
      <select className="selectInput" onClick={handleCamera}>
        <option value="fhaz">FHAZ</option>
        <option value="rhaz">RHAZ</option>
        <option value="mast">MAST</option>
        <option value="chemcam">CHEMCAM</option>
        <option value="mahli">MAHLI</option>
        <option value="mardi">MARDI</option>
        <option value="navcam">NAVCAM</option>
      </select>
    </div>
  );
};

export default CameraInput;
