import * as Yup from "yup";
import {
	MIN_LENGTH_SHORT_FIELD,
	MAX_LENGTH_SHORT_FIELD,
	MAX_LENGTH_PASSWORD,
	MIN_LENGTH_PASSWORD,
	MIN_LENGTH_PHONE,
	MAX_LENGTH_PHONE,
} from "../../constants/inputs";
import {
	TOO_SHORT,
	TOO_LONG,
	FIELD_REQUIRED,
} from "../../constants/validationMessage";

export default Yup.object().shape({
	first_name: Yup.string()
		.min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
		.max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
		.required(FIELD_REQUIRED),
	last_name: Yup.string()
		.min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
		.max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
		.required(FIELD_REQUIRED),
	gender: Yup.boolean().required(FIELD_REQUIRED),
	date_of_birth: Yup.date().required(FIELD_REQUIRED),
	address: Yup.string()
		.min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
		.max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
		.required(FIELD_REQUIRED),
	phone_number: Yup.string()
		.min(MIN_LENGTH_PHONE, TOO_SHORT)
		.max(MAX_LENGTH_PHONE, TOO_LONG)
		.required(FIELD_REQUIRED),
});
