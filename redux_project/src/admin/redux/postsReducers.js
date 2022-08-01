import * as types from './actionType';


const initialState ={
    
    posts:[],
    post:{},
    loading: true
}

const postsReducers=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_POSTS:
        

            return {
                ...state,
                posts:action.payload,
                loading:false

            };
            case types.DELETE_POST:

            return {
                ...state,
                loading:false

            };
           
               
        default:
            return state;
    }
}

export default postsReducers;