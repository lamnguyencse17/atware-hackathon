import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function PrivateNavbar({ setModal }) {
	return (
		<>
			<div className='grid grid-cols-4 col-span-3 px-1'>
				<div className='col-span-2 p-1 text-center'>
					<button onClick={() => setModal(true)} className='font-bold'>
						{"Add a new event "}
						<AddCircleOutlineIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						/>
					</button>
				</div>
				<div className='p-1 text-center'>
					<Link to='/profile'>
						{"Profile "}
						<PersonIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						></PersonIcon>
					</Link>
				</div>
				<div className='p-1 text-center'>
					<Link to='/logout'>
						{"Logout "}
						<ExitToAppIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						></ExitToAppIcon>
					</Link>
				</div>
			</div>
		</>
	);
}
