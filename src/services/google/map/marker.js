import { selectBiker } from "../../../redux/actions/bikers";
import store from "../../../redux/store";
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
	if (markers[name] !== undefined) {
		removeMarker(name);
	}
	let marker = new GoogleServices.Marker({
		position: { lat, lng },
		map: Map,
	});
	markers[name] = marker;
};

export const putBikerMarkerOnMap = (bikers) => {
	const Map = getMapInstance();
	bikers.forEach(({ id, name, lat, lng }) => {
		const GoogleServices = getGoogleServices();
		if (markers[id] !== undefined) {
			removeMarker(id);
		}
		const marker = new GoogleServices.Marker({
			position: { lat, lng },
			map: Map,
			label: {
				color: "white",
				fontWeight: "bold",
				text: name,
			},
		});
		markers[id] = marker;
		const listener = marker.addListener("click", () => {
			store.dispatch(selectBiker(name, id));
		});
		listeners[id] = listener;
	});
};

export const removeMarker = (name) => {
	markers[name].setMap(null);
	markers[name].setVisible(false);
	markers[name] = null;
	delete markers[name];
};

export const removeAllMarker = () => {
	Object.keys(markers).forEach((marker) => {
		removeMarker(marker);
		if (listeners[marker] !== undefined) {
			listeners[marker].remove();
		}
	});
};
