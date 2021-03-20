import axios from "axios";

export const getCafeResult = async (page, limit) => {
	const getCafeUrl = `${process.env.BACKEND_URL}/api/v1/events/get/?page=${page}&limit=${limit}&category=1`;
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
