import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

export default function PublicRoute({ component: Component, ...rest }) {
	// Public Navbar will be here
	const isLogin = useSelector((state) => state.auth.isLogin);
	return (
		<Route
			{...rest}
			render={(props) => (
				<div className='flex flex-col h-full'>
					<Navbar isPublic={!isLogin} />
					<div className='flex flex-grow'>
						<Component {...props} />
					</div>
					<Footer />
				</div>
			)}
		/>
	);
}
