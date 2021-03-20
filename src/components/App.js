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
	return (
		<div className='container mx-auto'>
			<div className='mt-10 '>
				<div className='bg-gray-100 px-2 pt-5 pb-2'>
					<h1 className='text-2xl'>Find a place to go</h1>
					<form className='grid grid-cols-5 w-full'>
						<select className="col-span-2">
							{districts.map((district) => (
								<option value={district}>{district}</option>
							))}
						</select>
						<label className='col-span-2 flex justify-center items-center'>Time</label>
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
