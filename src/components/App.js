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

	const [query, setQuery] = useState({ district: districts[0], time: 0 });
	const [results, setResults] = useState([]);
	const handleQuery = async () => {
		const { district, time } = query;
		const { result, totalItems } = await findEvent(
			district,
			time,
			"21-03-2021",
			limit,
			page
		);
		setResults(result);
		setTotal(totalItems);
	};
	return (
		<div className='container mx-auto'>
			<div className='mt-8'>
				<div className='flex flex-col justify-center items-center'>
					<img src='src/images/logo/weet_text.png' alt='WEET' width='250'></img>
					<p className="mt-4">"We can meet anyone, anytime and anywhere!"</p>
				</div>
				<div className={"bg-gradient-to-r from-pink-200 to-green-100 mt-8 primary p-2 rounded-xl"}>
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
								onChange={(_, value) => setQuery({ ...query, district: value })}
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
								onChange={(_, value) => {
									setQuery({ ...query, time: parseInt(value.substring(0, 2)) });
								}}
							/>
						</div>
						<div className='flex items-center justify-center col-span-1 p-2'>
							<Button color='primary' onClick={handleQuery}>
								<div className='text-xl primary min-w-100 min-h-100'>
									<SearchIcon color='primary' />
									{"Search now"}
								</div>
							</Button>
						</div>
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
