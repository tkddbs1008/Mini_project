import React from 'react';

const Comment = (props) => {
    return (
        <div style={{border: "1px solid", borderRadius: "10px", padding: "5px", marginTop: "10px", display: "flex", alignItems: "center"}}>
            <b>{props.nickname}</b>
            <div style={{marginLeft: "20px"}}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Comment;