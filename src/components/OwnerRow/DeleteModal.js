import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { deleteEvent } from "../../requests/event";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		minWidth: "600px",
	},
}));

export default function DeleteModal({ isOpen, closeModal, eventId }) {
	const classes = useStyles();
	const token = useSelector((state) => state.auth.token);
	const handleConfirmDelete = async () => {
		deleteEvent(eventId, token);
	};
	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			className={classes.modal}
			open={isOpen}
			onClose={closeModal}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={isOpen}>
				<Card className={classes.paper}>
					<CardContent>
						<div className='flex flex-col justify-center'>
							<div className='flex flex-col items-center justify-center px-16 pb-4 mt-4'>
								<img src='src/images/stock/warn.png' width='200'></img>
								<h1 className='mt-4'>{"ARE YOU SURE?"}</h1>
							</div>
							<div>
								<div className='flex flex-row mt-4'>
									<div className='w-1/2 pr-1'>
										<Button
											variant='contained'
											color='primary'
											onClick={handleConfirmDelete}
											className='w-full shadow-sm '
										>
											Deny accept
										</Button>
									</div>
									<div className='w-1/2 pl-1'>
										<Button
											variant='contained'
											color='secondary'
											onClick={closeModal}
											className='w-full shadow-sm'
										>
											Cancel
										</Button>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</Fade>
		</Modal>
	);
}
