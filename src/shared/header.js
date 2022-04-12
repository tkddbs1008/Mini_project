import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom'
import logo from '../images/logo.png'


const Header = (props) => {
    const nav = useNavigate();
    let is_login = false;


    if(is_login){
        return (
            <div style={{width: "80%", height: "80px", margin: " 15px auto 0px auto", display: "flex", alignItems: "center"}}>
                <img alt='logo' src={logo} onClick={() => nav('/')}  style={{width: "150px"}}/>
                <div style={{marginLeft: "auto"}}>
                    <Stack direction="row" spacing={2} >
                        <b style={{fontSize: ".9rem", fontFamily: "Roboto", marginTop:"7px"}}>닉네임</b>
                        {/* <Button>내 정보</Button> */}
                        <Button>알림</Button>
                        <Button>로그아웃</Button>
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