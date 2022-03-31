const { resolvePath, env, mode, getEntries } = require("./util")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { VueLoaderPlugin } = require("vue-loader")
console.log("env", env, mode)
const isPrd = mode === "build"
const contentHashType = isPrd ? ".[contenthash:7]" : ""
const entry = getEntries(`./src/pages/*/index.js`)
console.log(entry)
const config = {
	// target: mode === "serve" ? "web" : "browserslist",
	entry,
	resolve: {
		extensions: [".js", ".vue", ".json"],
		alias: {
			vue$: "vue/dist/vue.esm.js",
		},
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.css$/,
				use: [
					isPrd
						? {
								loader: MiniCssExtractPlugin.loader,
								options: {
									// 这里可以指定一个 publicPath
									// 默认使用 webpackOptions.output中的publicPath
									// MiniCssExtractPlugin资源路径指向问题
									publicPath: "../",
								},
						  }
						: "vue-style-loader",
					{
						loader: "css-loader",
						options: {
							esModule: false,
						},
					},
				],
			},
			{
				test: /\.m?js/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					cacheDirectory: true,
				},
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "url-loader",
				options: {
					esModule: false,
					limit: 1024 * 5,
					name: `images/[name]${contentHashType}.[ext]`,
				},
			},
			// {
			// 	test: /.\(woff2?|eot|ttf|otf)(\?.*)?$/,
			// 	loader: "url-loader",
			// 	options: {
			// 		limit: 10000,
			// 		name: `css/fonts/[name]${contentHashType}.[ext]`,
			// 	},
			// },
		],
		// noParse: [
		// 	resolvePath('')
		// ],
	},
	plugins: [
		// 全局环境变量
		new webpack.DefinePlugin({
			__env: JSON.stringify(env),
			__mode: JSON.stringify(mode),
			__VUE_OPTIONS_API__: "true", // 不适用 vue2的选项式api
			__VUE_PROD_DEVTOOLS__: "false", // 生产环境不需要 devtools支持
		}),
		new VueLoaderPlugin(), // 识别vue文件内 script 和 style标签里的内容
		// html
		...Object.keys(entry).map((item) => {
			return new HtmlWebpackPlugin({
				template: resolvePath("../public/index.html"),
				chunks: [item],
				filename: `pages/${item}.html`,
			})
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
		// 提取css
		new MiniCssExtractPlugin({
			filename: `css/[name]${contentHashType}.css`,
		}),
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
