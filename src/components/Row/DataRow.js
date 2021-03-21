import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import HostDetail from "./HostDetail";
import { Button } from "@material-ui/core";
import { interactEvent } from "../../requests/event";
import { useSelector } from "react-redux";

export default function DataRow({
	_id,
	category,
	district,
	title,
	date,
	time,
	description,
	host,
}) {
	const token = useSelector((state) => state.auth.token);
	const joinEvent = async () => {
		console.log(_id);
		await interactEvent(_id, token);
	};
	return (
		<>
			<TableRow key={_id}>
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
					<Button color='primary' variant='contained' onClick={joinEvent}>
						Join Event
					</Button>
				</TableCell>
			</TableRow>
		</>
	);
}
