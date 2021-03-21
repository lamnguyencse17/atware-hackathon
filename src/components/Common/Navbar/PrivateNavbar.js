// import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HistoryIcon from "@material-ui/icons/History";

const user = { name: "Khiemne" };

export default function PrivateNavbar({ setModal }) {
	return (
		<>
			<div className='px-1'>
				<div className='float-right p-1 mr-4'>
					<Link to='/logout'>
						{"Logout "}
						<ExitToAppIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						></ExitToAppIcon>
					</Link>
				</div>

				<div className='float-right p-1 mr-4'>
					<Link to='/profile'>
						{"Hello, " + user.name + "!"}
						<PersonIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						></PersonIcon>
					</Link>
				</div>

				<div className='float-right p-1 mr-4'>
					<button onClick={() => setModal(true)} className='font-bold'>
						{"Add a new event "}
						<AddCircleOutlineIcon
							color='secondary'
							disableFocusRipple={true}
							disableRipple={true}
						/>
					</button>
				</div>
				<div className='float-right p-1 mr-4'>
					<button onClick= {()=>setModal(true)} className='font-bold'>
						<Link to={"/my-events"}>
							{"My events "}
							<HistoryIcon
								color='secondary'
								disableFocusRipple={true}
								disableRipple={true}
							/>
						</Link>
					</button>
				</div>
			</div>
		</>
	);
}
