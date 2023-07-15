/*
* Hot Module Reloading

*File Watcher Algo

*parcel bundles all the code when we run npx parcel build index.html

*it's a MINIFIRE

* it also cleaning our code and removes the log of console 

* Dev and production build 

* super fast

* it also does the optimization for media 

* it also does the optimization for css

* it also does the optimization for js

*caching while developmentz
*compression
*compatble with older version of browser

*consistent Hashing algorithms


*/












import React from 'react';
import ReactDOM from 'react-dom/client';




const h1 =  React.createElement('h1' ,{className:"heading1"} ,"Hey! I'm Heading 1 form parcel") ;

const h2 = React.createElement('h2' ,{className:"heading2"},  "Hey! I'm Heading2 form parcel") ;

const container = React.createElement('div' , {className:"container"} ,[h1,h2]) ;




const root =  ReactDOM.createRoot(document.getElementById('root')) ;
root.render(container) ;