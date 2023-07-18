import React from "react";
import ReactDOM from 'react-dom/client'


const Title =()=>{
    return(
        <>
            <h1>Title</h1>
        </>

    )
}

const Comp=()=>{
    return(<>
            <Title/>
        <h1>Hey! I'm Componenet.</h1>

    </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Comp/>)