import axios from "axios";

export const getMovieResult = async (page, limit) => {
	const getMovieUrl = `${process.env.BACKEND_URL}/api/v1/events/get/?page=${page}&limit=${limit}&category=2`;
	try {
		const eventResult = await axios.get(getMovieUrl);
		const {
			data: { totalItems, result },
		} = eventResult;
		return { totalItems, result };
	} catch (err) {
		console.log(err);
	}
};
