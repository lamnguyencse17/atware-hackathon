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
		await axios.post(
			acceptEventUrl,
			{},
			{
				headers: { Authorization: token },
			}
		);
	} catch (err) {
		console.log(err);
	}
};

export const interactEvent = async (eventId, token) => {
	const interactEventUrl = `${process.env.BACKEND_URL}/api/v1/events/interact/${eventId}`;
	try {
		await axios.post(
			interactEventUrl,
			{},
			{ headers: { Authorization: token } }
		);
	} catch (err) {
		console.log(err);
	}
};

export const getMyEvents = async (page, limit, hostId, token) => {
	const getMyEventsUrl1 = `${process.env.BACKEND_URL}/api/v1/events/getDetail/?page=${page}&limit=${limit}&host=${hostId}`;
	const getMyEventsUrl2 = `${process.env.BACKEND_URL}/api/v1/events/getMyListEvent/?page=${page}&limit=${limit}&host=${hostId}`;
	try {
		const eventResult1 = await axios.get(getMyEventsUrl1, {
			headers: { Authorization: token },
		});
		const eventResult2 = await axios.get(getMyEventsUrl2, {
			headers: { Authorization: token },
		});
		console.log(eventResult2.data);
		return {
			totalItems: eventResult1.data.totalItems + eventResult2.data.totalItems,
			result: [...eventResult1.data.result, ...eventResult2.data.final_event],
		};
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
		await axios.post(
			acceptUrl,
			{ a: "1" },
			{ headers: { Authorization: token } }
		);
	} catch (err) {
		console.log(err);
	}
};

export const findEvent = async (district, time, date, limit, page) => {
	const findEventUrl = `${process.env.BACKEND_URL}/api/v1/events/get/?page=${page}&limit=${limit}&district=${district}&time=${time}&date=${date}`;
	console.log(findEventUrl);
	try {
		const eventResult = await axios.get(findEventUrl);
		const {
			data: { totalItems, result },
		} = eventResult;
		return { totalItems, result };
	} catch (err) {
		console.log(err);
	}
};
