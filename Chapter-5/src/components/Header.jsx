import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const [isLogin, setlogin] = useState(false);

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
  );
};
export default HeaderComp;
