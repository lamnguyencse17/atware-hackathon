import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DataRow({
	_id,
	category,
	district,
	title,
	date,
	time,
	description,
	host,
	showRequestModal,
	showDeleteModal,
}) {
	const user_id = useSelector((state) => state.customer._id);
	return (
		<TableRow key={_id}>
			<TableCell align='center'>
				<div>{title}</div>
			</TableCell>
			<TableCell align='center'>
				<div>{date}</div>
			</TableCell>
			<TableCell align='center'>
				<div>{time}</div>
			</TableCell>
			<TableCell align='center'>
				<div>{district}</div>
			</TableCell>
			<TableCell align='center'>
				<div>{category}</div>
			</TableCell>
			<TableCell align='center'>
				<div>{description}</div>
			</TableCell>
			<TableCell align='center'>
				<div className='space-x-3'>
					{user_id === host._id ? (
						<>
							<Button
								color='primary'
								variant='contained'
								onClick={() => showRequestModal(_id)}
							>
								Requests
							</Button>
							<Button
								color='secondary'
								variant='contained'
								onClick={() => showDeleteModal(_id)}
							>
								Delete Event
							</Button>{" "}
						</>
					) : (
						<Button color='primary' variant='contained'>
							<Link to={`/event/${_id}`}>Detail</Link>
						</Button>
					)}
				</div>
			</TableCell>
		</TableRow>
	);
}
