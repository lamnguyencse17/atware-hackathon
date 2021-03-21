import { getGoogleServices } from "../google";

let Direction;

export const initDirection = () => {
	const GoogleServices = getGoogleServices();
	Direction = new GoogleServices.DirectionsService();
};

export const getDirection = ({ origin, destination }) =>
	new Promise((resolve, reject) => {
		const directionRequest = {
			origin,
			destination,
			travelMode: "DRIVING",
		};
		Direction.route(directionRequest, ({ routes }, directionStatus) => {
			const { overview_path } = routes[0];
			const path = overview_path.map((step) => {
				return { lat: step.lat(), lng: step.lng() };
			});
			resolve(path);
		});
	});
