import {
	GET_CUSTOMER,
	SET_CUSTOMER,
	UPDATE_CUSTOMER,
	UPDATE_CUSTOMER_PASSWORD,
} from "../types/customer";

const initialState = {
	_id: "6056070a241efa24cee643e2",
	phone_number: "0123456789",
	name: "Lam",
	aboutMe: "I am a cool boiz",
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
