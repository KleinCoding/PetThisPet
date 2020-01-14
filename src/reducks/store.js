import { createStore, combineReducers, applyMiddleware} from 'redux';
import promise from "redux-promise-middleware";
import authReducer from "./reducers/authReducer";
import postsReducer from "./reducers/postsReducer";
import ratingsReducer from"./reducers/ratingsReducer";

const rootReducer = combineReducers({
  authReducer,
  postsReducer,
  ratingsReducer
})

export default createStore(rootReducer, applyMiddleware(promise))