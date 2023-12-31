import { useState, useEffect } from "react";
// import restrauntList from "../config";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { swiggyProductApi } from "../config";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


const Cardlist = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestraunts, setAllResraunts] = useState([]);
  const [filterdRestraunt, setFilterdReastraunt] = useState([]);

  // const [restraunts, setResraunts] = useState(restrauntList);

  // empty dependency array => once after render
  // dep array [serchText] => once after initial render + everytime after rerender (my searchText changes)

  useEffect(() => {
    // API CALL
    getRestraunt();
  }, []);

  async function getRestraunt() {
    try {
      // console.log("getRestraunt")
      const res = await fetch(swiggyProductApi);
      const jsonData = await res.json();
      console.log(jsonData);





      // ==================
      //       // optional chaining
      //       setAllResraunts(jsonData?.data?.cards[2]?.data?.data?.cards);
      //       setFilterdReastraunt(jsonData?.data?.cards[2]?.data?.data?.cards);

      // console.log("I'm console1 :",jsonData?.data?.cards[2]?.data?.data?.cards);




      setAllResraunts(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterdReastraunt(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      console.log(
        "I'm console :",
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  }

  const isOnline = useOnline();
  if (!isOnline) {

    return <h1>You are offline , please check your internet connection</h1>
  }

  const filterData = (searchText, allRestraunts) => {
    return allRestraunts.filter((resArrData) => {
      return resArrData?.info?.name?.toLowerCase().includes(searchText);
    });
  };
  return allRestraunts?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <br />
      <div className="justify-center align-middle flex">
        <input className="px-2 py-1 rounded-xl w-96"
          type="search"
          name=""
          placeholder="Search..."
          id=""
          value={searchText}
          onChange={(elem) => {
            setSearchText(elem.target.value);

            // console.log(elem.target.value);
          }}
        />

        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500  text-white px-2 py-1 rounded-xl ml-2"
          onClick={() => {
            const data = filterData(searchText, allRestraunts);
            setFilterdReastraunt(data);

            console.log(data);
          }}
        >
          SEARCH
        </button>
        {/* <h1>{searchClick}</h1> */}
      </div>
      <br />
      <div className="grid grid-cols-4 gap-4  justify-center align-middle m-16">
        {filterdRestraunt?.map((elem) => {
          return (
            <>
              <Link to={`/restaurant/${elem?.info?.id}`} key={elem?.info?.id}>
                {" "}
                <Card {...elem?.info}  />
                {/* <Card {...elem.data} key={elem.data.id} /> */}
              </Link>

              {/* <Card {...elem.data} key={elem.data.id} /> */}
            </>
          );
        })}
      </div>
    </>
  );
};
export default Cardlist;
