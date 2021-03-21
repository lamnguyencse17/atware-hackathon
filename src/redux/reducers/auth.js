import { LOGIN_FAILED, LOGIN_SUCCESS } from "../types/auth";

const initialState = {
	isLogin: true,
	token:
		"Babear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDU2MDcwYTI0MWVmYTI0Y2VlNjQzZTIiLCJpYXQiOjE2MTYyOTIwODJ9.6jhhuPmPh35vJAycGkNH2pK9uEAyoFeydphgydbL0Dc",
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
