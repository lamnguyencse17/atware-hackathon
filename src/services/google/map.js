import { DEFAULT_CENTER_COORDINATES } from "../../constants/map";
import { getGoogleServices } from "../google";
// import { initInfowindow } from "./map/infowindow";

let Map;

export const initMap = (mapRef, { center, zoom }) => {
	const GoogleServices = getGoogleServices();
	Map = new GoogleServices.Map(mapRef.current, { center, zoom });
	// initInfowindow();
};

export const getMapInstance = () => {
	return Map;
};

export const setMapZoom = (zoom) => {
	Map.setZoom(zoom);
};

export const setMapCenter = ({ lat, lng }) => {
	Map.setCenter({ lat, lng });
};

export const fitBounds = ({ destination, origin }) => {
	if (destination === undefined || origin === undefined) {
		return;
	}
	if (destination === DEFAULT_CENTER_COORDINATES) {
		setMapCenter(origin);
		setMapZoom(18);
		return;
	}
	const bounds = new window.google.maps.LatLngBounds();
	bounds.extend(origin);
	bounds.extend(destination);
	Map.fitBounds(bounds);
};

export const fitBoundsWithBiker = (bikers) => {
	const bounds = Map.getBounds();
	bikers.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
	Map.fitBounds(bounds);
};
