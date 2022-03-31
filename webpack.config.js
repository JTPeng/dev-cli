const path = require("path")
// const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// 压缩css
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
// 压缩js
const TerserPlugin = require("terser-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = {
	mode: "development",
	entry: "./src/main.js",
	devServer: {
		port: 8090,
		hot: true,
		open: true,
		static: {
			directory: path.resolve(__dirname, "dist"),
			publicPath: "/",
		},
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: ["vue-loader"],
			},
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					// 配置es6转es5的loader
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.ts$/,
				use: ["ts-loader"],
			},
			// 配置处理样式的loader
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			// 配置静态资源的loader
			{
				test: /\.(jpg|png|jpeg|gif|bmp)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 1024,
						fallback: {
							loader: "file-loader",
							options: {
								name: "[name].[ext]",
							},
						},
					},
				},
			},
			{
				test: /\.(mp4|ogg|mp3|wav)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 1024,
						fallback: {
							loader: "file-loader",
							options: {
								name: "[name].[ext]",
							},
						},
					},
				},
			},
		],
	},
	plugins: [
		// 配置处理html
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
			title: "vue3",
			minify: {
				collapseWhitespace: true, // 去掉空格
				removeComments: true, // 去掉注释
			},
		}),
		// 每次打包清除打包文件
		new CleanWebpackPlugin(),
		new OptimizeCssAssetsPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
		new VueLoaderPlugin(),
		// new BundleAnalyzerPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
}
