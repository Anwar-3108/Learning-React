import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/Header";

import Footer from "./components/Footer";

import Cardlist from "./components/Cardlist";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import RestaurantDetails from "./components/ReataurantDetails";

import { createBrowserRouter, RouterProvider, Outlet  } from "react-router-dom";

const App = () => {
  return (
    <>
      <HeaderComp />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      //children routes here...
      {
        path: "/",
        element: <Cardlist />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
