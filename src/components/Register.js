import React from "react";
import { submitRegisterDetail } from "../redux/actions/auth/register";
import RegisterForm from "./Register/RegisterForm";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Register() {
	const dispatch = useDispatch();
	const history = useHistory();
	const processSubmitRegister = async (values, setSubmitting) => {
		setSubmitting(true);
		dispatch(submitRegisterDetail(values))
			.then(() => {
				setSubmitting(false);
				history.push("/login");
			})
			.catch((message) => console.log(message)); // {status, message (if error)}
		// temp work. could be doing OTP.
	};
	return (
		<div className='container flex flex-col mx-auto space-y-5'>
			<div className='font-bold text-center'>Register</div>
			<div className='px-5'>
				<RegisterForm processSubmitRegister={processSubmitRegister} />
			</div>
		</div>
	);
}
