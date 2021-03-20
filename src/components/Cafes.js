import React, { useEffect, useState } from "react";

export default function Cafes() {
	const [page, setPage] = useState({ offset: 0, limit: 10 });
	const [total, setTotal] = useState(100);
	const [cafeEvents, setCafeEvents] = useState([]);
	useEffect(() => {
		setCafeEvents([
			{
				address: "This is an address",
				district: "District 9",
				coordinates: [10, 10],
				name: "The Coffee House",
				category: 1,
				max: 10,
				host: {
					name: "Lam",
				},
				description: "Work and Play",
				time: 10,
				date: "30-08-2021",
			},
			{
				address: "This is an address 2",
				district: "District 9",
				coordinates: [10, 10],
				name: "The Coffee House",
				category: 1,
				max: 10,
				host: {
					name: "Lam",
				},
				description: "Work and Play",
				time: 10,
				date: "30-08-2021",
			},
		]);
	}, []);
	const incrementPage = () => {
		const { offset, limit } = page;
		if (offset + limit > total) {
			return;
		}
		setPage({ ...page, offset: offset + limit });
	};
	const decrementPage = () => {
		const { offset, limit } = page;
		if (offset - limit > 0) {
			return;
		}
		setPage({ ...page, offset: offset - limit });
	};
	return (
		<div>
			{cafeEvents.map((cafeEvent) => JSON.stringify(cafeEvent, null, 4))}
		</div>
	);
}
