import * as Yup from "yup";
import {
	MIN_LENGTH_PASSWORD,
	MAX_LENGTH_PASSWORD,
} from "../../constants/inputs";
import {
	TOO_SHORT,
	TOO_LONG,
	FIELD_REQUIRED,
	MATCH_PASSWORD,
} from "../../constants/validationMessage";

export default Yup.object().shape({
	password: Yup.string()
		.min(MIN_LENGTH_PASSWORD, TOO_SHORT)
		.max(MAX_LENGTH_PASSWORD, TOO_LONG)
		.required(FIELD_REQUIRED),
	password2: Yup.string()
		.oneOf([Yup.ref("password"), null], MATCH_PASSWORD)
		.required(FIELD_REQUIRED),
});
