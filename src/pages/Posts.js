import React from 'react';


//redux
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as userActions } from '../redux/modules/user';

//MUI
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


//Logo
import mainpage from "../images/mainpage.png"

//Component
import Post from '../components/Post';



const Posts = (props) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const post_list = useSelector((state) => state.post.list)
    const is_login = useSelector((state) => state.user.is_login)

    const [Category, setFilter] = React.useState();

    const handleFilter = (event, newFilter) => {
        setFilter(newFilter)
    };

    console.log(is_login)

    React.useEffect(() => {
        dispatch(postActions.getPostDB());
        if(Category === '프론트'){
            dispatch(postActions.filterDB(Category))
        }
        if(Category === '백앤드'){
            dispatch(postActions.filterDB(Category))
        }
        if(Category === '기타'){
            dispatch(postActions.filterDB(Category))
        }
    }, [])

    if(!post_list){
        return;
    }

    return (
        <div>
            <div style={{ width: "80%", display: "flex", margin: "auto", justifyContent: "center"}}>
                <ToggleButtonGroup
                    value={Category}
                    exclusive
                    onChange={handleFilter}
                    >
                    <ToggleButton value="프론트" >
                        프론트 앤드
                    </ToggleButton>
                    <ToggleButton value="백앤드" >
                        백앤드
                    </ToggleButton>
                    <ToggleButton value="기타" >
                        기타
                    </ToggleButton>
                </ToggleButtonGroup>
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
                {is_login ? <Write onClick={() => nav('/write')}>+</Write> : null}
            </div>
        </div>
    )
};

Posts.defaultProps = {
    id: 1,
            title: "Axios",
            content: "같이 axios 공부할사람",
            nickname: "sammy",
            group: {
                maxTeamOf: 4,
                curTeamCnt: 1
            },
            createdAt: "2021.04.08",
            category: {
                name: "프론트"
            }
}

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