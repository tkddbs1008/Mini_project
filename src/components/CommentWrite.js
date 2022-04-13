import React from 'react';

//MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const CommentWrite = (props) => {
    return (
      <div style={{display: "flex"}}>
        <Box
        component="form"
        sx={{
          width: '100%', margin: "auto", marginTop: "20px"
        }}
        noValidate
        autoComplete="off"
        >
          <TextField
            sx={{width: "100%"}}
            id="outlined-multiline-static"
            label="댓글"
            placeholder="댓글을 작성해 주세요"
          />
        </Box>
        <Button sx={{float: "right", width: "150px", padding: "0px", marginTop: "20px" }}variant='outlined' endIcon={<SendIcon/>}>
          작성하기
        </Button>
    </div>

    )
}

export default CommentWrite;