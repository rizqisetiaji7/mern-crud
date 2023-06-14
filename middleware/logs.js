const logRequest = (req, res, next) => {
	console.log('Log API Request', req.path)
	next()
}

module.exports = logRequest