import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMyEvents } from "../requests/event";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import DataRow from "./OwnerRow/DataRow";
import RequestModal from "./OwnerRow/RequestModal";
import DeleteModal from "./OwnerRow/DeleteModal";

export default function MyEvent() {
	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(0);
	const [total, setTotal] = useState(100);
	const [events, setEvent] = useState([]);
	const [isRequestModalOpen, setRequestModal] = useState(false);
	const [isDeleteModalOpen, setDeleteModal] = useState(false);
	const [selectedEvent, setSelected] = useState(null);
	const closeDeleteModal = () => {
		setDeleteModal(false), setSelected(null);
	};
	const showDeleteModal = (eventId) => {
		setDeleteModal(true);
		setSelected(eventId);
	};
	const closeRequestModal = () => {
		setRequestModal(false), setSelected(null);
	};
	const showRequestModal = (eventId) => {
		setRequestModal(true);
		setSelected(eventId);
	};
	const token = useSelector((state) => state.auth.token);
	const hostId = useSelector((state) => state.customer._id);
	useEffect(() => {
		(async () => {
			const { totalItems, result } = await getMyEvents(
				page + 1,
				limit,
				"6051677e312ff82a1485c6e8",
				token
			);
			setTotal(totalItems);
			setEvent([...result]);
		})();
	}, [page]);
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
			{events.length !== 0 && selectedEvent !== null ? (
				<>
					<RequestModal
						isOpen={isRequestModalOpen}
						closeModal={closeRequestModal}
						participants={
							events.filter((event) => event._id === selectedEvent)[0]
								.participant_subschema
						}
					/>
					<DeleteModal
						isOpen={isDeleteModalOpen}
						closeModal={closeDeleteModal}
						participants={
							events.filter((event) => event._id === selectedEvent)[0]
								.participant_subschema
						}
					/>
				</>
			) : (
				<></>
			)}
			<TableContainer component={Paper} className='border border-black'>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							{/* <TableCell align='center'>Host</TableCell> */}
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
						{events.map((event) => (
							<DataRow
								{...event}
								key={event._id}
								showRequestModal={showRequestModal}
								showDeleteModal={showDeleteModal}
							/>
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
