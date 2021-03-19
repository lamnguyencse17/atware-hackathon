import { createMuiTheme } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import grey from "@material-ui/core/colors/grey";

export default createMuiTheme({
	palette: {
		primary: {
			main: deepOrange[300],
		},
		secondary: {
			main: grey[700],
		},
		error: {
			main: "#ff604f",
		},
	},
});
