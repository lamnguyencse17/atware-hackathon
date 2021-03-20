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

export const acceptEvent = async (eventId, userId, token) => {
	const acceptEventUrl = `${process.env.BACKEND_URL}/api/v1/events/accept/${eventId}?user_id=${userId}`;
	try {
		await axios.put(acceptEventUrl, {
			headers: { Authorization: token },
		});
	} catch (err) {
		console.log(err);
	}
};

export const interactEvent = async (eventId) => {
	const interactEventUrl = `${process.env.BACKEND_URL}/api/v1/events/interact/${eventId}`;
	try {
		await axios.put(interactEventUrl);
	} catch (err) {
		console.log(err);
	}
};

export const getMyEvents = async (page, limit, hostId, token) => {
	const getMyEventsUrl = `${process.env.BACKEND_URL}/api/v1/events/getDetail/?page=${page}&limit=${limit}&host=${hostId}`;
	try {
		const eventResult = await axios.get(getMyEventsUrl, {
			headers: { Authorization: token },
		});
		const {
			data: { totalItems, result },
		} = eventResult;
		return { totalItems, result };
	} catch (err) {
		console.log(err);
	}
};

export const deleteEvent = async (eventId, token) => {
	const deleteEventUrl = `${process.env.BACKEND_URL}/api/v1/events/delete/${eventId}`;
	try {
		await axios.delete(deleteEventUrl, {
			headers: { Authorization: token },
		});
	} catch (err) {
		console.log(err);
	}
};

export const acceptRequest = async (eventId, userId, token) => {
	const acceptUrl = `${process.env.BACKEND_URL}/api/v1/events/accept/${eventId}?user_id=${userId}`;
	try {
		await axios.put(acceptUrl, {
			headers: { Authorization: token },
		});
	} catch (err) {
		console.log(err);
	}
};

export const findEvent = async (district, time, date) => {
	const findEventUrl = `${process.env.BACKEND_URL}/api/v1/events/get/?page=1&limit=10&district=${district}&time=${time}&date=${date}`;
};
