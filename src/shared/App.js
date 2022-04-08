import React from "react";
import {Route, Routes} from 'react-router-dom'
import Login from "../pages/login";
import Posts from "../pages/Posts";
import Signup from "../pages/signup";
import Header from "./header";


function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/login/*" element={<Login/>}/>
        <Route path="/signup/*" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
