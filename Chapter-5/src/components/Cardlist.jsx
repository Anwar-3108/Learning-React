import { useState } from "react";
import restrauntList from "../config";
import Card from "./Card";

// const searchText = "kgf";
const Cardlist = () => {
  const [searchText, setSearchText] = useState("");

  const [restraunts, setResraunts] = useState(restrauntList);

  console.log(restraunts);
  // const [searchClick, setSearchClick] = useState("false");

  // const changeClick = () => {
  //   searchClick == "true" ? setSearchClick("false") : setSearchClick("true");

  // };

  const filterData = (searchText, restraunts) => {
    return restraunts.filter((resArrData) => {
      return resArrData.name.toLowerCase().includes(searchText.toLowerCase());
    });
  };
  return (
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
            const data = filterData(searchText, restraunts);
            
            setResraunts(data);
          }}
        >
          SEARCH
        </button>
        {/* <h1>{searchClick}</h1> */}
      </div>
      <br />
      <div className="cardList">
        {restraunts.map((elem) => {
          return <Card {...elem} key={elem.id} />;
        })}
      </div>
    </>
  );
};
export default Cardlist;
