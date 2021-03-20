import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import AddEventModal from "../components/AddEventModal";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

export default function PrivateRoute({
	component: Component,
	isLogin,
	...rest
}) {
	const [isModalOpen, setModal] = useState(false);
	const closeModal = () => setModal(false);
	const openModal = () => setModal(1);
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin ? (
					<div className='flex flex-col h-full'>
						<Navbar isPublic={false} openModal={openModal} />
						<div className='flex flex-grow'>
							<Component {...props} />
						</div>
						<AddEventModal isOpen={isModalOpen} closeModal={closeModal} />
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
