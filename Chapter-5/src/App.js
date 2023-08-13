import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComp from "./components/Header";
import Footer from "./components/Footer";
import Cardlist from "./components/Cardlist";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import RestaurantDetails from "./components/ReataurantDetails";
// import Offers from "./components/offers";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Shimmer from "./components/Shimmer";
import { Provider } from 'react-redux';
import store from "./utils/store";
import Cart from "./components/Cart";





const Offers = lazy(() => import("./components/Offers"))
const About = lazy(() => import("./components/About"))

const App = () => {
  return (
 
    <>
    <Provider store={store}>
    <HeaderComp />
      <Outlet />
      <Footer />
    </Provider>
     
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
        element: <Suspense><About /></Suspense>,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/offers",
        element: <Suspense  ><Offers /></Suspense>,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path:'/cart',
        element:<Cart/>,
        errorElement: <Error />,
      }

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


