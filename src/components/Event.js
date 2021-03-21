import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getEventById } from "../requests/event";

export default function Event() {
	// const { id } = useParams();
	// const [event, setEvent] = useState(null);
	// useEffect(() => {
	// 	(async () => {
	// 		const event = await getEventById(id);
	// 		console.log(event);
	// 		setEvent({ ...event[0] });
	// 	})();
	// }, []);
	// if (!event) {
	// 	return <></>;
	// }
	return (
		<div>
			{/* <h1>Event: {event.title}</h1>
			<h1>Date: {event.date}</h1>
			<h1>Time: {event.time}:00</h1>
			<h1>Address: {event.address}</h1>
			<h1>District: {event.district}</h1>
			<h1>Description: {event.description}</h1>
			<h1>
				Host: {event.host.firstName} {event.host.lastName} -{" "}
				{event.host.phoneNumber}
			</h1> */}
		</div>
	);
}
