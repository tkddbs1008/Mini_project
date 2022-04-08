import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Signup = (props) => {




    return (
        <div>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <p>ID:</p>
                <TextField id="standard-basic" label="아이디" variant="standard" />
                <p>User Name:</p>
                <TextField id="standard-basic" label="닉네임" variant="standard" />
                <p>PW:</p>
                <TextField id="standard-basic" label="비밀번호" variant="standard" />
                <TextField id="standard-basic" label="비밀번호 재확인" variant="standard" />
            </Box>
        </div>
    )
}

export default Signup;