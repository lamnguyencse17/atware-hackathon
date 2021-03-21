import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function HostDetail({ firstName, bio, _id, lastName }) {
	return (
		<div className='grid grid-cols-2'>
			<div className='w-32 h-32 col-span-1'>
				<img src='https://github.com/github.png?size=460'></img>
			</div>
			<div className='col-span-1'>
				<div className='mx-auto font-bold'>
					{firstName === undefined ? "Lam" : firstName}{" "}
					{lastName === undefined ? "Nguyen" : lastName}
				</div>
				<div className='mx-auto'>{bio}</div>
				<div>
					<Button color='secondary' variant='contained'>
						<Link to={`/profile/${_id}`}>More details</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
