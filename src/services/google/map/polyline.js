import { getGoogleServices } from "../../google";
import { getMapInstance } from "../map";

let polyline;

export const drawPolyline = (path) => {
	const Map = getMapInstance();
	const GoogleServices = getGoogleServices();
	polyline = new GoogleServices.Polyline({
		map: Map,
		path,
	});
	polyline.setOptions({
		geodesic: true,
		strokeColor: "#FF00FF",
		strokeOpacity: 1.0,
		strokeWeight: 2,
	});
	polyline.setMap(Map);
	polyline.setPath(path);
	polyline.setVisible(true);
};

export const removePolyline = () => {
	if (polyline === undefined) {
		return;
	}
	polyline.setVisible(false);
	polyline.setMap(null);
	polyline.setPath([]);
	polyline = null;
};
