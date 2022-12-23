const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/script.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'docs'),
		libraryTarget: 'umd',
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'Le Scone',
			meta: {
				description: 'Le Scone - Restaurante',
			},
			template: './src/index.html',
			inject: 'body',
			scriptLoading: 'defer',
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader' },
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				type: 'asset/resource',
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-transform-runtime'],
						},
					},
				],
				exclude: /node_modules/,
			},
		],
	},
}
