import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import { Suspense } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../routers/PrivateRoute";
import PublicRoute from "../routers/PublicRoute";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
const Profile = React.lazy(() => import("./Profile"));

export default function Router() {
	return (
		<>
			<Switch>
				<PublicRoute exact path='/' component={App} />
				<PublicRoute exact path='/login' component={Login} />
				<PublicRoute exact path='/register' component={Register} />
				<Suspense fallback={<CircularProgress />}>
					<PublicRoute exact path='/profile' component={Profile} />
				</Suspense>
			</Switch>
		</>
	);
}
