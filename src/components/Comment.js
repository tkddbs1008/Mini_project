import React from 'react';

const Comment = (props) => {
    return (
        <div style={{border: "1px solid", borderRadius: "10px", padding: "5px", marginTop: "10px", display: "flex", alignItems: "center"}}>
            <b>유저</b>
            <div style={{marginLeft: "20px"}}>
                <p> 댓글 내용 </p>
            </div>
        </div>
    )
}

export default Comment;