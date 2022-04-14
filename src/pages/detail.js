import React from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from '../redux/modules/post';

import CommentList from '../components/CommentList';


const Detail = (props) => {
    // const user = useSelector((state) => state.user.username)
    const nav = useNavigate();
    const dispatch = useDispatch();
    const param = useParams();
    const id = param.id;
    const post_list = useSelector((state) => state.post.list);
    let post_idx = post_list.findIndex(p => p.id === id);
    if(post_list.length ===1) {
        post_idx = 0
    }
    const post = post_list[post_idx];

    React.useEffect (() => {
        if(post_list.length > 1){
            window.location.reload()
        }
        dispatch(postActions.loadOneDB(id))
    }, [])

    console.log(post_list)
    if(!post){
        return;
    }
    return (
        <div style={{margin: "auto", width: "80%"}}>
            {post.writer ? <button onClick={() => nav(`/post/edit/${id}`)} style={{float: "right"}}>수정하기</button> : null}
            <div style={{border: "1px solid black", margin: "auto", marginTop: "20px", padding: "16px", borderRadius: "15px"}}>
                <div>
                    <h1 style={{marginTop: "0px"}}>{post.title}</h1>
                </div>
                <div style={{display: "inline-flex"}}>
                    <p style={{margin: "0px"}}>카테고리: {post.category.name}</p>
                </div>
                <div style={{float: "right"}}>
                    <p style={{margin: "0px"}}>{post.createdAt}</p>
                </div>
                <div>
                    <p>작성자: {post.nickname}</p>
                </div>
                <div>
                    <p style={{marginTop: "30px"}}>{post.content}</p>
                </div>
                <p style={{float: "right"}}>그룹 인원수 {post.team.curTeamCnt}/{post.team.maxTeamOf} 명</p>
            </div>
            {post.writer ? null : post.joined ? <button onClick={() => {dispatch(postActions.leftPostDB(id))}}>나가기</button> : <button onClick={() => {dispatch(postActions.joinPostDB(id))}}>참가하기</button>}
            <div style={{border: "1px solid black", marginTop: "20px", borderRadius: "15px"}}>
                <p>참가한 인원들</p>
            </div>
            <br/>
            <CommentList {...post}/>
        </div>
    )
}

export default Detail;