import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import HostDetail from "./HostDetail";

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
				<TableCell align='center'>{title}</TableCell>
				<TableCell align='center'>{date}</TableCell>
				<TableCell align='center'>{time}</TableCell>
				<TableCell align='center'>{district}</TableCell>
				<TableCell align='center'>{category}</TableCell>
				<TableCell align='center'>{description}</TableCell>
			</TableRow>
		</>
	);
}
