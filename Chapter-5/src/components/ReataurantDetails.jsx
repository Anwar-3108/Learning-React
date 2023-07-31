import { useEffect, useState } from "react";
import { useParams, useRouteError } from "react-router-dom";
import { img_cdn_url, menuApi} from "../config";
import Shimmer from "./Shimmer";

const ReataurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const err = useRouteError();
  console.log(err);

  const getRestaurantInfo = async () => {
    try {
      const response = await fetch(menuApi + id);

      const json = await response.json();
      console.log(
        "I'm console from restaurant comp",
        json?.data?.cards[0].card?.card?.info
      );
      setRestaurant(json?.data?.cards[0].card?.card?.info);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

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
