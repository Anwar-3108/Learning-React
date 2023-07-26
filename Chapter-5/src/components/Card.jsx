
const Card = ({ name, cloudinaryImageId, totalRatingsString, cuisines ,costForTwo}) => {
    return (
      <>
        <div className="card-div">
          <div className="img-div">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="img" />
          </div>
          <div className="text-div">
            <h2>{name}</h2>
            <h3>{costForTwo}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h5>{totalRatingsString}</h5>
          </div>
        </div>
      </>
    );
  };
  

export default Card;