import React from 'react';
import Comment from './Comment';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import { actionCreators as userActions } from '../redux/modules/comment';
import { useDispatch } from 'react-redux';

const CommentList = (props) => {

    const dispatch = useDispatch();
    const [comment, setComment] = React.useState('');

    const handleComment = (e) => {
      setComment(e.target.value);
    }

    function submit(){
      if(comment !== ''){
      dispatch(userActions.addCommentDB({postId: props.id, content: comment}))
      }
    }


    if(props?.comment?.length >= 0){
        return (
        <div style={{border: "1px solid", borderRadius: "15px", padding: "10px"}}>
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
                    onChange={handleComment}
                />
                </Box>
                <Button onClick={submit} sx={{float: "right", width: "150px", padding: "0px", marginTop: "20px" }}variant='outlined' endIcon={<SendIcon/>}>
                작성하기
                </Button>
            </div>
            {props.comment.map((el, idx) =>
                <div key={idx}>
                    <Comment {...el}/>
                </div>
                )
            }
        </div>
        )
    }

    return (
        <div style={{border: "1px solid", borderRadius: "15px", padding: "10px"}}>
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
                    onChange={handleComment}
                />
                </Box>
                <Button onClick={submit} sx={{float: "right", width: "150px", padding: "0px", marginTop: "20px" }}variant='outlined' endIcon={<SendIcon/>}>
                작성하기
                </Button>
            </div>
            <Comment {...props}/>
        </div>
    )
}

export default CommentList;