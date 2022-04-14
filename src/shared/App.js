import React from "react";
import {Route, Routes} from 'react-router-dom'

//redux
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

//pages
import Detail from "../pages/detail";
import Signup from "../pages/signup";
import PostWrite from "../pages/PostWrite";
import Login from "../pages/login";
import Posts from "../pages/Posts";

import Header from "./header";
import Edit from "../pages/edit";


function App() {
  const is_login = useSelector((state) => state.user.is_login)
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(!is_login){
      dispatch(userActions.loginCheckDB());
    }
  }, [])



  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/login/*" element={<Login/>}/>
        <Route path="/signup/*" element={<Signup/>}/>
        <Route path="/write/*" element={<PostWrite/>}/>
        <Route path="/post/:id/*" element={<Detail/>}/>
        <Route path="/post/edit/:id/*" element={<Edit/>}/>
      </Routes>
    </div>
  );
}


export default App;
