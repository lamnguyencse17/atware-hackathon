import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

export default function AddEventModal({ isOpen, closeModal }) {
	const classes = useStyles();
	const category = [
		"Eat out",
		"Night club",
		"Sports Activity",
		"Watching movie",
		"Dating",
	];
	// District
	const districts = [
		"Binh Chanh District",
		"Binh Tan District",
		"Binh Thanh District",
		"Can Gio District",
		"Cu Chi District",
		"District 1",
		"District 3",
		"District 4",
		"District 5",
		"District 6",
		"District 7",
		"District 8",
		"District 9",
		"District 11",
		"District 12",
		"Go Vap District",
		"Hoc Mon District",
		"Nha Be District",
		"Phu Nhuan District",
		"Tan Binh District",
		"Tan Phu District",
		"Thu Duc District",
	];
	const date = new Date();
	// Time
	console.log(date.getHours());
	const times = [...Array(24).keys()]
		.filter((ele) => ele > date.getHours())
		.map((ele) => (ele / 10 >= 1 ? "" : "0") + ele.toString() + ":00");

	const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
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
						{/* TODO: FORM GOES HERE */}
						<div> </div>
						<div className='flex'>
							{" "}
							CREATE YOUR OWN EVENT!
							<form className={classes.root} noValidate autoComplete='on'>
								<div>
									<TextField id='standard-basic' required='true' label='Date' />
									<TextField id='standard-basic' required='true' label='Time' />
									<TextField
										id='standard-basic'
										required='true'
										label='Address'
									/>
								</div>

								<div>
									<TextField
										id='standard-basic'
										required='true'
										label='District'
									/>

									<Autocomplete
										color='primary'
										id='Category'
										options={category}
										getOptionLabel={(option) => option}
										renderInput={(params) => (
											<TextField
												{...params}
												label='Category'
												variant='outlined'
											/>
										)}
									/>

									<Autocomplete
										color='primary'
										id='Maximum number of attendants'
										required='true'
										options={nums}
										getOptionLabel={(option) => option}
										renderInput={(params) => (
											<TextField
												{...params}
												label='Maximum number of attendants'
												variant='outlined'
											/>
										)}
									/>
								</div>
								<div>
									<TextField id='filled-basic' label='Description' />
								</div>
								<div>
									<TextField id='filled-basic' label='Keywords' />{" "}
								</div>
								<div></div>
								<TextField id='outlined-basic' label='Title' />
								<div>
									<Button
										className='w-50% '
										variant='contained'
										color='primary'
										onClick={closeModal}
									>
										Submit
									</Button>

									<Button
										className='w-50%'
										variant='contained'
										color='secondary'
										onClick={closeModal}
									>
										Cancel
									</Button>
								</div>
							</form>
						</div>
					</CardContent>
				</Card>
			</Fade>
		</Modal>
	);
}
