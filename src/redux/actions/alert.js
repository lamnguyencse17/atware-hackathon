import {
	ALERT_INFO,
	ALERT_WARNING,
	ALERT_ERROR,
	ALERT_SUCCESS,
	CLOSE_ALERT,
} from "../types/alert";

export const alertWarning = (message) => (dispatch) => {
	dispatch({ type: ALERT_WARNING, payload: message });
};
export const alertInfo = (message) => (dispatch) => {
	dispatch({ type: ALERT_INFO, payload: message });
};
export const alertError = (message) => (dispatch) => {
	dispatch({ type: ALERT_ERROR, payload: message });
};
export const alertSuccess = (message) => (dispatch) => {
	dispatch({ type: ALERT_SUCCESS, payload: message });
};

export const closeAlert = () => (dispatch) => {
	dispatch({ type: CLOSE_ALERT });
};
