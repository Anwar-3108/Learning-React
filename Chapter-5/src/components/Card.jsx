import { img_cdn_url } from "../config";
const Card = ({ name, cloudinaryImageId, totalRatingsString, cuisines ,costForTwo}) => {
    return (
      <>
        <div className="w-64 h-60 mt-20 overflow-hidden">
          <div className="overflow-hidden" style={{width:"100%"}}>
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