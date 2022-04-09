import React from 'react';
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

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const handleContent = (event) => {
        setContent(event.target.value);
    };
    function submit () {
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
            <div style={{display: "flex" }}>
                <div style={{border: "1px solid grey", borderRadius: "4px", width: "160px", alignItems: "center", display: "inline-flex", marginTop: "10px", padding: "8px"}}>
                    <p style={{margin: "5px"}}>모집인원</p>
                    <TextField
                        sx={{width: "60px", mr: "5px"}}
                        id="group-count"
                        type="number"
                        size="small"
                        onChange={(e) => setGroup(e.target.value)}
                    /> 명
                </div>
                <Submit onClick={submit} variant="outlined" endIcon={<SendIcon />}>
                작성하기
                </Submit>
            </div>
        </div>
    )
}

export default PostWrite;