import {
	ALERT_ERROR,
	ALERT_INFO,
	ALERT_SUCCESS,
	ALERT_WARNING,
	CLOSE_ALERT,
} from "../types/alert";

const initialState = {
	isOpen: false,
	message: "",
	severity: "error",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ALERT_SUCCESS:
			return {
				...state,
				isOpen: true,
				severity: "success",
				message: action.payload,
			};
		case ALERT_INFO:
			return {
				...state,
				isOpen: true,
				severity: "info",
				message: action.payload,
			};
		case ALERT_WARNING:
			return {
				...state,
				isOpen: true,
				severity: "warning",
				message: action.payload,
			};
		case ALERT_ERROR:
			return {
				...state,
				isOpen: true,
				severity: "error",
				message: action.payload,
			};
		case CLOSE_ALERT:
			return {
				...state,
				isOpen: false,
				message: "",
			};
		default: {
			return state;
		}
	}
};
