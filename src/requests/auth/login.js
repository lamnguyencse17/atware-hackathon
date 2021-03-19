import axios from "axios";

export const loginRequest = async (loginDetail) => {
	const loginURL = `${process.env.BACKEND_SERVER}/login`;
	try {
		const loginResult = await axios.post(loginURL, loginDetail);
		// waiting for API
		return { status: true };
	} catch (err) {
		const {
			message = "Something went wrong. Please contact developers",
		} = err.response.data;
		return { status: false, message };
	}
};
