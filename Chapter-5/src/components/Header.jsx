import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../utils/store";

const HeaderComp = () => {
  const [isLogin, setlogin] = useState(false);
// console.log(props.children)
 const cartItems = useSelector(store=> store.cart.items)
 console.log(cartItems) ;
  return (
    <>
      <div className="flex justify-between bg-gray-300 ">
        <h2 className="text-3xl font-bold py-10 mx-4">Food Villa</h2>

        <div className="nav-links">
          <ul className="flex py-10">
            <Link to="/">
              <li className="px-6 hover:font-bold ">Home </li>
            </Link>
            <Link to="/about">
              <li className="px-6 hover:font-bold  ">About</li>
            </Link>
            <Link to='/contact'>
              <li className="px-6 hover:font-bold ">Contact</li>
            </Link>

            <Link to='/category' >
              <li className="px-6 hover:font-bold ">Category</li>
            </Link>
            <Link to='/cart'>
              <li className="px-6 hover:font-bold ">Cart {`(${cartItems.length})`}</li>
            </Link>
            <Link to='/offers'><li className="px-6  hover:font-bold ">Offers</li></Link>
           
          </ul>
        </div>
        {isLogin ? (
          <button className="px-6  hover:font-bold  "
            onClick={() => {
              setlogin(false);
            }}
          >
            Login
          </button>
        ) : (
          <button className="px-6 hover:font-bold  "
            onClick={() => {
              setlogin(true);
            }}
          >
            LogOut
          </button>
        )}
      </div>
    </>


// <----------------- Dynamic Header-------------------->
// children.map((el,i)=>{
//   <Link to={el.path} element={<el.element></el.element>}>

//   </Link>
// })
    

  );
};
export default HeaderComp;
