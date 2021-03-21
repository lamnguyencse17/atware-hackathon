import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createEvent } from "../requests/event";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import { getAutocompleteResult } from "../services/google/autocomplete";

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
const districts2 = [
	"BinhChanhDistrict",
	"BinhTanDistrict",
	"BinhThanhDistrict",
	"CanGioDistrict",
	"CuChiDistrict",
	"District1",
	"District3",
	"District4",
	"District5",
	"District6",
	"District7",
	"District8",
	"District9",
	"District11",
	"District12",
	"GoVapDistrict",
	"HocMonDistrict",
	"NhaBeDistrict",
	"PhuNhuanDistrict",
	"TanBinhDistrict",
	"TanPhuDistrict",
	"ThuDucDistrict",
];
const date = new Date();

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

	const [newEvent, setNewEvent] = useState({
		date: "2021-3-21",
		time: 21,
		address: "268 Lý Thường Kiệt",
		district: "Q1",
		title: "Get high with me",
		category: 1,
		max: 2,
		hostNumberPhone: "0123456789",
		description: "Tìm bạn đi par pay lak",
		keywords: "Wine - Beer - Ball - Dance",
		place_id: "ChIJ-6NhwcMudTERHmnMoUfNd-8",
	});
	const times = [...Array(24).keys()]
		.filter((ele) => ele > date.getHours())
		.map((ele) => (ele / 10 >= 1 ? "" : "0") + ele.toString() + ":00");

	const nums = [...Array(11).keys()]
		.filter((ele) => ele > 0)
		.map((ele) => ele.toString());

	const token = useSelector((state) => state.auth.token);
	const addEvent = async () => {
		await createEvent(newEvent, token);
		closeModal();
	};
	const [addressOptions, setAddressOptions] = useState([
		{ description: "123THD" },
	]);
	const debouncedApplyPrediction = useRef(
		debounce(async (query) => {
			if (query === "") {
				return;
			}
			const predictionRequest = {
				input: query,
				componentRestriction: { country: "vn" },
			};
			const predictions = await getAutocompleteResult(predictionRequest);
			setAddressOptions(predictions);
		}, 2000)
	);
	const handleChangeWithAuto = async (value) => {
		debouncedApplyPrediction.current(value);
	};
	const handleSelectAutocomplete = (place_id) => {
		setNewEvent({ ...newEvent, place_id });
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
				<Card className={classes.paper + "rounded-lg"}>
					<CardContent>
						{/* TODO: FORM GOES HERE */}
						<div className='flex'>
							<div className='flex flex-col items-center justify-center pb-4 ml-16 mr-20'>
								<img src='src/images/stock/event.png' width='200'></img>
								<h1>{"CREATE YOUR OWN EVENT!"}</h1>
							</div>
							<div>
								<form className={classes.root} noValidate autoComplete='on'>
									<div className='text-sm'>Required info</div>
									<div className='flex flex-row mt-2'>
										<div className='w-1/2 pr-1'>
											<TextField
												id='event-date'
												type='date'
												variant='outlined'
												InputLabelProps={{
													shrink: true,
												}}
												required={true}
												label='Date'
												className='w-full shadow-sm'
												onChange={({ target: { value } }) => {
													let date = value.split("-");
													setNewEvent({
														...newEvent,
														date: `${date[0]}-${date[1]}-${date[2]}`,
													});
												}}
											/>
										</div>
										<div className='w-1/2 pl-1'>
											<Autocomplete
												id='event-time'
												required={true}
												options={times}
												getOptionLabel={(option) => option}
												renderInput={(params) => (
													<TextField
														{...params}
														label='Time'
														variant='outlined'
													/>
												)}
												onChange={({ target: { value } }) =>
													setNewEvent({ ...newEvent, time: value })
												}
												label='Time'
												variant='outlined'
												className='w-full shadow-sm'
											/>
										</div>
									</div>
									<div className='flex flex-row mt-2'>
										<div className='w-1/2 pr-1'>
											<Autocomplete
												color='primary'
												id='event-category'
												required={true}
												options={category}
												getOptionLabel={(option) => option}
												renderInput={(params) => (
													<TextField
														{...params}
														label='Category'
														variant='outlined'
													/>
												)}
												className='w-full shadow-sm'
												onChange={(_, value) => {
													setNewEvent({
														...newEvent,
														category: category.indexOf(value),
													});
												}}
											/>
										</div>
										<div className='w-1/2 pl-1'>
											<Autocomplete
												color='primary'
												id='event-attendants'
												required={true}
												options={nums}
												getOptionLabel={(option) => option}
												renderInput={(params) => (
													<TextField
														{...params}
														label='Attendants'
														variant='outlined'
													/>
												)}
												className='w-full shadow-sm'
												onChange={({ target: { value } }) =>
													setNewEvent({ ...newEvent, max: value })
												}
											/>
										</div>
									</div>
									<div className='flex flex-row mt-2'>
										<div className='w-1/2 pr-1'>
											<Autocomplete
												id='event-district'
												required={true}
												options={districts}
												getOptionLabel={(option) => option}
												renderInput={(params) => (
													<TextField
														{...params}
														label='District'
														variant='outlined'
													/>
												)}
												onChange={(_, value) => {
													const index = districts.indexOf(value);
													setNewEvent({
														...newEvent,
														district: districts2[index],
													});
												}}
												className='w-full shadow-sm'
											/>
										</div>
										<div className='w-1/2 pl-1'>
											{/* <TextField
												id='event-address'
												required={true}
												label='Place address'
												variant='outlined'
												className='w-full shadow-sm'
												onChange={({ target: { value } }) =>
													setNewEvent({ ...newEvent, address: value })
												}
											/> */}
											<Autocomplete
												// id={id}
												options={addressOptions}
												getOptionLabel={(option) => option.description}
												className='w-full'
												freeSolo={true}
												// disabled={isSubmitting}
												onChange={(_, { place_id, description }) => {
													handleSelectAutocomplete(place_id);
												}}
												renderInput={(params) => (
													<TextField
														{...params}
														name={name}
														onChange={({ target: { value } }) =>
															handleChangeWithAuto(value)
														}
														variant='outlined'
														// value={value}
														// placeholder={placeholder}
														// disabled={isSubmitting}
														className='w-full h-10 px-5 border border-black shadow-sm'
													/>
												)}
											/>
										</div>
									</div>
									<div className='mt-4 text-sm'>Additional info</div>
									<div className='mt-2'>
										<div>
											<TextField
												id='event-title'
												label='Title'
												variant='outlined'
												className='w-full shadow-sm'
												onChange={({ target: { value } }) =>
													setNewEvent({ ...newEvent, title: value })
												}
											/>
										</div>
									</div>
									<div className='flex flex-row mt-2'>
										<div className='w-1/2 pr-1'>
											<TextField
												id='event-description'
												label='Description'
												variant='outlined'
												className='w-full shadow-sm'
												onChange={({ target: { value } }) =>
													setNewEvent({ ...newEvent, description: value })
												}
											/>
										</div>
										<div className='w-1/2 pl-1'>
											<TextField
												id='event-keywords'
												label='Keywords'
												variant='outlined'
												className='w-full shadow-sm'
												onChange={({ target: { value } }) =>
													setNewEvent({ ...newEvent, keywords: value })
												}
											/>
										</div>
									</div>
									<div className='flex flex-row mt-4'>
										<div className='w-1/2 pr-1'>
											<Button
												variant='contained'
												color='primary'
												onClick={addEvent}
												className='w-full shadow-sm '
											>
												Submit
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
								</form>
							</div>
						</div>
					</CardContent>
				</Card>
			</Fade>
		</Modal>
	);
}
