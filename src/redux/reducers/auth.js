import { LOGIN_FAILED, LOGIN_SUCCESS } from "../types/auth";

const initialState = {
	isLogin: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS: {
			return { ...state, isLogin: true };
		}
		case LOGIN_FAILED: {
			return { ...initialState };
		}
		default: {
			return state;
		}
	}
};
