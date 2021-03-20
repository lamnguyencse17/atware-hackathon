import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import AddEventModal from "../components/AddEventModal";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";

export default function PublicRoute({ component: Component, ...rest }) {
	const [isModalOpen, setModal] = useState(false);
	const closeModal = () => setModal(false);
	// Public Navbar will be here
	const isLogin = useSelector((state) => state.auth.isLogin);
	return (
		<Route
			{...rest}
			render={(props) => (
				<div className='flex flex-col h-full'>
					<Navbar isPublic={!isLogin} setModal={setModal} />
					<div className='flex flex-grow'>
						<Component {...props} />
						<AddEventModal isOpen={isModalOpen} closeModal={closeModal} />
					</div>
					<Footer />
				</div>
			)}
		/>
	);
}
