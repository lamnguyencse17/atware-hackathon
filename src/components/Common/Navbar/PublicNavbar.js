import React from "react";
import { Link } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

export default function PublicNavbar() {
	return (
		<>
			<div className='content-center px-1 align-middle'>
				<div className='p-1 text-center mr-4 float-right'>
					<Link to='/login'>
						{"Login "}
						<PersonOutlineIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						></PersonOutlineIcon>
					</Link>
				</div>
				<div className='p-1 text-center mr-4 float-right'>
					<Link to='/register'>Register</Link>
				</div>
			</div>
		</>
	);
}
