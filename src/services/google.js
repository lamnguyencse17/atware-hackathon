import { initAutocomplete } from "./google/autocomplete";
import { initGeocode } from "./google/geocode";

let GoogleServices;
let isGoogleServiceInit = false;

export const getGoogleServices = () => {
	if (!isGoogleServiceInit) {
		throw "Google Service is not ready";
	}
	return GoogleServices;
};

export const initGoogleMapService = () => {
	isGoogleServiceInit = true;
	GoogleServices = window.google.maps;
	initGeocode();
	initAutocomplete();
};
