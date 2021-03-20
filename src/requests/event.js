import axios from "axios";

export const getEventById = async (id) => {
	const getEventUrl = `${process.env.BACKEND_URL}/api/v1/events/${id}`;
	// try {
	// const event = await axios.get(getEventUrl);
	return {
		address: "This is an address",
		district: "District 9",
		coordinates: [10, 10],
		name: "The Coffee House",
		category: 1,
		max: 10,
		host: {
			name: "Lam",
		},
		description: "Work and Play",
		time: 10,
		date: "30-08-2021",
	};
	// } catch (err) {
	// 	console.log(err);
	// }
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
