import {createAction, handleActions} from "redux-actions"
import {produce} from "immer"
import { apis } from "../../shared/api"
import history from "../.."


//action
const GET_POST = "GET_POST"
const ADD_POST = "ADD_POST"

//action creators
const getPost = createAction(GET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}))

//initialState
const initialState = {
    list: [],
}


//middleware
const getPostDB = () => {
     return async function (dispatch, getState) {
            try {
			const { data } = await apis.posts();
			dispatch(getPost(data));
        } catch {
            console.log("불러올수 없어요")
        }
    }
}

const addPostDB = (contents) => {
    return function (dispatch, getState) {
        console.log(contents)
        apis
                        .add(contents)
                        .then(() => {
                                dispatch(addPost(contents));
                                history.push('/')
                        })
                        .catch((err) => {
                            window.alert('로그인한 회원만 작성할 수 있습니다')
                            console.log(err)
                        })
    }
}

const joinPostDB = (postId, token) => {
    return function (dispatch, getState) {
        apis
                    .join(postId, token)
    }
}


//reducer
export default handleActions({
    [GET_POST]: (state, action) => produce(state, (draft) => {
        draft.list.push(...action.payload.post_list)
        draft.list = draft.list.reduce((acc, cur) => {
          if (acc.findIndex((a) => a.id === cur.id) === -1) {
            return [...acc, cur];
          } else {
            acc[acc.findIndex((a) => a.id === cur.id)] = cur;
            return acc;
          }
        }, []);
    }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
    })
}, initialState
);


const actionCreators = {
    getPostDB,
    joinPostDB,
    addPostDB,
};

export { actionCreators };