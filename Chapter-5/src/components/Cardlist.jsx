import { useState, useEffect } from "react";
// import restrauntList from "../config";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { swiggyProductApi } from "../config";
import { Link } from "react-router-dom";


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
      <div className="search-div">
        <input
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
          className="search-btn"
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
      <div className="cardList">
        {filterdRestraunt?.map((elem) => {
          return (
            <>
              <Link to={`/restaurant/${elem?.info?.id}`} key={elem?.info?.id}>
                {" "}
                <Card {...elem?.info} />
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
