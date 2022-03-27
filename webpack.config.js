// commonjs语法 node模块下的语法
// modulejs 模块js
const path = require("path")
const { VueLoaderPlugin } = require("vue-loader")
module.exports = {
	// 入口
	entry: "./src/main.js",
	// 输入
	output: {
		// 绝对路径
		// __dirname当前文件的目录 windows和mac文件表示不同 windows /  . msc \
		path: path.resolve(__dirname, "dist"),
		filename: "bound.js",
	},
	// 模块
	module: {
		// 模块的打包规则
		rules: [
			{
				test: /\.vue$/, // 匹配文件名
				use: [
					{
						loader: "vue-loader",
						options: {
							// 对当前loader进行配置
						},
					},
				], // 从后往前依次执行loader
			},
			// {
			// 	test: /\.s[ca]ss$/,
			// 	use: ["style-loader", "css-loader", "scss-loader"],
			// },
			// {
			// 	test: /\.m?js$/, // esmodule 模块
			// 	use: {
			// 		loader: "babel-loader",
			// 		options: ["@babel/preset-env"],
			// 	},
			// },
			// // 图片处理
			// {
			// 	test: /\.(png|jpe?g|gif|svg|webp)$/,
			// 	type: "asset/resource",
			// },
		],
	},
	// 增加webpack的功能
	plugins: [
		new VueLoaderPlugin(), // 解析vue中的css js
	],
}
