import { LOGIN_FAILED, LOGIN_SUCCESS } from "../types/auth";

const initialState = {
	isLogin: true,
	token:
		"Babear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2MDcwYTI0MWVmYTI0Y2VlNjQzZTIiLCJpYXQiOjE2MTYyNTA2NTJ9.oq7CmaNE6u3aeBreCH5EMakvQ4K3BEt1XxPQL-FGiQA",
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
