import {createAction, handleActions} from "redux-actions"
import {produce} from "immer"
import { setCookie, deleteCookie } from "../../shared/Cookie"
import axios from 'axios'
import { apis } from "../../shared/api"
import history from "../.."

//action
const SET_USER = "SET_USER"
const LOG_OUT = "LOG_OUT"

//action creator
const setUser = createAction(SET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));

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
                    history.replace("/login")
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
                    setCookie('token', res.data[1].token, 7);
				    localStorage.setItem('username', res.data[0].username);
                    dispatch(setUser({username: username}));
                    history.replace("/")
                })
                .catch((err) => {
                    window.alert('없는 회원정보 입니다! 회원가입을 해주세요!')
                });
    };
};

const logOutDB = () => {
	return function (dispatch, getState) {
		deleteCookie('token');
		localStorage.removeItem('username');
		dispatch(logOut());
		history.replace('/login');
	};
};

//reducer
export default handleActions({
    [SET_USER]: (state, action) => produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state, action) => produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
    }),
}, initialState
);


const actionCreators = {
    registerDB,
    loginDB,
    logOutDB,
};

export { actionCreators };