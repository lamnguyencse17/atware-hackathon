const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const envKeys = {
	"process.env.PORT": `'${process.env.PORT}'`,
	"process.env.BACKEND_SERVER": `'${process.env.BACKEND_SERVER}'`,
	"process.env.FRONTEND_SERVER": `'${process.env.FRONTEND_SERVER}'`,
};

module.exports = {
	mode: "production",
	entry: "./src/components/Index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		publicPath: "/",
		filename: "bundle.js",
		chunkFilename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {},
					},
				],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "main.css",
			chunkFilename: "main.css",
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
		new webpack.DefinePlugin(envKeys),
		new Dotenv(),
	],
};
