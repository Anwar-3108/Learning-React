
import { useParams, useRouteError } from "react-router-dom";
import { img_cdn_url } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../useRestaurant";


const ReataurantDetails = () => {
  const { id } = useParams();
  const err = useRouteError();
  console.log(err);

  const restaurant = useRestaurant(id)


  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <h1>Restaurant id : {id}</h1>
      <img src={img_cdn_url + restaurant?.cloudinaryImageId} alt="img" />
      <h2>{restaurant?.name}</h2>
      <h3>{restaurant?.costForTwoMessage}</h3>
      <h3>{restaurant?.cuisines?.join(",")}</h3>
      <h4>{restaurant?.avgRating} stars</h4>
    </>
  );
};

export default ReataurantDetails;
