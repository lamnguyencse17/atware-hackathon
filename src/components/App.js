import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { findEvent } from "../requests/event";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import DataRow from "./Row/DataRow";

export default function App() {
	const quotes = [
		"We meet anyone, anytime, anywhere!",
		"Connect people together, after the pandemic",
		"Easy, friendly, conveniently",
	];
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
	const times = [...Array(24).keys()]
		.filter((ele) => ele > date.getHours())
		.map((ele) => (ele / 10 >= 1 ? "" : "0") + ele.toString() + ":00");
	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(0);
	const [total, setTotal] = useState(100);

	const changeLimit = ({ target: { value } }) => {
		setLimit(value);
		setOffset(0);
		setPage(0);
	};
	const handleChangePage = (_, newPage) => {
		const newOffset = newPage > page ? offset + limit : offset - limit;
		setOffset(newOffset);
		setPage(newPage);
	};

	const [query, setQuery] = useState({
		district: districts[0],
		time: 0,
		date: "21-03-2021",
	});
	const [results, setResults] = useState([]);
	const handleQuery = async () => {
		const { district, time } = query;
		const { result, totalItems } = await findEvent(
			district,
			time,
			"21-03-2021",
			limit,
			page + 1
		);
		setResults(result);
		setTotal(totalItems);
	};
	return (
		<div
			className='container mx-auto'
			style={{ backgroundImage: 'url("src/images/bg/neuron_bg.png")' }}
		>
			<div className='mt-8'>
				<div className='flex flex-col items-center justify-center'>
					<img src='src/images/logo/weet_text.png' alt='WEET' width='250'></img>
					{/* TODO: Slider of text */}
					<p className='mt-4'>{quotes[1]}</p>
				</div>
				<div
					className={
						"bg-gradient-to-r from-pink-200 to-green-100 mt-8 primary p-2 rounded-xl"
					}
				>
					<form className='flex items-center w-full'>
						<div className='float-left w-2/5 p-2'>
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
								className='w-full shadow-sm'
								onChange={(_, value) => setQuery({ ...query, district: value })}
							/>
						</div>
						<div className='float-left w-1/5 p-2'>
							<TextField
								color='primary'
								id='date'
								type='date'
								variant='outlined'
								InputLabelProps={{
									shrink: true,
								}}
								label='Date'
								className='w-full shadow-sm'
								onChange={({ target: { value } }) => {
									setQuery({
										...query,
										date: value,
									});
								}}
							/>
						</div>
						<div className='float-left w-1/5 p-2'>
							<Autocomplete
								color='primary'
								id='time'
								options={times}
								getOptionLabel={(option) => option}
								renderInput={(params) => (
									<TextField {...params} label='Time' variant='outlined' />
								)}
								className='w-full shadow-sm'
								onChange={(_, value) => {
									setQuery({ ...query, time: parseInt(value.substring(0, 2)) });
								}}
							/>
						</div>
						<div className='float-left w-1/5 h-full p-2'>
							<Button
								color='primary'
								onClick={handleQuery}
								className='w-full p-8 text-lg'
								variant='outlined'
								style={{ height: "56px" }}
							>
								<div className='h-full'>
									<SearchIcon color='primary' className='w-full h-full' />
									{"Let's search now"}
								</div>
							</Button>
						</div>
						<div className='clear-both'></div>
					</form>
				</div>
			</div>
			<div className='mt-10'>
				{results.length > 0 ? (
					<TableContainer component={Paper} className='border border-black'>
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell align='center'>Host</TableCell>
									<TableCell align='center'>Title</TableCell>
									<TableCell align='center'>Date</TableCell>
									<TableCell align='center'>Time</TableCell>
									<TableCell align='center'>District</TableCell>
									<TableCell align='center'>Category </TableCell>
									<TableCell align='center'>Description </TableCell>
									<TableCell align='center'>Action </TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{results.map((event) => (
									<DataRow {...event} key={event.id} />
								))}
							</TableBody>
						</Table>
						<TablePagination
							component='div'
							count={total}
							page={page}
							onChangePage={handleChangePage}
							rowsPerPage={limit}
							onChangeRowsPerPage={changeLimit}
						/>
					</TableContainer>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
