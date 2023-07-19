import restrauntList from "../config";
import Card from "./Card";


const Cardlist = () => {
  return (
    <>
      <div className="cardList">
        {restrauntList.map((elem) => {
          return <Card {...elem} key={elem.id} />;
        })}
      </div>
    </>
  );
};
export default Cardlist;
