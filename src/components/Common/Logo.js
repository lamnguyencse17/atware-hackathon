import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to='/'>
			<div className='flex flex-row items-center'>
				<img src='src/images/logo/weet_logo.png' width='50' alt='WEET'></img>
				<span className="pb-1 ml-4">{"Welcome to Weet!"}</span>
			</div>
		</Link>
	);
}
