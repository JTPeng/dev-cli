const webpack = require("webpack")
const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")
const { resolvePath, env } = require("./util")

const serveConfig = {
	mode: "development",
	output: {
		path: resolvePath("../dist"),
		filename: "js/[name].js",
		chunkFilename: "js/[name].js",
	},
	devtool: "eval-source-map",
	devServer: {
		port: 8080,
		hot: true,
		open: true,
		static: {
			directory: resolvePath("dist"),
			publicPath: "/",
		},
		// contentBase: "../dist", // 新版已废除
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
}

const config = merge(commonConfig, serveConfig)
module.exports = config
