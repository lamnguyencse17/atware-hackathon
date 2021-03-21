import { getGoogleServices } from "../google";
import {
	OK,
	INVALID_REQUEST,
	ZERO_RESULTS,
} from "../../constants/googleResponse";

let Distance;

export const initDistance = () => {
	const GoogleServices = getGoogleServices();
	Distance = new GoogleServices.DistanceMatrixService();
};

export const getDistance = ({ origin, destination }) =>
	new Promise((resolve, reject) => {
		const distanceMatrixRequest = {
			origins: [origin],
			destinations: [destination],
			travelMode: "DRIVING",
		};
		Distance.getDistanceMatrix(
			distanceMatrixRequest,
			({ rows }, distanceMatrixStatus) => {
				switch (distanceMatrixStatus) {
					case OK:
						{
							const { elements } = rows[0];
							const { distance, duration, status } = elements[0];
							switch (status) {
								case OK:
									{
										resolve({ distance, duration });
									}
									break;
								case ZERO_RESULTS: {
									reject("No results found");
								}
							}
						}
						break;
					case INVALID_REQUEST: {
						reject("Invalid request");
					}
				}
			}
		);
	});
