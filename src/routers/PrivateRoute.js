import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import AddEventModal from "../components/AddEventModal";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

export default function PrivateRoute({ component: Component, ...rest }) {
	const [isModalOpen, setModal] = useState(false);
	const closeModal = () => setModal(false);
	const isLogin = useSelector((state) => state.auth.isLogin);
	return (
		<Route
			{...rest}
			render={(props) =>
				isLogin ? (
					<div className='flex flex-col h-full'>
						<Navbar isPublic={false} setModal={setModal} />
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
