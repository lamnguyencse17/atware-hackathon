import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import CustomRouter from "./Router";
import "../assets/main.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../assets/theme";
import SnackbarAlert from "./Common/SnackbarAlert";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ThemeProvider theme={theme}>
				<Route component={CustomRouter}></Route>
				<SnackbarAlert />
			</ThemeProvider>
		</Router>
	</Provider>,
	document.getElementById("root")
);
