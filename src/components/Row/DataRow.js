import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import HostDetail from "./HostDetail";
import { Button } from "@material-ui/core";

export default function DataRow({
	id,
	category,
	district,
	title,
	date,
	time,
	description,
	host,
}) {
	return (
		<>
			<TableRow key={id}>
				<TableCell align='left'>
					<HostDetail {...host} />
				</TableCell>
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
					<Button color='secondary' variant='contained'>
						Join Event
					</Button>
				</TableCell>
			</TableRow>
		</>
	);
}
