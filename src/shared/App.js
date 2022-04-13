import React from "react";
import {Route, Routes} from 'react-router-dom'

import Header from "./header";

//pages
import Detail from "../pages/detail";
import Signup from "../pages/signup";
import PostWrite from "../pages/PostWrite";
import Login from "../pages/login";
import Posts from "../pages/Posts";


function App() {

  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/login/*" element={<Login/>}/>
        <Route path="/signup/*" element={<Signup/>}/>
        <Route path="/write/*" element={<PostWrite/>}/>
        <Route path="/post/:id/*" element={<Detail/>}/>
      </Routes>
    </div>
  );
}


export default App;
