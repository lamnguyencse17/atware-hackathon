import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import SignupSchema from "../../validators/auth/SignupSchema";

export default function RegisterForm({ processSubmitRegister }) {
	// const TextfieldStyles = makeTextfieldStyles();
	const date_of_birth = new Date().toISOString().substr(0, 10);
	const {
		values,
		errors,
		touched,
		handleSubmit,
		isSubmitting,
		handleChange,
		setSubmitting,
		setFieldValue,
	} = useFormik({
		initialValues: {
			name: "",
			email: "",
			username: "",
			phone_number: "",
			password: "",
			password2: "",
		},
		validationSchema: SignupSchema,
		onSubmit: () => processSubmitRegister(values, setSubmitting),
	});
	return (
		<form
			className='flex flex-col w-1/2 mx-auto space-y-6'
			onSubmit={handleSubmit}
		>
			<div>
				<TextField
					color='primary'
					autoComplete='off'
					variant='outlined'
					label='First Name'
					type='text'
					name='first_name'
					size='small'
					onChange={handleChange}
					value={values.first_name}
					disabled={isSubmitting}
					helperText={
						errors.first_name && touched.first_name && errors.first_name
					}
					error={errors.first_name && touched.first_name}
					className='w-full h-10 px-5 border border-black shadow-sm'
				/>
			</div>
			<div className='py-1'>
				<TextField
					color='primary'
					autoComplete='off'
					variant='outlined'
					label='Last Name'
					type='text'
					name='last_name'
					size='small'
					onChange={handleChange}
					value={values.last_name}
					disabled={isSubmitting}
					error={errors.last_name && touched.last_name}
					helperText={errors.last_name && touched.last_name && errors.last_name}
					className='w-full h-10 px-5 border border-black shadow-sm'
				/>
			</div>
			<div className='py-1'>
				<TextField
					color='primary'
					id='date_of_birth'
					label='Date of birth'
					type='date'
					variant='outlined'
					value={values.date_of_birth}
					InputLabelProps={{
						shrink: true,
					}}
					size='small'
					onChange={handleChange}
					className='w-full h-10 px-5 border border-black shadow-sm'
				/>
				<Switch
					color='primary'
					type='checkbox'
					name='gender'
					onChange={({ target: { name, checked } }) => {
						setFieldValue(name, checked);
					}}
					checked={values.gender}
				/>
				{values.gender ? "Male" : "Female"}
			</div>
			<div className='py-1'>
				<TextField
					color='primary'
					autoComplete='off'
					variant='outlined'
					label='Address'
					type='text'
					name='address'
					size='small'
					onChange={handleChange}
					value={values.address}
					disabled={isSubmitting}
					error={errors.address && touched.address}
					helperText={errors.address && touched.address && errors.address}
					className='w-full h-10 px-5 border border-black shadow-sm'
				/>
			</div>
			<div className='py-1'>
				<TextField
					color='primary'
					autoComplete='off'
					variant='outlined'
					label='Username'
					type='text'
					name='username'
					size='small'
					onChange={handleChange}
					value={values.username}
					disabled={isSubmitting}
					error={errors.username && touched.username}
					helperText={errors.username && touched.username && errors.username}
					className='w-full h-10 px-5 border border-black shadow-sm'
				/>
			</div>
			<div className='py-1'>
				<TextField
					color='primary'
					autoComplete='off'
					variant='outlined'
					label='Phone'
					type='tel'
					name='phone_number'
					size='small'
					onChange={handleChange}
					value={values.phone_number}
					disabled={isSubmitting}
					error={errors.phone_number && touched.phone_number}
					helperText={
						errors.phone_number && touched.phone_number && errors.phone_number
					}
					className='w-full h-10 px-5 border border-black shadow-sm'
				/>
			</div>
			<div className='py-1'>
				<TextField
					color='primary'
					autoComplete='new-password'
					variant='outlined'
					label='Password'
					type='password'
					name='password'
					size='small'
					onChange={handleChange}
					value={values.password}
					disabled={isSubmitting}
					error={errors.password && touched.password}
					helperText={errors.password && touched.password && errors.password}
					className='w-full h-10 px-5 border border-black shadow-sm'
				/>
			</div>
			<div className='py-1'>
				<TextField
					color='primary'
					autoComplete='new-password'
					variant='outlined'
					label='Password Confirmation'
					type='password'
					name='password2'
					size='small'
					error={errors.password2 && touched.password2}
					helperText={errors.password2 && touched.password2 && errors.password2}
					onChange={handleChange}
					value={values.password2}
					disabled={isSubmitting}
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
					Submit
				</Button>
			</div>
		</form>
	);
}
