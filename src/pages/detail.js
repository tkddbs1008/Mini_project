import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from '../redux/modules/post';

import CommentList from '../components/CommentList';


const Detail = (props) => {
    const user = useSelector((state) => state.user.username)
    const token = document.cookie(user)
    const dispatch = useDispatch();
    const param = useParams();
    const id = param.id;
    const post_list = useSelector((state) => state.post.list);
    const post = post_list[id];

    return (
        // production
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
            <button onClick={() => dispatch(postActions.joinPostDB(id, token))}>참가하기</button>
            <p style={{float: "right"}}>그룹 인원수 {post.group.curTeamCnt}/{post.group.maxTeamOf} 명</p>
            <div style={{border: "1px solid black", marginTop: "20px", borderRadius: "15px"}}>
                <p>참가한 인원들</p>
            </div>
            <CommentList/>
        </div>

        //test
        // <div style={{margin: "auto", width: "80%"}}>
        //     <div style={{border: "1px solid black", margin: "auto", marginTop: "20px", padding: "16px", borderRadius: "15px"}}>
        //         <div>
        //             <h1 style={{marginTop: "0px"}}>{props.title}</h1>
        //         </div>
        //         <div style={{display: "inline-flex"}}>
        //             <p style={{margin: "0px"}}>카테고리: {props.category.name}</p>
        //         </div>
        //         <div style={{float: "right"}}>
        //             <p style={{margin: "0px"}}>{props.createdAt}</p>
        //         </div>
        //         <div>
        //             <p>작성자: {props.nickname}</p>
        //         </div>
        //         <div>
        //             <p style={{marginTop: "30px"}}>{props.content}</p>
        //         </div>
        //     </div>
        //     <button onClick={() => dispatch()}>참가하기</button>
        //     <p style={{float: "right"}}>그룹 인원수 {props.group.curTeamCnt}/{props.group.maxTeamOf} 명</p>
        //     <div style={{border: "1px solid black", marginTop: "20px", borderRadius: "15px"}}>
        //         <p>참가한 인원들</p>
        //     </div>
        //     <div style={{marginTop: "20px"}}>
        //         <CommentList/>
        //     </div>
        // </div>
    )
}

Detail.defaultProps = {
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



export default Detail;