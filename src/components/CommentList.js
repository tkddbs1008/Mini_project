import React from 'react';
import Comment from './Comment';
import CommentWrite from './CommentWrite';

const CommentList = (props) => {

    return (
        <div style={{border: "1px solid", borderRadius: "15px", padding: "10px"}}>
            <CommentWrite/>
            <Comment/>
        </div>
    )
}

export default CommentList;