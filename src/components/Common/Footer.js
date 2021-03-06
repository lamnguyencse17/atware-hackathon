import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
	appBar: {
		top: "auto",
		bottom: 0,
		zIndex: theme.zIndex.drawer + 1,
	},
}));

export default function Footer() {
	const classes = useStyles();
	return (
		<AppBar color='primary' position='relative' className={classes.appBar}>
			<div className='container mt-6 mb-3 m-auto'>
				<p>By ShineBright</p>
			</div>
		</AppBar>
	);
}
