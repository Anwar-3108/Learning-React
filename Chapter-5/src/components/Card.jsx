import { img_cdn_url } from "../config";
const Card = ({ name, cloudinaryImageId, totalRatingsString, cuisines ,costForTwo}) => {
    return (
      <>
        <div className="card-div">
          <div className="img-div">
            <img src={img_cdn_url+cloudinaryImageId} alt="img" />
          </div>
          <div className="text-div">
            <h2>{name}</h2>
            <h3>{costForTwo}</h3>
            {/* <h4>{cuisines.join(',')}</h4> */}
            <h4>{cuisines}</h4>
            <h5>{totalRatingsString}</h5>
          </div>
        </div>
      </>
    );
  };
  

export default Card;