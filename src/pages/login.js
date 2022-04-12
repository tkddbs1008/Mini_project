import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

//MUI
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';


const Login = (props) => {
    const dispatch = useDispatch();
    const isLogin = useSelector((store) => store.user.is_login)

    const [id, setId] = React.useState();
    const [pwd, setPwd] = React.useState();

    // const loginClick = () => {
    //     if (id === "" || pwd === "") {
    //         window.alert("아이디 또는 비밀번호가 공란입니다!!");
    //         return;
    //     }
    // };

    const login = (e) => {
      e.preventDefault();
      dispatch(userActions.loginDB(id, pwd));
    }

  return (
    <div style={{width: "80%", margin: "auto", display: "flex"}}>
      <div style={{ margin: "auto"}}>
        <Container>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={login}
          >
            <Stack spacing={1}>
                <h1 style={{textAlign: "center"}}>로그인</h1>
              <TextField onChange={ (e) => {
                  setId(e.target.value)
              } } id="standard-basic" label="ID" variant="standard" />
              <TextField type="password" onChange={ (e) => {
                  setPwd(e.target.value)
              } } id="standard-basic" label="PassWord" variant="standard" />
                <br/>
                <input type="submit" value="Submit" />
              {/* <Button disabled={id === "" || pwd === "" ? true : false} onClick={() => {console.log("로그인 누름!!");loginClick();}} variant="outlined">로그인</Button> */}
            </Stack>
          </Box>
        </Container>
      </div>
    </div>
    
  );
};

export default Login;
