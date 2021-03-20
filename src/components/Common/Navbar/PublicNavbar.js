import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

export default function PublicNavbar() {
	return (
		<>
			<div className='grid content-center grid-cols-2 col-span-3 px-1 align-middle'>
				<div className='p-1 text-center'>
					<Link to='/login'>
						{"Login "}
						<PersonOutlineIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						></PersonOutlineIcon>
					</Link>
				</div>
				<div className='p-1 text-center'>
					<Link to='/register'>Register</Link>
				</div>
			</div>
		</>
	);
}
