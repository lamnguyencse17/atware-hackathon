import { getGoogleServices } from "../google";

let Autocomplete;

export const initAutocomplete = () => {
	const GoogleServices = getGoogleServices();
	Autocomplete = new GoogleServices.places.AutocompleteService();
};

export const getAutocompleteResult = async (predictionRequest) => {
	try {
		const { predictions } = await Autocomplete.getPlacePredictions(
			predictionRequest
		);
		return predictions;
	} catch (err) {
		console.log(err);
	}
};
