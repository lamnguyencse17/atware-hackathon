import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { closeAlert } from "../../redux/actions/alert";

function Alert(props) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function SnackbarAlert() {
	const dispatch = useDispatch();
	const { isOpen, message, severity } = useSelector((state) => state.alert);
	const handleClose = () => dispatch(closeAlert());
	return (
		<Snackbar
			open={isOpen}
			autoHideDuration={5000}
			onClose={handleClose}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "left",
			}}
		>
			<Alert onClose={handleClose} severity={severity}>
				{message}
			</Alert>
		</Snackbar>
	);
}
