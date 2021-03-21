import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Checkbox } from "@material-ui/core";
import { acceptEvent } from "../../requests/event";
import { useSelector } from "react-redux";

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

export default function RequestModal({
	isOpen,
	closeModal,
	participants,
	eventId,
}) {
	console.log(participants);
	const classes = useStyles();
	const token = useSelector((state) => state.auth.token);
	const acceptRequest = async (userId) => {
		await acceptEvent(eventId, userId, token);
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
						{participants.length > 0 ? (
							<TableContainer component={Paper} className='border border-black'>
								<Table aria-label='simple table'>
									<TableHead>
										<TableRow>
											{/* <TableCell align='center'>Host</TableCell> */}
											<TableCell align='center'>Name</TableCell>
											<TableCell align='center'>Is Accepted?</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{participants.map((participant) => (
											<TableRow key={participant.user}>
												<TableCell align='center'>
													<div>Lam Nguyen</div>
												</TableCell>
												<TableCell align='center'>
													<Checkbox
														checked={participant.isAccepted}
														onChange={() => acceptRequest(participant.user)}
														color='primary'
													/>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						) : (
							<h1>Please wait for some requests</h1>
						)}
					</CardContent>
				</Card>
			</Fade>
		</Modal>
	);
}
