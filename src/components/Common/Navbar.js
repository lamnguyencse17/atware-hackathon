import React from "react";
import Logo from "./Logo";
import PrivateNavbar from "./Navbar/PrivateNavbar";
import PublicNavbar from "./Navbar/PublicNavbar";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
}));
export default function Navbar({ isPublic }) {
	const classes = useStyles();
	return (
		<AppBar position='static' color='primary' className={classes.appBar}>
			<div className='w-full h-10'>
				<div className='grid grid-cols-12'>
					<div className='content-center col-span-2 px-1 align-middle'>
						<Logo />
					</div>
					<div className='col-span-8 px-1 text-center'>Reserved</div>
					{isPublic ? <PublicNavbar /> : <PrivateNavbar />}
				</div>
			</div>
		</AppBar>
	);
}
