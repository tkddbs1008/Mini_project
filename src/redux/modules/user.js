import {createAction, handleActions} from "redux-actions"
import {produce} from "immer"
import axios from 'axios'
import { apis } from "../../shared/api"

//action
const SET_USER = "SET_USER"


//action creator
const setUser = createAction(SET_USER, (user) => ({user}));


const initialState = {
	username: null,
	nickname: null,
	is_login: false,
};

//middleware
const registerDB = (id, nickname, valueCheck) => {
    return function (dispatch, getState) {
        apis
                .signup(id, nickname, valueCheck)
                .then((res) => {

                })
                .catch((err) => {
                    window.alert('정보가 올바르지 않아요')
                });
        };
};

const loginDB = (username, password) => {
    return function (dispatch, getState) {
        apis
                .login(username, password)
                .then((res) => {
                    dispatch(setUser({username: username}));
                })
                .catch((err) => {
                    window.alert('없는 회원정보 입니다! 회원가입을 해주세요!')
                });
    };
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
    registerDB,
    loginDB,
};

export { actionCreators };