import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const [isLogin, setlogin] = useState(false);
// console.log(props.children)

  return (
    <>
      <div className="header-div">
        <h2>Food Villa</h2>

        <div className="nav-links">
          <ul>
            <Link to="/">
              <li>Home </li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to='/contact'>
              <li>Contact</li>
            </Link>

            <Link to='/category' >
              <li>Category</li>
            </Link>
            <Link to='/cart'>
              <li>Cart</li>
            </Link>
            <Link to='/offers'><li>Offers</li></Link>
          </ul>
        </div>
        {isLogin ? (
          <button
            onClick={() => {
              setlogin(false);
            }}
          >
            Login
          </button>
        ) : (
          <button
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
