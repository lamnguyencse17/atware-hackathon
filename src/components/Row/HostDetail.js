import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function HostDetail({ name, bio, _id }) {
	return (
		<div className='grid grid-cols-2'>
			<div className='w-32 h-32 col-span-1'>
				<img src='https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-1/p100x100/107919172_2463603817264593_5860787001440999444_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=7206a8&_nc_ohc=ly3xFx7ACyQAX9Fc1ID&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-2.fna&tp=6&oh=b950e3ebd4dbffe6d487a48b5b556bc3&oe=60795FE9'></img>
			</div>
			<div className='col-span-1'>
				<div className='mx-auto font-bold'>{name}</div>
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
