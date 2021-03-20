import React from "react";
import { Link } from "react-router-dom";

export default function PrivateNavbar() {
	return (
		<>
			<div className='grid grid-cols-4 col-span-3 px-1'>
				<div className='col-span-2 p-1 text-center'>
					<Link>Add a new event</Link>
				</div>
				<div className='p-1 text-center'>
					<Link to='/profile'>Profile</Link>
				</div>
				<div className='p-1 text-center'>
					<Link to='/logout'>Logout</Link>
				</div>
			</div>
		</>
	);
}
