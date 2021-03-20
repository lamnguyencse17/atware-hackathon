import axios from "axios";

export const registerRequest = async (registerDetail) => {
	const registerURL = `${process.env.BACKEND_SERVER}/api/v1/users/signup`;
	try {
		await axios.post(registerURL, registerDetail);
		return { status: true };
	} catch (err) {
		if (err.response === undefined) {
			return { status: false, message: "Not connected to the server" };
		}
		const {
			message = "Something went wrong. Please contact developers",
		} = err.response.data;
		return { status: false, message };
	}
};
