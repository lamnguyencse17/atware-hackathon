import React from "react";
import { Link } from "react-router-dom";

export default function PrivateNavbar({ setModal }) {
	return (
		<>
			<div className='grid grid-cols-5 col-span-3 px-1'>
				<div className='col-span-2 p-1 text-center'>
					<button onClick={() => setModal(true)}>Add a new event</button>
				</div>
				<div className='p-1 text-center'>
					<Link to='/my-events'>My Events</Link>
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
