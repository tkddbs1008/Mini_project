import React from "react";
import {Route, Routes} from 'react-router-dom'
import Login from "../pages/login";
import Posts from "../pages/Posts";
import PostWrite from "../pages/PostWrite";
import Signup from "../pages/signup";
import Header from "./header";
import { useNavigate } from "react-router-dom";


function App() {
  const nav = useNavigate();
  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/login/*" element={<Login/>}/>
        <Route path="/signup/*" element={<Signup/>}/>
        <Route path="/write/*" element={<PostWrite/>}/>
      </Routes>
    </div>
  );
}

export default App;
