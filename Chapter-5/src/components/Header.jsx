import { useState } from "react";

const HeaderComp = () => {
  const [isLogin, setlogin] = useState(false);

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
        {isLogin ? (
          <button onClick={()=>{setlogin(false)}}>Login</button>
        ) : (
          <button onClick={()=>{setlogin(true)}}>LogOut</button>
        )}
      </div>
    </>
  );
};
export default HeaderComp;
