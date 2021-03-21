import { getGoogleServices } from "../../google";
import { getMapInstance } from "../map";

let markers = {};
let listeners = {};

export const getMarkers = () => {
	return markers;
};

export const putMarker = (name, { lat, lng }) => {
	const Map = getMapInstance();
	const GoogleServices = getGoogleServices();
	let marker = new GoogleServices.Marker({
		position: { lat, lng },
		map: Map,
	});
	markers[name] = marker;
};
