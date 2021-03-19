import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	getCustomer,
	setCustomer,
	updateCustomer,
	updateCustomerPassword,
} from "../redux/actions/customer";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import ProfileForm from "./Profile/ProfileForm";
import PasswordForm from "./Profile/PasswordForm";
import { alertSuccess } from "../redux/actions/alert";

export default function Profile() {
	const [tab, setTab] = React.useState("1");
	const handleChange = (event, newTab) => {
		setTab(newTab);
	};
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCustomer());
	}, []);
	const processUpdateProfile = async (values, setSubmitting) => {
		setSubmitting(true);
		dispatch(updateCustomer(values)).then(() => {
			dispatch(setCustomer(values));
			dispatch(alertSuccess("Successfully updated profile"));
		});
		setSubmitting(false);
	};
	const processUpdateProfilePassword = async (values, setSubmitting) => {
		setSubmitting(true);
		dispatch(updateCustomerPassword(values)).then(() => {
			dispatch(alertSuccess("Successfully updated password"));
		});
		setSubmitting(false);
	};
	return (
		<div className='container flex flex-col mx-auto shadow-xs'>
			<div className='text-center'>Profile</div>
			<TabContext value={tab}>
				<AppBar position='static' color='secondary'>
					<TabList
						onChange={handleChange}
						aria-label='simple tabs example'
						centered
						variant='fullWidth'
					>
						<Tab label='Personal Information' value='1' />
						<Tab label='Security' value='2' />
					</TabList>
				</AppBar>
				<TabPanel value='1'>
					<div className='px-5'>
						<ProfileForm processUpdateProfile={processUpdateProfile} />
					</div>
				</TabPanel>
				<TabPanel value='2'>
					<div className='px-5'>
						<PasswordForm
							processUpdateProfilePassword={processUpdateProfilePassword}
						/>
					</div>
				</TabPanel>
			</TabContext>
		</div>
	);
}
