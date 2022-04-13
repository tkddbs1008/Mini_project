import React from 'react';

import {useNavigate} from 'react-router-dom'

//redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

//MUI + logo
import logo from '../images/logo.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Header = (props) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const is_login =  useSelector((state) => state.user.is_login)


    if(is_login){
        return (
            <div style={{width: "80%", height: "80px", margin: " 15px auto 0px auto", display: "flex", alignItems: "center"}}>
                <img alt='logo' src={logo} onClick={() => nav('/')}  style={{width: "150px"}}/>
                <div style={{marginLeft: "auto"}}>
                    <Stack direction="row" spacing={2} >
                        <b style={{fontSize: ".9rem", fontFamily: "Roboto", marginTop:"7px"}}>닉네임</b>
                        <Button onClick={() => dispatch(userActions.logOutDB())}>로그아웃</Button>
                    </Stack>
                </div>
            </div>

        )
    }

    return (
        <div style={{width: "80%", height: "80px", margin: " 15px auto 0px auto", display: "flex", alignItems: "center"}}>
            <img alt='logo' src={logo} onClick={() => nav('/')} style={{width: "150px"}}/>
             <div style={{marginLeft: "auto"}}>
                <Stack direction="row" spacing={2} >
                    <Button onClick={()=> nav('/login')} >로그인</Button>
                    <Button onClick={()=> nav('/signup')}>회원가입</Button>
                </Stack>
            </div>
        </div>
    )
}

export default Header;