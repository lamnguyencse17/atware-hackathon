import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to='/'>
			<img src="src/images/logo/atware_logo.png" width="50" alt="WEET"></img>
		</Link>
	);
}
