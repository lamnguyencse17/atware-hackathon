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
		<div className='container m-auto bg-gray-100'>
			<div className='text-md'>Appointment's detail</div>
			<div className='mt-4 flex flex-row'>
				<table class='table-auto'>
					<thead>
						<th>
							<td>Event</td>
							<td>Description</td>
							<td>Date</td>
							<td>Time</td>
							<td>Address</td>
							<td>District</td>
							<td>Host's name</td>
							<td>Phone number</td>
						</th>
					</thead>
					<tbody>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
			</div>
			{/* 
			<h1>Event: {event.title}</h1>
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
