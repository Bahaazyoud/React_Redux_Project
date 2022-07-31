import * as types from './actionType';
import axios from 'axios';


const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,

});
const getPosts = (posts) => ({
    type: types.GET_POSTS,
    payload: posts,

});
const getComments = (comments) => ({
    type: types.GET_COMMENTS,
    payload: comments,

});

const userDeleted = () => ({
    type: types.DELETE_USER
   

});
const postDeleted = () => ({
    type: types.DELETE_POST
   

});
const commentDeleted = () => ({
    type: types.DELETE_COMMENT
   

});


const userAdded = () => ({
    type: types.ADD_USER,
   

});


const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload:user,
   

});

const userUpdated = () => ({
    type: types.UPDATE_USER,
   

});

export const loadUsers = () => {

    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/api/Users').then((resp) => {
            console.log('fetched');
            dispatch(getUsers(resp.data));
        }).catch((error) => console.log(error));
    }

}
export const loadPosts= () => {

    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/api/Posts').then((resp) => {
            console.log('fetched');
            dispatch(getPosts(resp.data));
        }).catch((error) => console.log(error));
    }

}

export const loadComments= () => {

    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/api/Comments').then((resp) => {
            console.log('fetched');
            dispatch(getComments(resp.data));
        }).catch((error) => console.log(error));
    }

}

export const deleteUser = (id) => {

    return function (dispatch) {
        axios.delete(`http://127.0.0.1:8000/api/deleteUsers/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(userDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}
export const deletePost= (id) => {

    return function (dispatch) {
        axios.delete(`http://127.0.0.1:8000/api/deletePost/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(postDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}

export const deleteComment= (id) => {

    return function (dispatch) {
        axios.delete(`http://127.0.0.1:8000/api/deleteComment/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(commentDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}

export const addUser = (user) => {

    return function (dispatch) {
        axios.post('http://127.0.0.1:8000/api/addUser',user).then((resp) => {
            // console.log('fetched');
            dispatch(userAdded());         

        }).catch((error) => console.log(error));
    }

}

export const getSingleUser = (id) => {

    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(getUser(resp.data));
            // dispatch(loadUsers());

        }).catch((error) => console.log(error));
    }

}



export const updateUser = (user, id) => {

    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`,user).then((resp) => {
            // console.log('fetched');
            dispatch(userUpdated());
            // dispatch(loadUsers());

        }).catch((error) => console.log(error));
    }

}