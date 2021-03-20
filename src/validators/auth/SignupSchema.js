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
	MATCH_PASSWORD,
} from "../../constants/validationMessage";

export default Yup.object().shape({
	name: Yup.string()
		.min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
		.max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
		.required(FIELD_REQUIRED),
	email: Yup.string()
		.email()
		.min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
		.max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
		.required(FIELD_REQUIRED),
	username: Yup.string()
		.min(MIN_LENGTH_SHORT_FIELD, TOO_SHORT)
		.max(MAX_LENGTH_SHORT_FIELD, TOO_LONG)
		.required(FIELD_REQUIRED),
	phone_number: Yup.string()
		.min(MIN_LENGTH_PHONE, TOO_SHORT)
		.max(MAX_LENGTH_PHONE, TOO_LONG)
		.required(FIELD_REQUIRED),
	password: Yup.string()
		.min(MIN_LENGTH_PASSWORD, TOO_SHORT)
		.max(MAX_LENGTH_PASSWORD, TOO_LONG)
		.required(FIELD_REQUIRED),
	password2: Yup.string()
		.oneOf([Yup.ref("password"), null], MATCH_PASSWORD)
		.required(FIELD_REQUIRED),
});
