import * as types from './actionType';
import axios from 'axios';


const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,

});

const userDeleted = () => ({
    type: types.DELETE_USER
   

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

export const deleteUser = (id) => {

    return function (dispatch) {
        axios.delete(`http://127.0.0.1:8000/api/deleteUsers/${id}`).then((resp) => {
            // console.log('fetched');
            dispatch(userDeleted());
            // dispatch(loadUsers());
            

        }).catch((error) => console.log(error));
    }

}

export const addUser = (user) => {

    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`,user).then((resp) => {
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