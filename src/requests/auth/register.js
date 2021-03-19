import axios from "axios";

export const registerRequest = async (registerDetail) => {
	const registerURL = `${process.env.BACKEND_SERVER}/customer/create-customer`;
	try {
		const registerResponse = await axios.post(registerURL, registerDetail);
		const {
			data: { data },
		} = registerResponse;
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
