import {createAction, handleActions} from "redux-actions"
import {produce} from "immer"

//action
const GET_POST = "GET_POST"


//action creators
const getPost = createAction(GET_POST, (post) => ({post}));

//initialState
const initialState = {

}

//middleware



//reducer
export default handleActions({
    [GET_POST]: (state, action) => produce(state, (draft) => {

    }),
}, initialState
);


const actionCreators = {
    getPost,
};

export { actionCreators };