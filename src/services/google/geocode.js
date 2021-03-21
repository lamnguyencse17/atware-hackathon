import { getGoogleServices } from "../google";
import {
	OK,
	ERROR,
	INVALID_REQUEST,
	ZERO_RESULTS,
} from "../../constants/googleResponse";

let Geocode;

export const initGeocode = () => {
	const GoogleServices = getGoogleServices();
	Geocode = new GoogleServices.Geocoder();
};

export const initialGeocode = (geocodeRequest) =>
	new Promise((resolve, reject) => {
		Geocode.geocode(geocodeRequest, (geocodeResults, geocodeStatus) => {
			switch (geocodeStatus) {
				case OK:
					{
						const formattedGeoResults = geocodeResults.map((result) => {
							const { place_id, formatted_address } = result;
							return { place_id, description: formatted_address };
						});
						resolve({ formattedGeoResults, status: true });
					}
					break;
				case ERROR:
					{
						reject({
							status: false,
							message: "Error contacting Google server",
						});
					}
					break;
				case ZERO_RESULTS:
					{
						reject({ status: false, message: "No results found" });
					}
					break;
				case INVALID_REQUEST: {
					reject({ status: false, message: "Invalid request" });
				}
			}
		});
	});

export const geoCode = (geocodeRequest) =>
	new Promise((resolve, reject) => {
		Geocode.geocode(geocodeRequest, (geocodeResults, geocodeStatus) => {
			switch (geocodeStatus) {
				case OK:
					{
						const {
							geometry: { location },
						} = geocodeResults[0];
						const lat = location.lat();
						const lng = location.lng();
						resolve({ lat, lng });
					}
					break;
				case ERROR:
					{
						reject("Error contacting Google server");
					}
					break;
				case ZERO_RESULTS:
					{
						reject("No results found");
					}
					break;
				case INVALID_REQUEST: {
					reject("Invalid request");
				}
			}
		});
	});
