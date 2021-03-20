import axios from "axios";

export const getCustomerRequest = async () => {
	const getCustomerURL = `${process.env.BACKEND_SERVER}/customer/get-customer`;
	const config = {};
	try {
		const getCustomerResponse = await axios.get(getCustomerURL, config);
		const {
			data: { data },
		} = getCustomerResponse;
		return { status: true, customerData: data[0] };
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

export const updateCustomerRequest = async (updateCustomerInfo) => {
	const updateCustomerURL = `${process.env.BACKEND_SERVER}/customer/update-customer`;
	const config = {};
	try {
		await axios.post(updateCustomerURL, updateCustomerInfo, config);
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

export const updateCustomerPasswordRequest = async (updatedPassword) => {
	const updateCustomerPasswordURL = `${process.env.BACKEND_SERVER}/customer/update-password`;
	const config = {};
	try {
		await axios.post(updateCustomerPasswordURL, updatedPassword, config);
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

export const getMe = async (token) => {
	const getMeUrl = `${process.env.BACKEND_URL}/api/v1/users/getMe`;
	try {
		const userResult = await axios.get(getMeUrl, {
			headers: {
				Authorization: token,
			},
		});
		return userResult.data;
	} catch (err) {
		console.log(err);
	}
};
