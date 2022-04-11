import {createAction, handleActions} from "redux-actions"
import {produce} from "immer"
import axios from 'axios'

//action
const GET_POST = "GET_POST"


//action creators
const getPost = createAction(GET_POST, (post_list) => ({post_list}));

//initialState
const initialState = {
    list: [],

}

//middleware
const getPostFB = () => {
    return function (dispatch, getState) {
        axios.get('http://localhost:3001/posts')
        .then(function (response) {
            console.log(response.data);
            dispatch(getPost(response.data))
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
}, initialState
);


const actionCreators = {
    getPostFB,
};

export { actionCreators };