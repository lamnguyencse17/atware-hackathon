import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect } from "react";
import { Suspense } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../routers/PrivateRoute";
import PublicRoute from "../routers/PublicRoute";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import Restaurants from "./Restaurants";
import Event from "./Event";
import Cafes from "./Cafes";
import Movies from "./Movies";
import MyEvent from "./MyEvent";
import loadMapScript from "../utils/loadMapScript";
import { initGoogleMapService } from "../services/google";
const Profile = React.lazy(() => import("./Profile"));

export default function Router() {
	useEffect(() => {
		let mapScript;
		loadMapScript.then((script) => {
			mapScript = script;
			initGoogleMapService();
		});
		return () => {
			document.body.removeChild(mapScript);
		};
	}, []);
	return (
		<>
			<Switch>
				<PublicRoute exact path='/' component={App} />
				<PublicRoute exact path='/login' component={Login} />
				<PublicRoute exact path='/register' component={Register} />
				<PublicRoute path='/restaurants' component={Restaurants} />
				<PublicRoute path='/cafes' component={Cafes} />
				<PublicRoute path='/movies' component={Movies} />
				<PublicRoute path='/event/:id' component={Event} />
				<PrivateRoute path='/my-events' component={MyEvent} />
				<Suspense fallback={<CircularProgress />}>
					<PublicRoute exact path='/profile' component={Profile} />
				</Suspense>
			</Switch>
		</>
	);
}
