const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")
const { resolvePath, env } = require("./util")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

const buildConfig = {
	mode: "production",
	output: {
		path: resolvePath("../dist"),
		filename: "js/[name].[contenthash:7].js",
		chunkFilename: "js/[name]-async.[contenthash:7].js",
	},
	plugins: [new CleanWebpackPlugin(), new OptimizeCssPlugin()],
}
const config = merge(commonConfig, buildConfig)
if (env === "prd") {
	config.optimization.minimizer = [
		// 清除console
		new TerserPlugin({
			terserOptions: {
				compress: {
					drop_console: true,
				},
			},
		}),
	]
}

module.exports = config
