import { combineReducers } from "redux";
import auth from "./auth";
import customer from "./customer";
import alert from "./alert";

export default combineReducers({
	auth,
	customer,
	alert,
});
