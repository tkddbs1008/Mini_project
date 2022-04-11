import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import mainpage from "../images/mainpage.png"
import Post from '../components/Post';
import {useDispatch, useSelector} from "react-redux"
import { actionCreators as postActions } from '../redux/modules/post';

const Posts = (props) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [front, setFront] = React.useState(false);
    const [back, setBack] = React.useState(false);
    const [misc, setMisc] = React.useState(false);
    const post_list = useSelector((state) => state.post.list)
    React.useEffect(() => {
        dispatch(postActions.getPostFB());
    }, [])

    if(!post_list){
        return;
    }

    return (
        <div>
            <div style={{ width: "80%", display: "flex", margin: "auto", justifyContent: "center"}}>
                <Category
                    value="Front-end"
                    selected={front}
                    onChange={() => {
                        setFront(!front);
                    }}
                >
                    프론트
                </Category>
                <Category
                    value="Back-end"
                    selected={back}
                    onChange={() => {
                        setBack(!back);
                    }}
                >
                    백앤드
                </Category>
                <Category
                    value="Misc"
                    selected={misc}
                    onChange={() => {
                        setMisc(!misc);
                    }}
                >
                    기타
                </Category>
            </div>
            <div style={{width: "80%", height: "400px", display: "flex", margin: "auto", justifyContent: "center", marginTop: "10px"}}>
                <img alt="main page" src={mainpage} />
            </div>
            <div style={{width: "80%", margin: "auto"}}>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                    {post_list.map((el, idx) => {
                        return (
                            <div key={el.id}>
                                <Post {...el}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <Write onClick={() => nav('/write')}>+</Write>
            </div>
        </div>
    )
};

const Category = styled(ToggleButton) ({
    border: "1px solid grey",
    borderRadius: "25px",
    margin: "10px"
})

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