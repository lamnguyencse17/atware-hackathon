import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getEventById } from "../requests/event";

export default function Event() {
	const { id } = useParams();
	const [event, setEvent] = useState(null);
	useEffect(() => {
		(async () => {
			const event = await getEventById(id);
			setEvent({ ...event });
		})();
	}, []);
	if (!event) {
		return <></>;
	}
	return <div>{JSON.stringify(event, null, 4)}</div>;
}
