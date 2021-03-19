import express from "express";
import compression from "compression";
import path from "path";
const app = express();

app.use(compression());
app.use(express.static("public"));
app.get("*", (req, res) => {
	res.sendFile(path.join(process.cwd() + "/public/index.html"));
});
app.listen({ port: process.env.PORT || 3000 }, () => {
	console.log("Running on 3000");
});
