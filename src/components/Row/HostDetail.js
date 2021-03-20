import React from "react";

export default function HostDetail({ name, bio }) {
	return (
		<div className='flex flex-col'>
			<div className='mx-auto'>{name}</div>
			<div>
				<img src='https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png'></img>
			</div>
			<div className='mx-auto'>{bio}</div>
		</div>
	);
}
