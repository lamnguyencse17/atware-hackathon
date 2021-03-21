import React from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UpdatePasswordSchema from "../../validators/user/UpdatePasswordSchema";

export default function PasswordForm({ processUpdateProfilePassword }) {
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
			password: "",
			password2: "",
		},
		enableReinitialize: true,
		validationSchema: UpdatePasswordSchema,
		onSubmit: () => {
			processUpdateProfilePassword(values, setSubmitting);
		},
	});
	return (
		<form
			className='flex flex-col w-1/2 mx-auto space-y-8 font-black'
			onSubmit={handleSubmit}
		>
			<div>
				<TextField
					color='primary'
					autoComplete='off'
					variant='outlined'
					label='Your new password'
					type='password'
					name='password'
					size='small'
					onChange={handleChange}
					value={values.password}
					disabled={isSubmitting}
					helperText={errors.password && touched.password && errors.password}
					error={errors.password && touched.password}
					className='w-full h-10 px-5 border border-black shadow-sm font-black'
				/>
			</div>
			<div>
				<TextField
					placeholder={values.last_name}
					color='primary'
					autoComplete='off'
					variant='outlined'
					label='Re Confirm your password'
					type='password'
					name='password2'
					size='small'
					onChange={handleChange}
					value={values.password2}
					disabled={isSubmitting}
					error={errors.password2 && touched.password2}
					helperText={errors.password2 && touched.password2 && errors.password2}
					className='w-full h-10 px-5 border border-black shadow-sm font-black'
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
