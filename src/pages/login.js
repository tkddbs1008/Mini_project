import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';


const Login = (props) => {
    const [id, setId] = React.useState();
    const [pwd, setPwd] = React.useState();

    
    const loginClick = () => {
        if (id === "" || pwd === "") {
            window.alert("아이디 또는 비밀번호가 공란입니다!!");
            return;
        }
    };
  return (
    <React.Fragment>
      <Container>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Stack spacing={1}>
            <h1>Login</h1>
            <span>아이디</span>
            <TextField onChange={ (e) => {
                setId(e.target.value)
            } } id="standard-basic" label="ID" variant="standard" />
            <span>비밀번호</span>
            <TextField type="password" onChange={ (e) => {
                setPwd(e.target.value)
            } } id="standard-basic" label="PassWord" variant="standard" />
            <Button disabled={id === "" || pwd === "" ? true : false} onClick={() => {console.log("로그인 누름!!");loginClick();}} variant="outlined">로그인</Button>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Login;
