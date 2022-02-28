import { combineReducers } from "redux";
import postReducer from "./post.js";

const rootReducer = combineReducers({
posts:postReducer
});

export default rootReducer;