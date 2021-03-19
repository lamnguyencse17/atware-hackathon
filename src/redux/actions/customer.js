import {
	getCustomerRequest,
	updateCustomerPasswordRequest,
	updateCustomerRequest,
} from "../../requests/customer";
import {
	GET_CUSTOMER,
	SET_CUSTOMER,
	UPDATE_CUSTOMER,
	UPDATE_CUSTOMER_PASSWORD,
} from "../types/customer";

export const getCustomer = () => async (dispatch) => {
	dispatch({ type: GET_CUSTOMER });
	const { status, message, customerData } = await getCustomerRequest();
	if (!status) {
		return Promise.reject(message);
	}
	return dispatch(setCustomer(customerData));
};

export const setCustomer = (customerData) => (dispatch) => {
	dispatch({ type: SET_CUSTOMER, payload: customerData });
};

export const updateCustomer = (newCustomerData) => async (dispatch) => {
	dispatch({ type: UPDATE_CUSTOMER });
	const { status, message } = await updateCustomerRequest(newCustomerData);
	if (!status) {
		return Promise.reject(message);
	}
	return Promise.resolve();
};

export const updateCustomerPassword = (newPasswrd) => async (dispatch) => {
	const { status, message } = await updateCustomerPasswordRequest(newPasswrd);
	if (!status) {
		return Promise.reject(message);
	}
	dispatch({ type: UPDATE_CUSTOMER_PASSWORD });
	return Promise.resolve();
};
