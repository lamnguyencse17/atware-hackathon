import axios from "axios";

export const getCafeResult = async (page, limit) => {
	const getCafeUrl = `${process.env.BACKEND_URL}/api/v1/events/get/?page=${page}&limit=${limit}&category=2`;
	console.log(getCafeUrl, page, limit);
	try {
		const eventResult = await axios.get(getCafeUrl);
		const {
			data: { totalItems, result },
		} = eventResult;
		return { totalItems, result };
	} catch (err) {
		console.log(err);
	}
};
