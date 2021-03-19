import React from "react";
import LoginForm from "./Login/LoginForm";
import { useDispatch } from "react-redux";
import { submitLoginDetail } from "../redux/actions/auth/login";
import { useHistory } from "react-router-dom";

const validateLoginForm = (values) => {
	const { phone, password } = values;
	// const { status, message } = validateLogInUser({ phone, password });
	if (status === false) {
		if (message.email !== "" || message.password !== "") {
			return { ...message };
		}
	}
};

export default function Login() {
	const dispatch = useDispatch();
	const history = useHistory();
	const processSubmitLogin = async (values, setSubmitting) => {
		setSubmitting(true);
		const loginResult = await dispatch(submitLoginDetail(values)); // {status, message (if error)}
		if (!loginResult.status) {
			console.log(loginResult.message);
			return;
		}
		// temp work. could be doing OTP.
		setSubmitting(false);
		history.push("/dashboard");
	};
	return (
		<div className='container flex flex-col mx-auto space-y-10'>
			<div className='font-bold text-center'>Login</div>
			<div className='px-5'>
				<LoginForm
					processSubmitLogin={processSubmitLogin}
					validateLoginForm={validateLoginForm}
				/>
			</div>
		</div>
	);
}
