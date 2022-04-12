import {createAction, handleActions} from "redux-actions"
import {produce} from "immer"
import axios from 'axios'

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
    return function (dispatch, getState) {
        axios.get('http://localhost:3001/posts')
        .then(function (response) {
            console.log(response.data);
            dispatch(getPost(response.data))
        })
    }
}

const addPostDB = (post_data) => {
    return function (dispatch, getState) {
        axios.post('')
        .then(function(response) {
            dispatch(addPost(post_data))
        })
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
};

export { actionCreators };