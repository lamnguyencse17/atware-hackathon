import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleWare = [thunk];

const store =
	process.env.NODE_ENV !== "production"
		? createStore(
				rootReducer,
				composeWithDevTools(applyMiddleware(...middleWare))
		  )
		: createStore(rootReducer, applyMiddleware(...middleWare));

export default store;
