import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
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
const Profile = React.lazy(() => import("./Profile"));

export default function Router() {
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
