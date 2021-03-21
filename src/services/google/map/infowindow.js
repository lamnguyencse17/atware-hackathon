import { deselectBiker } from "../../../redux/actions/bikers";
import store from "../../../redux/store";
import { getGoogleServices } from "../../google";
import { getMapInstance } from "../map";
import { getMarkers } from "./marker";

let infoWindow;
let infoWindowListener;

export const initInfowindow = () => {
	const GoogleServices = getGoogleServices();
	infoWindow = new GoogleServices.InfoWindow();
};

const generateContentString = (
	name,
	rating = 4
) => `<div className='w-32 h-32 text-center'>
<h1>${name}</h1>
<h2>${rating}/5</h2>
</div>`;

export const closeInfoWindow = () => {
	infoWindow.close();
	infoWindowListener.remove();
};

export const showInfoWindow = (name, id) => {
	const Map = getMapInstance();
	const markers = getMarkers();
	infoWindow.setOptions({ content: generateContentString(name) });
	infoWindow.open(Map, markers[id]);
	infoWindowListener = infoWindow.addListener("closeclick", () => {
		store.dispatch(deselectBiker());
		infoWindow.close();
		infoWindowListener.remove();
	});
};
