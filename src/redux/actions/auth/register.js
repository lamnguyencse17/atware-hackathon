import { registerRequest } from "../../../requests/auth/register";
import {
	REGISTER_FAILED,
	REGISTER_PENDING,
	REGISTER_SUCCESS,
} from "../../types/auth";

export const submittingRegisterPending = () => (dispatch) => {
	dispatch({ type: REGISTER_PENDING });
};

export const submitRegisterDetail = (registerDetail) => async (dispatch) => {
	dispatch(submittingRegisterPending());
	const { status, message } = await registerRequest(registerDetail);
	if (!status) {
		dispatch({ type: REGISTER_FAILED });
		return Promise.reject(message);
	}
	dispatch({ type: REGISTER_SUCCESS });
	// dispatch request to get user info
	return Promise.resolve();
};
