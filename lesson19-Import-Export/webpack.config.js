const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'build'),
	},
	devServer: {
		open: true,
		compress: true,
		port: 4000,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
					}
				}
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},

		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new CleanWebpackPlugin(),
	]
};