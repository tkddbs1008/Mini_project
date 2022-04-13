import React from 'react';

//MUI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';


const PostWrite = (props) => {

    const [category, setCategory] = React.useState('');
    const [group, setGroup] = React.useState('');
    const [content, setContent] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [title, setTitle] = React.useState('');

     const Submit = styled(Button) ({
        marginLeft: "auto",
        height: "58px",
        marginTop: "10px",
        border:"1px solid grey",
        color: "black",
        '&:hover': {
        borderColor: 'black',
        background: "black",
        color: "white",
        boxShadow: 'none',
        },
     })

    const handleDate = (newValue) => {
        setDate(newValue);
    };

    const handleGroup = (event) => {
        setGroup(event.target.value);
     };

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const handleContent = (event) => {
        setContent(event.target.value);
    };
    function submit () {
        if(title === '' || content === '' || group === '' || category === '' ) {
            return (
                    alert("제목, 게시글, 모집인원수와 카테고리를 모두 입력해주세요")
            )
        }
        console.log({title: title, content: content, maxTeamOf: group, category: {name: category}});
    }

    return (
        <div style={{width: "80%", height: "80px", margin: " 15px auto 0px auto", alignItems: "center"}}>
            <div style={{display: "flex", width: "100%"}}>
                <FormControl variant="standard" sx={{ m: 1, ml: "20px", minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">카테고리</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={category}
                    onChange={handleChange}
                    label="Category"
                    >
                    <MenuItem value="">
                        <em>없음</em>
                    </MenuItem>
                    <MenuItem value={'백앤드'}>백앤드</MenuItem>
                    <MenuItem value={'프론트'}>프론트</MenuItem>
                    <MenuItem value={'기타'}>기타</MenuItem>
                    </Select>
                </FormControl>
                    <TextField
                        sx={{width: "100%", ml: "30px", mt: "auto"}}
                        required
                        id="outlined-required"
                        label="제목"
                        placeholder='제목을 적어주세요'
                        onChange={(e) => setTitle(e.target.value)}
                    />
            </div >
            <br/>
            <div>
            </div>
                <div style={{width: "100%"}}>
                    <TextField
                        sx={{width: "100%"}}
                        id="outlined-multiline-static"
                        label="게시글"
                        multiline
                        rows={10}
                        placeholder="게시글을 적어주세요"
                        onChange={handleContent}
                    />
                </div>
            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{border: "1px solid grey", borderRadius: "4px",  alignItems: "center",  width: "170px", display: "inline-flex", marginTop: "10px", padding: "0px", justifyContent: "center"}}>
                    <p style={{margin: "5px"}}>모집인원</p>
                   <FormControl sx={{ m: 1, minWidth: 50 }}>
                        <Select
                        value={group}
                        onChange={handleGroup}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </FormControl>
                    <p>명</p>
                 </div>
                 <Submit onClick={submit} variant="outlined" endIcon={<SendIcon />}>
                    작성하기
                </Submit>
            </div>
        </div>
    )
}

export default PostWrite;