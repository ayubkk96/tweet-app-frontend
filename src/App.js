import './App.css';
import TweetComponent from "./component/TweetComponent";
import RegisterComponent from "./component/RegisterComponent"
import React, { useState } from "react";
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import ReactDOM from "react-dom";
import Login from "./component/LoginComponent";
import Navbar from "./component/Navbar";




function App() {
    const [token, setToken] = useState();
    if(!token) {
        return <Login setToken={setToken}/>
     }


    return (
        <>
            <Navbar/>
            <div className="wrapper">
           <Routes>
               <Route exact path="/" element={<TweetComponent/>}>
               </Route>
               <Route exact path="/register" element={<RegisterComponent/>}>
               </Route>
           </Routes>
    </div>
        </>
  );
}

export default App;
