import {combineReducers} from 'redux'
import postsReducers from './postsReducers';
import usersReducers from './reducer';



const rootReducer=combineReducers({
    data: usersReducers,
    posts: postsReducers,

});

export default rootReducer;