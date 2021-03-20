import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import DataRow from "./Row/DataRow";

export default function Cafes() {
	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(0);
	console.log(page);
	const [total, setTotal] = useState(100);
	const [cafeEvents, setCafeEvents] = useState([]);
	useEffect(() => {
		setCafeEvents([
			{
				address: "This is an address",
				district: "District 9",
				coordinates: [10, 10],
				title: "The Coffee House",
				category: 1,
				max: 10,
				host: {
					name: "Lam",
					bio: "very handsome",
				},
				description: "Work and Play",
				time: 10,
				date: "30-08-2021",
			},
			{
				address: "This is an address 2",
				district: "District 9",
				coordinates: [10, 10],
				title: "The Coffee House",
				category: 1,
				max: 10,
				host: {
					name: "Lam",
					bio: "very handsome",
				},
				description: "Work and Play",
				time: 10,
				date: "30-08-2021",
			},
		]);
	}, [offset, limit]);
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
	return (
		<div className='flex flex-col items-center content-center w-full px-5 space-y-5'>
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
						{cafeEvents.map((cafeEvent) => (
							<DataRow {...cafeEvent} key={cafeEvent.id} />
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
		</div>
	);
}
