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

const Body = () => {
  return (
    <>
      <h3>Body</h3>
    </>
  );
};
const styleObj={background:"black", color:"white"}
const Footer = () => {
  return (
    <>
      <h3 style={styleObj}>Footer</h3>
    </>
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
