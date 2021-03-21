import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';

export default function ProfileForm({ processUpdateProfile, customer }) {
	// const customer = useSelector((state) => state.customer);
	const {
		values,
		errors,
		touched,
		handleSubmit,
		isSubmitting,
		handleChange,
		setSubmitting,
	} = useFormik({
		initialValues: {
			...customer,
		},
		enableReinitialize: true,
		// validationSchema: UpdateProfileSchema,
		onSubmit: () => {
			processUpdateProfile(values, setSubmitting);
		},
	});
	return (
		<form
			className='flex flex-col w-1/2 mx-auto space-y-8 font-black'
			onSubmit={handleSubmit}
		>
			<div className ="flex flex-col " >
			<center><img src = "https://i.imgur.com/3PVdppE.jpg " width = "25%" height = "25%" class="pb-3"  alt = "pikachu" ></img></center>

				<TextField
					color='primary'
					autoComplete='off'
					variant='outlined'
					label='UserName'
					type='text'
					name='username'
					size='small'
					onChange={handleChange}
					value={values.username}
					disabled={isSubmitting}
					helperText={errors.username && touched.username && errors.username}
					error={errors.username && touched.username}
					className='w-full h-10 px-5 border border-black shadow-sm font-black' 
				/>
			</div>
			<div>
				<TextField
					placeholder={values.aboutMe}
					color='primary'
					autoComplete='off'
					variant='outlined'
					label='AboutMe'
					type='text'
					name='aboutMe'
					size='small'
					onChange={handleChange}
					value={values.aboutMe}
					disabled={isSubmitting}
					error={errors.aboutMe && touched.aboutMe}
					helperText={errors.aboutMe && touched.aboutMe && errors.aboutMe}
					className='w-full h-10 px-5 border border-black shadow-sm'
				/>
			</div>
			<div>
				<TextField
					color='primary'
					id='phoneNumber'
					label='PhoneNumber'
					type='text'
					variant='outlined'
					disabled={isSubmitting}
					value={values.phoneNumber}
					InputLabelProps={{
						shrink: true,
					}}
					size='small'
					onChange={handleChange}
					className='w-full h-10 px-5 border border-black shadow-sm'
				/>
			</div>
			<div className='mx-auto'>
				<Button
					variant='contained'
					color='primary'
					type='submit'
					disabled={isSubmitting}
				>
					Update
				</Button>
			</div>
		</form>
	);
}
