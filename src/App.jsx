// first we will import react 
import React from "react";

//importing navbar on app.jsx
import Navbar from './Navbar'

//importing footer on app.
import Footer from './Footer'

//importing external css from app.css
import './app.css'

//Now create arrow function
let App=()=>{
  
  //here we write JAVASCRIPT code:
  let mydetail={
        name:"vaishali Gupta",
        age:21,
        city: "Bhopal"
  }
  return(
    // function always return single lement so we will wrap all elemnts into one element inside </div>
    //replace div from <></> react fragment in which no margin padding needed
    <>  
      {/* position of navbar to display: */}
      <Navbar></Navbar>

      {/* apply inline css in react */}
    <h1 style={{color:'red', fontSize:'50px', border:'2px solid black', display:'inline-block'}}>Hello First React Function</h1><br></br>
      
      {/* applying external css */}
    <p id="myname">I'm {mydetail.name}</p>
      
      {/* position of Footer to display: */}
      <Footer></Footer>
    </>
  )
}

let App2=()=>{
  return(
  <h1>Hello Second React Function</h1>
  )
}

// default export function App (used for the single function export)
 export default App

// named export function App , App2 (used for export multiple functions)
// export {App, App2}