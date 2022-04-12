import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Detail = (props) => {
    const dispatch = useDispatch();
    const param = useParams();
    const id = param.id;
    const post_list = useSelector((state) => state.post.list);
    const post = post_list[id];

    return (
        <div>
            <div>
                <h1>{post.title}</h1>
            </div>
            <div>
                <p>카테고리: {post.category.name}</p>
            </div>
            <div>
                <p>작성날: {post.createdAt}</p>
            </div>
            <div>
                <p>작성자: {post.nickname}</p>
            </div>
            <div>
                <p>{post.content}</p>
            </div>
            <div>
                <p>그룹 인원수 {post.group.curTeamCnt}/{post.group.maxTeamOf} 명</p>
            </div>
        </div>
    )
}

export default Detail;