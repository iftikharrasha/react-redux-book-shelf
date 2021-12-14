import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "./reducers/bookReducer";

const rootReducer = combineReducers({
    books: bookReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;