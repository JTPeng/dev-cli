const path = require("path")
const glob = require("glob")

const resolvePath = (dirPath) => path.resolve(__dirname, dirPath)

const env = process.env["env"]

const mode = process.env["mode"]

const getEntries = (entry) => {
	const list = glob.sync(entry)
	return list.reduce((pre, curr) => {
		const arr = curr.split("/")
		const moduleName = arr[arr.length - 2]
		pre[moduleName] = curr
		return pre
	}, {})
}
module.exports = {
	resolvePath,
	env,
	mode,
	getEntries,
}
