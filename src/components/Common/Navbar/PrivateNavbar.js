import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const user = { name: "Khiemne" };

export default function PrivateNavbar({ setModal }) {
	return (
		<>
			<div className='px-1'>
				<div className='p-1 mr-4 float-right'>
					<Link to='/logout'>
						{"Logout "}
						<ExitToAppIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						></ExitToAppIcon>
					</Link>
				</div>

				<div className='p-1 mr-4 float-right'>
					<Link to='/profile'>
						{"Hello, " + user.name + "!"}
						<PersonIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						></PersonIcon>
					</Link>
				</div>

				<div className='p-1 mr-4 float-right'>
					<button onClick={() => setModal(true)} className='font-bold'>
						{"Add a new event "}
						<AddCircleOutlineIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						/>
					</button>
				</div>
			</div>
		</>
	);
}
