
import { useParams, useRouteError } from "react-router-dom";
import { img_cdn_url } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const ReataurantDetails = () => {
  const { id } = useParams();
  const err = useRouteError();
  console.log(err);

  const restaurant = useRestaurant(id)



  const dispatch = useDispatch()
  const handleAddItems = (restaurant) => {
    dispatch(addItem(restaurant));
  }








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

      <div className="addToCartDiv">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500  text-white px-5 py-1 rounded-xl ml-2 mt-5 mb-5"
          onClick={() => handleAddItems(restaurant)} >Add</button>
      </div>
    </>
  );
};

export default ReataurantDetails;
