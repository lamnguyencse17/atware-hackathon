import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
	palette: {
		primary: {
			// main: deepOrange[300],
			main: "#bb586c",
		},
		secondary: {
			main: grey[700],
		},
		error: {
			main: "#ff604f",
		},
	},
});
