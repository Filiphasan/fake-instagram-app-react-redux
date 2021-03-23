import commentReducer from './commentReducer'
import postsReducer from './postsReducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    postsReducer,
    commentReducer
});
export default reducer;