import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const Posts = (props) => {
    const nav = useNavigate();

    return (
       <div>
          <Write onClick={() => nav('/write')}>+</Write>
       </div>
    )
};


const Write = styled(Button) ({
    padding: "0px",
    height: "50px",
    backgroundColor: "#212121",
    color: "#fff",
    boxSizing: "border-box",
    fontSize: "40px",
    position: "fixed",
    bottom: "50px",
    right: "20px",
    borderRadius: "35px",
    zIndex: "3",
    '&:hover': {
        borderColor: 'black',
        background: "black",
        color: "white",
        boxShadow: 'none',
    },
})

export default Posts;