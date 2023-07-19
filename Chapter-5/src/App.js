import React from "react";
import ReactDOM from "react-dom/client";

const restrauntList = [
  {
    name: "Burger King",
    image:
      "https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/butterfly-chicken-burger.jpg",
    id: "1",
    price: " Rs 250/-",
    rating: "4.2",
    cusines: ["Burgers ", " Amarican"],
  },
  {
    name: " Veg Pizza",
    image:
      "https://imgmedia.lbb.in/media/2020/02/5e58fb96227dbe1b8e53ada4_1582889878493.png",
    id: "2",
    price: " Rs 450/-",
    rating: "4.2",
    cusines: ["Pizza ", " Indian"],
  },
  {
    name: "West Thali",
    image:
      "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2019/08/1280-Indian-food.jpg",
    id: "3",
    price: " Rs 530/-",
    rating: "5.2",
    cusines: ["Thali ", " Indian", "West", "Veg and Non-Veg"],
  },
  {
    name: "Idli Dosa",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SouthIndian_a5ivgy",
    id: "4",
    price: " Rs 280/-",
    rating: "4.7",
    cusines: ["Idli and Dosa  ", " Indian", "Veg"],
  },
  {
    name: "Dam Pulaw",
    image:
      "https://etimg.etb2bimg.com/thumb/msid-96285119,imgsize-58228,width-1200,height=765,overlay-etbrandequity/research/2022-saw-23-increase-in-searches-for-guilt-free-food-options-swiggy-report.jpg",
    id: "5",
    price: " Rs 699/-",
    rating: "5.9",
    cusines: ["Dam Pulaw ", " Indian", "Madrasi"],
  },
  {
    name: "Biryani",
    image:
      "https://etimg.etb2bimg.com/thumb/msid-96285119,imgsize-58228,width-1200,height=765,overlay-etbrandequity/research/2022-saw-23-increase-in-searches-for-guilt-free-food-options-swiggy-report.jpg",
    id: "6",
    price: " Rs 650/-",
    rating: "5.2",
    cusines: ["Biryani ", " Indian"],
  },
];

const HeaderComp = () => {
  return (
    <>
      <div className="header-div">
        <h2>Food Villa</h2>

        <div className="nav-links">
          <ul>
            <li>Home </li>
            <li>About</li>
            <li>Contact</li>
            <li>Category</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Card = ({ name, image, price, rating, cusines }) => {
  return (
    <>
      <div className="card-div">
        <div className="img-div">
          <img src={image} alt="img" />
        </div>
        <div className="text-div">
          <h2>{name}</h2>
          <h3>{price}</h3>
          <h4>{cusines}</h4>
          <h5>{rating}</h5>
        </div>
      </div>
    </>
  );
};

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

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h3>Footer</h3>
      </div>
    </>
  );
};

const Appleyout = () => {
  return (
    <>
      <HeaderComp />

      <Cardlist />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Appleyout />);
