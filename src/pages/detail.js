import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommentWrite from '../components/CommentWrite';


const Detail = (props) => {
    const dispatch = useDispatch();
    const param = useParams();
    const id = param.id;
    const post_list = useSelector((state) => state.post.list);
    const post = post_list[id];

    return (
        <div style={{margin: "auto", width: "80%"}}>
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
            </div>
            <button>참가하기</button>
            <p style={{float: "right"}}>그룹 인원수 {post.group.curTeamCnt}/{post.group.maxTeamOf} 명</p>
            <div style={{border: "1px solid black", marginTop: "20px", borderRadius: "15px"}}>
                <p>참가한 인원들</p>
            </div>
            <CommentWrite/>
        </div>
    )
}

export default Detail;