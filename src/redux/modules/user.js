import {createAction, handleActions} from "redux-actions"
import {produce} from "immer"

//action
const SET_USER = "SET_USER"


//action creator
const setUser = createAction(SET_USER, (user) => ({user}));

const initialState = {
    user: null,
    is_login: false,
};



//reducer
export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft) => {
        // setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;

    })
}, initialState
);


const actionCreators = {
    setUser,
};

export { actionCreators };