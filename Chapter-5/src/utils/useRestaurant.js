import { useState, useEffect } from "react";
import { menuApi } from "../config";




const useRestaurant = (id) => {
    const [restaurants, setRestaurants] = useState(null);


    const getRestaurantInfo = async () => {
        try {
            const response = await fetch(menuApi + id);

            const json = await response.json();
            console.log(
                "I'm console from restaurant comp",
                json?.data?.cards[0].card?.card?.info
            );
            setRestaurants(json?.data?.cards[0].card?.card?.info);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRestaurantInfo();
    }, []);
    return restaurants;

}
export default useRestaurant;