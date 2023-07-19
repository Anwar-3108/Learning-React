import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/Header";

import Footer from "./components/Footer";

import Cardlist from "./components/CardList";

const App = () => {
  return (
    <>
      <HeaderComp />
      <Cardlist />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
