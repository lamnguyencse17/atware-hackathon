import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { getEventById } from "../requests/event";
import { initGoogleMapService } from "../services/google";
import { geoCode } from "../services/google/geocode";
import { initMap } from "../services/google/map";
import loadMapScript from "../utils/loadMapScript";

export default function Event() {
	const [isLoaded, setLoaded] = useState(false);
	const { id } = useParams();
	const mapRef = useRef(null);
	const [event, setEvent] = useState(null);
	useEffect(() => {
		let mapScript;
		loadMapScript.then((script) => {
			mapScript = script;
			initGoogleMapService();
			setLoaded(true);
		});
		return () => {
			document.body.removeChild(mapScript);
		};
	}, []);
	useEffect(() => {
		(async () => {
			const event = await getEventById(id);
			setEvent({ ...event[0] });
		})();
	}, []);
	useEffect(() => {
		if (event === null || !isLoaded) {
			return;
		}
		const geocodeRequest = {
			placeId:
				event.place_id === undefined
					? "ChIJ-6NhwcMudTERHmnMoUfNd-8"
					: event.place_id,
		};
		try {
			geoCode(geocodeRequest).then(({ lat, lng }) => {
				initMap(mapRef, { zoom: 17, center: { lat, lng } });
			});
		} catch (err) {
			console.log(err);
		}
	}, [event, isLoaded]);
	if (!event) {
		return <></>;
	}
	return (
		<div className='container m-auto bg-gray-100'>
			<div className='text-md'>Appointment's detail</div>
			<div className='flex flex-row mt-4'>
				<table className='table-auto'>
					<thead>
						<transform>
							<th>Event</th>
							<th>Description</th>
							<th>Date</th>
							<th>Time</th>
							<th>Address</th>
							<th>District</th>
							<th>Host's name</th>
							<th>Phone number</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{event.title}</td>
							<td>{event.description}</td>
							<td>{event.date}</td>
							<td>{event.time}</td>
							<td>{event.address}</td>
							<td>{event.district}</td>
							<td>
								{event.host.firstName === undefined
									? "Lam"
									: event.host.firstName}{" "}
								{event.host.lastName === undefined
									? "Nguyen"
									: event.host.lastName}
							</td>
							<td>
								{event.host.phoneNumber === undefined
									? "0919696148"
									: event.host.phoneNumber}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div id='map' ref={mapRef} className='w-full h-64'></div>
		</div>
	);
}
