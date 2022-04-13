import axios from 'axios';

const api = axios.create({
    baseURL: 'http://13.209.155.82',
    headers: {
        'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
    },
});

// cookie?
api.interceptors.request.use(function (config) {
	const accessToken = document.cookie.split('=')[1];
	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
	return config;
});


export const apis = {
	// article
	add: (contents) => api.post('/api/posts', contents),
	edit: (id, contents) => api.put(`api/articles/${id}`, contents),
	del: (id) => api.delete(`api/articles/${id}`),
	posts: () => api.get('/api/posts'),
	article: (id) => api.get(`/api/articles/${id}`),
	search: (value) => api.get(`/api/articles/search?query=${value}`),

	// comment
	addComment: (id, content) =>
		api.post(`/api/articles/${id}/comments`, { content }),
	comments: (id) => api.get(`/api/articles/${id}/comments`),
	delComment: (id, coId) => api.delete(`/api/articles/${id}/comments/${coId}`),
	editComment: (id, coId, content) =>
		api.put(`/api/articles/${id}/comments/${coId}`, { content }),

	// user
	login: (id, pwd) => api.post('/user/login', { username: id, password: pwd }),
	signup: (id, username, valueCheck) =>
		api.post('/user/signup', {
			username: id,
			nickname: username,
			password: valueCheck,
		}),
	userInfo: () => api.get(`/myinfo`),
	userPassword: (pw) => api.post(`/myinfo`, pw),
	userNewPassword: (pw) => api.put(`/myinfo`, pw),
};