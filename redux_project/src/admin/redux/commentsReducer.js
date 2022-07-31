import * as types from './actionType';


const initialState = {

    comments: [],
    comment: {},
    loading: true
}

const commentsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_COMMENTS:


            return {
                ...state,
                comments: action.payload,
                loading: false

            };
        case types.DELETE_COMMENT:

            return {
                ...state,
                loading: false

            };


        default:
            return state;
    }
}

export default commentsReducers;