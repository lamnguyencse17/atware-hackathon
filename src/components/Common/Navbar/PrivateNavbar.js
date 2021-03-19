import React from "react";
import { Link } from "react-router-dom";

export default function PrivateNavbar() {
	return (
		// <div className='w-full h-10'>
		// 	<div className='grid grid-cols-12'>
		// 		<div className='content-center col-span-2 px-1 align-middle'>
		// 			<Logo />
		// 		</div>
		// 		<div className='col-span-8 px-1 text-center'>Reserved</div>
		<>
			<div className='grid grid-cols-2 col-span-2 px-1'>
				<div className='p-1 text-center'>
					<Link to='/profile'>Profile</Link>
				</div>
				<div className='p-1 text-center'>
					<Link to='/logout'>Logout</Link>
				</div>
			</div>
		</>
		// 	</div>
		// </div>
	);
}
