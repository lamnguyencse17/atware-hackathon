import React from "react";
import { Route } from "react-router-dom";
import AdminDrawer from "../components/Common/AdminDrawer";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

export default function AdminRoute({ component: Component, ...rest }) {
	// Public Navbar will be here
	return (
		<Route
			{...rest}
			render={(props) => (
				<div className='flex flex-col h-full'>
					<Navbar isPublic={true} />

					<div className='grid flex-grow w-full grid-cols-12'>
						<div className='col-span-2'>
							<AdminDrawer />
						</div>
						<div className='col-span-10'>
							<Component {...props} />
						</div>
					</div>
					<Footer />
				</div>
			)}
		/>
	);
}
