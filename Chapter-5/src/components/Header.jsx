import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const [isLogin, setlogin] = useState(false);
// console.log(props.children)

  return (
    <>
      <div className="flex justify-between bg-gray-300 ">
        <h2 className="text-3xl font-bold py-10">Food Villa</h2>

        <div className="nav-links">
          <ul className="flex py-10">
            <Link to="/">
              <li className="px-6  ">Home </li>
            </Link>
            <Link to="/about">
              <li className="px-6 ">About</li>
            </Link>
            <Link to='/contact'>
              <li className="px-6 ">Contact</li>
            </Link>

            <Link to='/category' >
              <li className="px-6 ">Category</li>
            </Link>
            <Link to='/cart'>
              <li className="px-6 ">Cart</li>
            </Link>
            <Link to='/offers'><li className="px-6  ">Offers</li></Link>
          </ul>
        </div>
        {isLogin ? (
          <button className="px-6  "
            onClick={() => {
              setlogin(false);
            }}
          >
            Login
          </button>
        ) : (
          <button className="px-6  "
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
