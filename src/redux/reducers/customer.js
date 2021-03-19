import {
	GET_CUSTOMER,
	SET_CUSTOMER,
	UPDATE_CUSTOMER,
	UPDATE_CUSTOMER_PASSWORD,
} from "../types/customer";

const initialState = {
	id: -1,
	account__username: "",
	first_name: "",
	last_name: "",
	is_active: false,
	gender: false,
	phone_number: "",
	date_of_birth: new Date().toISOString().substr(0, 10),
	address: "",
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_CUSTOMER:
		case UPDATE_CUSTOMER_PASSWORD:
		case GET_CUSTOMER:
			return { ...state };
		case SET_CUSTOMER:
			return {
				...state,
				...action.payload,
				date_of_birth: action.payload.date_of_birth.toString().substr(0, 10),
			};
		default: {
			return state;
		}
	}
};
