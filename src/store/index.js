import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { quoteReducer } from "./quoteReducer";
import { recordReducer } from "./recordReducer";

const rootReducer = combineReducers({
  quote: quoteReducer,
  records: recordReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
