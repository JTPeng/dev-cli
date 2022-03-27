const dev = {
	"/mock": {
		target: "",
		changeOrigin: true,
		secure: false,
		pathRewrit: {
			"^/mock": "/",
		},
	},
}

const prd = {}

module.exports = {
	proxyConfig: {
		dev,
		prd,
	},
}
