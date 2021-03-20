import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
	bp: {
		borderColor: "#bb586c",
	},
}));

export default function App() {
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
	const colors = useStyles();
	// Time
	console.log(date.getHours());
	const times = [...Array(24).keys()]
		.filter((ele) => (ele = date.getHours()))
		.map((ele) => (ele / 10 >= 1 ? "" : "0") + ele.toString() + ":00");
	return (
		<div className='container mx-auto'>
			<div className='mt-5 flex flex-col justify-center items-center'>
				<img src='src/images/logo/atware_text.png' width='200' alt='WEET'></img>
				<p>Meet anyone, anytime, anywhere!</p>
			</div>
			<div className='mt-3'>
				<div className={"bg-gray-100 p-2 border-l-8 rounded-lg " + colors.bp}>
					<form className='grid w-full grid-cols-5'>
						<div className='col-span-2 p-2'>
							<Autocomplete
								color='primary'
								id='address'
								options={districts}
								getOptionLabel={(option) => option}
								renderInput={(params) => (
									<TextField
										{...params}
										label='Place to go'
										variant='outlined'
									/>
								)}
							/>
						</div>
						<div className='col-span-2 p-2'>
							<Autocomplete
								color='primary'
								id='time'
								options={times}
								getOptionLabel={(option) => option}
								renderInput={(params) => (
									<TextField {...params} label='Time' variant='outlined' />
								)}
							/>
						</div>
						<div className='col-span-1 p-2 flex justify-center items-center'>
							<Button color='primary'>
								<div className='text-xl primary min-w-100 min-h-100'>
									<SearchIcon
										color='text-xl'
										disableFocusRipple={true}
										disableRipple={true}
									/>
									{"Search now"}
								</div>
							</Button>
						</div>
					</form>
				</div>
			</div>
			<div className='mt-10'>
				<h1>Result</h1>
			</div>
		</div>
	);
}
