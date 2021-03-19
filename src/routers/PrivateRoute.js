import React from "react";
import { Redirect, Route } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

export default function PrivateRoute({
	component: Component,
	isLogin,
	...rest
}) {
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin ? (
					<div className='flex flex-col h-full'>
						<Navbar isPublic={false} />
						<div className='flex flex-grow'>
							<Component {...props} />
						</div>
						<Footer />
					</div>
				) : (
					<Redirect
						to={{ pathname: "/login", state: { from: props.location } }}
					/>
				)
			}
		/>
	);
}
