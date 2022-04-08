import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom'


const Header = (props) => {
    const nav = useNavigate();

    return (
        <div>
            <Stack direction="row" spacing={2} >
                <Button onClick={()=> nav('/login')} >로그인</Button>
                <Button onClick={()=> nav('/signup')}>회원가입</Button>
            </Stack>
        </div>
    )
}

export default Header;