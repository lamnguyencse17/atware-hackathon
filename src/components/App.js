import React from "react";

export default function App() {
	const districts = [
		"District 1",
		"District 2",
		"District 3",
		"District 4",
		"District 5",
		"District 6",
		"District 7",
		"District 8",
		"District 9",
		"District 10",
		"District 11",
	];
	const hours = [...Array(24).keys()];
	return (
		<div className='container mx-auto'>
			<div className='mt-10 '>
				<div className='px-2 pt-5 pb-2 bg-gray-100'>
					<h1 className='text-2xl'>Find a place to go</h1>
					<form className='grid w-full grid-cols-5'>
						<select className='col-span-2'>
							{districts.map((district) => (
								<option value={district} key={district}>
									{district}
								</option>
							))}
						</select>
						<label className='flex items-center justify-center col-span-2'>
							Time
						</label>
						<button className='p-2 bg-red-800 rounded-md' type='submit'>
							Search now
						</button>
					</form>
				</div>
			</div>
			<div className='mt-10'>
				<h1>Result</h1>
			</div>
		</div>
	);
}
