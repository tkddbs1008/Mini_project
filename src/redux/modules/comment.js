import { createAction, handleActions } from 'redux-actions';
import { apis } from '../../shared/api';

// action
const ADD = 'comment/ADD';
const LOAD = 'comment/LOAD';
const DELETE = 'comment/DELETE';
const EDIT = 'comment/EDIT';

// action creator
const addComment = createAction(ADD, (comment) => ({ comment }));
const getComments = createAction(LOAD, (comment) => ({ comment }));
const delComment = createAction(DELETE, (coId) => ({ coId }));
const editComment = createAction(EDIT, (coId, newContent) => ({
}));

//middleware
const addCommentDB = (content) => {
	console.log(content)
	return async function (dispatch, getState) {
		apis.addComment(content)
		window.location.reload()
	}
}


// initialState
const initialState = {
	comment: null,
	comments: [],
};



//reducer
// export default handleActions({

// })

const actionCreators = {
    addCommentDB,
};

export { actionCreators };