import {combineReducers} from 'redux'
import commentsReducers from './commentsReducer';
import postsReducers from './postsReducers';
import usersReducers from './reducer';



const rootReducer=combineReducers({
    data: usersReducers,
    posts: postsReducers,
    comments: commentsReducers,

});

export default rootReducer;