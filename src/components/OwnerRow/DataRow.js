import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

export default function DataRow({
	_id,
	category,
	district,
	title,
	date,
	time,
	description,
	showRequestModal,
	showDeleteModal,
}) {
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
					</Button>
				</div>
			</TableCell>
		</TableRow>
	);
}
