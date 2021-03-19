import { loginRequest } from "../../../requests/auth/login";
import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS } from "../../types/auth";

export const submittingLoginPending = () => (dispatch) => {
	dispatch({ type: LOGIN_PENDING });
};

export const submitLoginDetail = (loginDetail) => async (dispatch) => {
	dispatch(submittingLoginPending());
	const { status, message } = await loginRequest(loginDetail);
	if (!status) {
		dispatch({ type: LOGIN_FAILED });
		return { status, message };
	}
	dispatch({ type: LOGIN_SUCCESS });
	// dispatch request to get user info
	return { status };
};
