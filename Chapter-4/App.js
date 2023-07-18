import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=>{
    return(<>

    <h1>Food Villa</h1>
    </>)
}

const Comp = () => {
  return (
    <>
      <Title/>
      <h1>Hey! I'm Componenet.</h1>
    </>
  );
};


const Applayout=()=>{
    return(<>

{/*
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

*/}



    <Comp/>
    </>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
