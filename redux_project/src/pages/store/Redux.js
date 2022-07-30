import {createSlice,configureStore} from '@reduxjs/toolkit';
const initialState = {login:false};
const userData= createSlice({
    name:'login',
    initialState:initialState,
    reducers:{
        login(state){
            state.login = true;
        },
        logout(state){
            state.login = false;
        }
    }

})
const store1 = configureStore({
    reducer: userData.reducer
});
export const userActions = userData.actions;
export default store1;