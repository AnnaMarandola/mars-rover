import "../styles/Gallery.scss";

const Gallery = ({ data }) => {
  const camInfos = data[0];

  return (
    <div className="galleryCard">
      {camInfos && (
        <div className="camInfo">
          <p>{camInfos.camera.full_name}</p>
          <p>{camInfos.camera.name}</p>
          <div className="dateContainer">
            <p>{camInfos.earth_date}</p>
            <p>sol: {camInfos.sol}</p>
          </div>
        </div>
      )}
      {data.map((image, id) => (
        <div key={id} className="gallery">
          <img src={image.img_src} alt="camera view" className="camImage" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
