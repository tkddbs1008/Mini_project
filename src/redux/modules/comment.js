import { createAction, handleActions } from 'redux-actions';
import { apis } from '../shared/api';

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
	coId,
	newContent,
}));


// initialState
const initialState = {
	comment: null,
	comments: [],
};

