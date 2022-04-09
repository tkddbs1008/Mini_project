import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

const Signup = (props) => {


  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });
  const [valueChek, setValueChek] = React.useState(null);
  const [id, setid] = React.useState('')
  const [username, setUserName] = React.useState('')

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const Change = (event) => {
    setUserName(event.target.value);
  };

  const passwordCheck = (event) => {
      setValueChek(event.target.value)
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function signUp(){
    console.log({username: id, nickname: username, password: valueChek});
  }

  if(id === 'close'){
    return (
      <div style={{width: "33ch", margin: "auto"}}>
            <h1 style={{textAlign: "center"}}>회원가입</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <FormControl sx={{ margin: "8px 8px 0px 8px", width: '30ch' }} error variant="standard">
                <InputLabel htmlFor="component-error">아이디</InputLabel>
                <Input
                    id="user-id error"
                    onChange={(e) => setid(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <CheckIcon color='error'/>
                      </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                <FormHelperText sx={{ ml: "8px", mb: "0px"}}>글자,숫자 길이가 6이상</FormHelperText>
                <TextField
                    sx={{ m: 1}}
                    id="user name" label="닉네임" variant="standard"
                    onChange={Change}
                />
                <br/>
                <TextField
                    sx={{ margin: "8px 8px 0px 8px"}}
                    id="password" value={values.password}
                    onChange={handleChange('password')}
                    label="비밀번호" variant="standard" type="password"
                />
                <FormHelperText sx={{ ml: "8px"}}>글자,숫자 길이가 6이상</FormHelperText>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">비밀번호 재확인</InputLabel>
                <Input
                    id="password check"
                    type={values.showPassword ? 'text' : 'password'}
                    onChange={passwordCheck}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ?  <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
            </Box>
               {(values.password === valueChek) && id !== '' && username !== '' ? <SignUp variant="outlined" onClick={signUp}>가입하기</SignUp> : <SignUp disabled variant="outlined">가입하기</SignUp>}
        </div>
    )
  }
  if(id === 'open'){
    return (
      <div style={{width: "33ch", margin: "auto"}}>
            <h1 style={{textAlign: "center"}}>회원가입</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <FormControl sx={{ margin: "8px 8px 0px 8px", width: '30ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password" color='success'>아이디</InputLabel>
                <Input
                    id="user id"
                    color='success'
                    onChange={(e) => setid(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <CheckIcon color='success'/>
                      </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                <FormHelperText sx={{ ml: "8px", mb: "0px"}}>글자,숫자 길이가 6이상</FormHelperText>
                <TextField
                    sx={{ m: 1}}
                    id="user name" label="닉네임" variant="standard"
                    onChange={Change}
                />
                <br/>
                <TextField
                    sx={{ margin: "8px 8px 0px 8px"}}
                    id="password" value={values.password}
                    onChange={handleChange('password')}
                    label="비밀번호" variant="standard" type="password"
                />
                <FormHelperText sx={{ ml: "8px"}}>글자,숫자 길이가 6이상</FormHelperText>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">비밀번호 재확인</InputLabel>
                <Input
                    id="password check"
                    type={values.showPassword ? 'text' : 'password'}
                    onChange={passwordCheck}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ?  <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
            </Box>
               {(values.password === valueChek) && id !== '' && username !== '' ? <SignUp variant="outlined" onClick={signUp}>가입하기</SignUp> : <SignUp disabled variant="outlined">가입하기</SignUp>}
        </div>
    )
  }



    return (

        <div style={{width: "33ch", margin: "auto"}}>
            <h1 style={{textAlign: "center"}}>회원가입</h1>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { width: '30ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <FormControl sx={{ margin: "8px 8px 0px 8px", width: '30ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">아이디</InputLabel>
                <Input
                    id="user id"
                    onChange={(e) => setid(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                      <IconButton>
                        <CheckIcon />
                      </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
                <FormHelperText sx={{ ml: "8px", mb: "0px"}}>글자,숫자 길이가 6이상</FormHelperText>
                <TextField
                    sx={{ m: 1}}
                    id="user name" label="닉네임" variant="standard"
                    onChange={Change}
                />
                <br/>
                <TextField
                    sx={{ margin: "8px 8px 0px 8px"}}
                    id="password" value={values.password}
                    onChange={handleChange('password')}
                    label="비밀번호" variant="standard" type="password"
                />
                <FormHelperText sx={{ ml: "8px"}}>글자,숫자 길이가 6이상</FormHelperText>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">비밀번호 재확인</InputLabel>
                <Input
                    id="password check"
                    type={values.showPassword ? 'text' : 'password'}
                    onChange={passwordCheck}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ?  <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
            </Box>
               {(values.password === valueChek) && id !== '' && username !== '' ? <SignUp variant="outlined" onClick={signUp}>가입하기</SignUp> : <SignUp disabled variant="outlined">가입하기</SignUp>}
        </div>
    )
}

const SignUp = styled(Button)({
  width: "33ch",
  marginTop: "2ch",
  marginLeft: "1ch",
  border: "1px solid black",
  color: "black",
  '&:hover': {
  borderColor: 'black',
  background: "black",
  color: "white",
  boxShadow: 'none',
  },
})
export default Signup;