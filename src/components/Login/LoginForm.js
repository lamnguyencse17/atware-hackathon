import React from "react";
import { Formik, Form, Field } from "formik";

export default function LoginForm({ processSubmitLogin, validateLoginForm }) {
	return (
		<>
			<Formik
				initialValues={{ phone: "", password: "" }}
				validate={(values) => validateLoginForm(values)}
				onSubmit={(values, { setSubmitting }) =>
					processSubmitLogin(values, setSubmitting)
				}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleSubmit,
					isSubmitting,
				}) => (
					<Form
						className='flex flex-col w-1/2 mx-auto space-y-5'
						onSubmit={handleSubmit}
					>
						<div>
							<label className='block mb-2 font-bold' htmlFor='phone'>
								Phone
							</label>
							<Field
								type='phone'
								name='phone'
								onChange={handleChange}
								value={values.phone}
								placeholder='Phone'
								disabled={isSubmitting}
								className='w-full h-10 px-5'
							/>
							{errors.phone && touched.phone && errors.phone}
						</div>

						<div>
							<label className='block mb-2 font-bold' htmlFor='password'>
								Password
							</label>
							<Field
								type='password'
								name='password'
								onChange={handleChange}
								value={values.password}
								placeholder='Password'
								disabled={isSubmitting}
								className='w-full h-10 px-5'
							/>
							{errors.password && touched.password && errors.password}
						</div>

						<button
							type='submit'
							disabled={isSubmitting}
							className='w-32 mx-auto bg-gray-600 border border-black'
						>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</>
	);
}
