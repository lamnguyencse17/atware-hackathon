import axios from "axios";

export const getEventById = async (id) => {
	const getEventUrl = `${process.env.BACKEND_URL}/api/v1/events/get/?page=1&limit=1&_id=${id}`;
	try {
		const event = await axios.get(getEventUrl);
		const {
			data: { result },
		} = event;
		return result;
	} catch (err) {
		console.log(err);
	}
};

export const createEvent = async (eventDetail) => {
	const createEventUrl = `${process.env.BACKEND_URL}/api/v1/events/create`;
	try {
		const eventResult = await axios.post(createEventUrl, eventDetail);
		const {
			data: { id },
		} = eventResult;
		return id;
	} catch (err) {
		console.log(err);
	}
};

export const acceptEvent = async (eventId, userId) => {
	const acceptEventUrl = `${process.env.BACKEND_URL}/api/v1/events/accept/${eventId}?user_id=${userId}`;
};
