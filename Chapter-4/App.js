import React from "react";
import ReactDOM from "react-dom/client";

{
  /*
header 
        -logo
        -navigations
        -cart
        -

body
    -search 
    -restrauntList
       -restrauntcard
            -img
            -description
            -price
            -rating
            -cusines

footer
    -links
    -copyright

*/
}

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86tYjrHWG7yuib2FlQU0llpvL1gMwcZibUQ&usqp=CAU"
          alt="logo"
        />
      </a>
    </>
  );
};

const HeaderComp = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// config driven UI mean, the UI which  is deriven by configration.

const config = [
  {
    type: "carousel",
    cards: [
      {
        offerName: "50% off",
      },
      {
        offerName: "No Delevery Charge",
      },
    ],
  },
  {
    type: "restraunt",
    cards: [
      {
        name: "Burger King",
        image:
          "https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/butterfly-chicken-burger.jpg",

        price: " Rs 250/-",
        rating: "4.2",
        cusines: ["Burgers ", " Amarican"],
      },
      {
        name: " Veg Pizza",
        image:
          "https://imgmedia.lbb.in/media/2020/02/5e58fb96227dbe1b8e53ada4_1582889878493.png",

        price: " Rs 450/-",
        rating: "4.2",
        cusines: ["Pizza ", " Indian"],
      },
      {
        name: "West Thali",
        image:
          "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2019/08/1280-Indian-food.jpg",

        price: " Rs 530/-",
        rating: "5.2",
        cusines: ["Thali ", " Indian", "West", "Veg and Non-Veg"],
      },
      {
        name: "Idli Dosa",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SouthIndian_a5ivgy",

        price: " Rs 280/-",
        rating: "4.7",
        cusines: ["Idli and Dosa  ", " Indian", "Veg"],
      },
      {
        name: "Dam Pulaw",
        image:
          "hhttps://images.livemint.com/img/2022/12/15/600x338/swiggy_biryani_1671108299094_1671108299222_1671108299222.jpg",

        price: " Rs 699/-",
        rating: "5.9",
        cusines: ["Dam Pulaw ", " Indian", "Madrasi"],
      },
      {
        name: "Biryani",
        image:
          "https://etimg.etb2bimg.com/thumb/msid-96285119,imgsize-58228,width-1200,height=765,overlay-etbrandequity/research/2022-saw-23-increase-in-searches-for-guilt-free-food-options-swiggy-report.jpg",

        price: " Rs 650/-",
        rating: "5.2",
        cusines: ["Biryani ", " Indian"],
      },
    ],
  },
];

const restrauntList = [
  {
    name: "Burger King",
    image:
      "https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/butterfly-chicken-burger.jpg",

    price: " Rs 250/-",
    rating: "4.2",
    cusines: ["Burgers ", " Amarican"],
  },
  {
    name: " Veg Pizza",
    image:
      "https://imgmedia.lbb.in/media/2020/02/5e58fb96227dbe1b8e53ada4_1582889878493.png",

    price: " Rs 450/-",
    rating: "4.2",
    cusines: ["Pizza ", " Indian"],
  },
  {
    name: "West Thali",
    image:
      "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2019/08/1280-Indian-food.jpg",

    price: " Rs 530/-",
    rating: "5.2",
    cusines: ["Thali ", " Indian", "West", "Veg and Non-Veg"],
  },
  {
    name: "Idli Dosa",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/SouthIndian_a5ivgy",

    price: " Rs 280/-",
    rating: "4.7",
    cusines: ["Idli and Dosa  ", " Indian", "Veg"],
  },
  {
    name: "Dam Pulaw",
    image:
      "https://etimg.etb2bimg.com/thumb/msid-96285119,imgsize-58228,width-1200,height=765,overlay-etbrandequity/research/2022-saw-23-increase-in-searches-for-guilt-free-food-options-swiggy-report.jpg",

    price: " Rs 699/-",
    rating: "5.9",
    cusines: ["Dam Pulaw ", " Indian", "Madrasi"],
  },
  {
    name: "Biryani",
    image:
      "https://etimg.etb2bimg.com/thumb/msid-96285119,imgsize-58228,width-1200,height=765,overlay-etbrandequity/research/2022-saw-23-increase-in-searches-for-guilt-free-food-options-swiggy-report.jpg",

    price: " Rs 650/-",
    rating: "5.2",
    cusines: ["Biryani ", " Indian"],
  },
];

const RestrauntCard = ({image, name, price,rating,cusines}) => {
  // const {=restraunt;
  return (
    <>
      <div className="card">
        <img src={image} alt="" />
        <h1>{name}</h1>
        <h2>{price}</h2>
        <h3>{rating}</h3>
        <h4>{cusines}</h4>
        
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="restrauntlist">
        {/* {RestrauntCard(restrauntList[0])} */}
        <RestrauntCard name={restrauntList[0].name} image={restrauntList[0].image} price={restrauntList[0].price} cusines={restrauntList[0].cusines}  rating={restrauntList[0].rating} />

        <RestrauntCard name={restrauntList[1].name} image={restrauntList[1].image} price={restrauntList[1].price} cusines={restrauntList[1].cusines}  rating={restrauntList[1].rating} />
        
        <RestrauntCard name={restrauntList[2].name} image={restrauntList[2].image} price={restrauntList[2].price} cusines={restrauntList[2].cusines}  rating={restrauntList[2].rating} />

        <RestrauntCard name={restrauntList[3].name} image={restrauntList[3].image} price={restrauntList[3].price} cusines={restrauntList[3].cusines}  rating={restrauntList[3].rating} />



        {/* <RestrauntCard restraunt={restrauntList[3]} />
        <RestrauntCard restraunt={restrauntList[4]} />
        <RestrauntCard restraunt={restrauntList[5]} /> */}
      </div>
    </>
  );
};
const styleObj = { background: "black", color: "white" };
const Footer = () => {
  return (
    <React.Fragment>
      <>
        <h3 style={styleObj}>Footer</h3>
      </>
    </React.Fragment>
  );
};

const Applayout = () => {
  return (
    <>
      <HeaderComp />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
