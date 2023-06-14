const userModel = require('../models/users')

/**
 * Display serialize users data
 * 
 * @param req Request
 * @param res Response
 * @return mixed<array,json>
 */
const index = async (req, res) => {
	try {
		const [data] = await userModel.getAllUsers()
		res.json({
			message: 'Get all users success',
			data: data
		})
	} catch (error) {
		res.status(500).json({
			message: 'Internal Server Error!',
			serverMessage: error
		})
	}
}

const store = (req, res) => {
	// console.log(req.body)
	res.json({
		data: req.body,
		message: 'POST users success'
	})
}

const update = (req, res) => {
	console.log(req.params)
	res.json({
		message: 'UPDATE user success',
		data: req.body
	})
}

const destroy = (req, res) => {
	const {id} = req.params

	res.json({
		message: 'DELETE user success',
		data: {
			id: id,
			name: 'Rizqi Setiaji',
			email: 'rizqisetiaji9@gmail.com'
		}
	})
}

module.exports = { index, store, update, destroy }