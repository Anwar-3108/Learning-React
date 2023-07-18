import React from 'react'
import ReactDOM from 'react-dom/client'


const h1 = React.createElement('h1',{className:"h1"},"heading1");
const h2 = React.createElement('h2',{className:"h2"},"heading2");


const container=  React.createElement('div',{className:"componenet"},[h1,h2]);


const root =  ReactDOM.createRoot(document.getElementById('root')) ;
root.render(container);

