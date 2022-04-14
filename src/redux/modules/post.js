import {createAction, handleActions} from "redux-actions"
import {produce} from "immer"
import { apis } from "../../shared/api"
import history from "../.."


//action
const GET_POST = "GET_POST"
const ADD_POST = "ADD_POST"
const FILTER = "FILTER"
const LOAD_ONE = "LOAD_ONE"
const EDIT = "EDIT"
//action creators
const getPost = createAction(GET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));
const filterPost = createAction(FILTER, (category) => ({category}));
const loadOne = createAction(LOAD_ONE, (post_data) => ({post_data}));
const editPost = createAction(EDIT, (post) => ({post}))

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

const loadOneDB = (id) => {
    return async function (dispatch, getState) {
        await apis
                        .post(id)
                        .then((res) => {
                            dispatch(loadOne(res.data))
                        })
                        .catch((err) => {
                            console.log(err)
                        })

    }
}


const addPostDB = (content) => {
    return function (dispatch, getState) {
        console.log(content)
        apis
                        .add(content)
                        .then(() => {
                                // dispatch(addPost(content));
                                history.push('/')
                        })
                        .catch((err) => {
                            window.alert('로그인한 회원만 작성할 수 있습니다')
                            console.log(err)
                        })
    }
}

const editPostDB = (id, content) => {
    console.log(id, content)
    return function (dispatch, getState) {
        // apis
        //             .edit(id, content)
    }
}

const joinPostDB = (id, token) => {
    return function (dispatch, getState) {
        apis
                    .join(id, token)
                    .then((res) => {
                        window.location.reload();
                    })
                    .catch((err) => {
                        console.log(err)
                    })
    }
}

const leftPostDB = (id) => {
    return function (dispatch, getState) {
        apis
                    .leave(id)
                    .then((res) => {
                        window.location.reload();
                    })
                    .catch((err) => {
                        console.log(err)
                    })
    }
}

const filterDB = (category) => {
    console.log(category)
    return function (dispatch) {
        apis
                    .filter(category)
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
    [LOAD_ONE]: (state, action) => produce(state, (draft) => {
        draft.list.push(action.payload.post_data)
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
    }),

    [FILTER]: (state, action) => produce(state, (draft) => {
        draft.list =  action.payload.category
    }),
}, initialState
);


const actionCreators = {
    getPostDB,
    joinPostDB,
    addPostDB,
    filterDB,
    loadOneDB,
    editPostDB,
    leftPostDB,
};

export { actionCreators };