import React from 'react'
import ReactDOM from 'react-dom/client'

const Title =()=>{
  return (<>

<h1>Hey ! I'm Title</h1>

  </>)



    

}



const Container=()=>{
    return (<>


    <Title/>
    <h1>Hey!! I'm Functional  Component </h1>


    </>)
}


const root =  ReactDOM.createRoot(document.getElementById('root')) ;
root.render(<Container/>);

