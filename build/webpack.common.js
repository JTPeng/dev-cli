const { resolvePath, env, mode } = require("./util")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
// 压缩css
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// 压缩js
const { VueLoaderPlugin } = require("vue-loader")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

console.log("env", env, mode)
const config = {
	entry: "./src/main.js",
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			// 配置处理样式的loader
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
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
			// 配置静态资源的loader
			{
				test: /\.(jpe?g|png|gif|bmp)$/,
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
		// 全局环境变量
		new webpack.DefinePlugin({
			__env: JSON.stringify(env),
			__mode: JSON.stringify(mode),
			// __VUE_OPTIONS_API__: "true", // 不适用 vue2的选项式api   默认支持vue2写法 需要关闭则改为fasle
			// __VUE_PROD_DEVTOOLS__: "false", // 生产环境不需要 devtools支持
		}),
		new VueLoaderPlugin(),
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
		// 不需要编译的文件
		new CopyWebpackPlugin({
			patterns: [
				{
					from: resolvePath("../static"),
					to: resolvePath("../dist/static"),
				},
			],
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		// new BundleAnalyzerPlugin(),
	],
	optimization: {
		// 拆包
		splitChunks: {
			chunks: "all",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: false,
			cacheGroups: {
				// 依赖chunk
				vendors: {
					name: "vendor",
					test: /[\\]node_modules[\\/]/,
					priority: 10,
				},
				// 公共模块
				common: {
					name: "common",
					minChunks: 2,
					priority: 5,
				},
			},
		},
		runtimeChunk: {
			name: "manifest",
		},
	},
}

module.exports = config
