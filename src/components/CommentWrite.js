import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CommentWrite = (props) => {
    return (
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-multiline-static"
          label="댓글"
          multiline
          rows={4}
          placeholder="댓글을 작성해 주세요"
        />
    </Box>
    )
}

export default CommentWrite;