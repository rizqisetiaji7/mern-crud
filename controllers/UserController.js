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


/**
 * Store new user data to storage
 * 
 * @param req Request
 * @param res Response
 * @return mixed<array,json>
 */
const store = async (req, res) => {
	const {body} = req

	if (!body.name || !body.email) {
		return res.status(400).json({
			message: 'Bad Request',
			data: null
		})
	}

	try {
		await userModel.createNewUser(body)

		res.status(201).json({
			message: 'CREATE new users success',
			data: body
		})
	} catch (error) {
		res.status(500).json({
			message: 'Internal Server Error!',
			serverMessage: error
		})
	}
}


/**
 * Update specific user data
 * 
 * @param req Request
 * @param res Response
 * @return mixed<array,json>
 */
const update = async (req, res) => {
	const {body, params} = req

	try {
		await userModel.updateUser(body, params.id)

		res.json({
			message: 'UPDATE user success',
			data: {
				id: params.id, 
				...body
			}
		})
	} catch (error) {
		res.status(500).json({
			message: 'Internal Server Error!',
			serverMessage: error
		})
	}
}


/**
 * Delete user data from storage
 * 
 * @param req Request
 * @param res Response
 * @return mixed<array,json>
 */ 
const destroy = async (req, res) => {
	const {id} = req.params

	try {
		await userModel.deleteUser(id)

		res.status(204).json({
			message: 'DELETE user success',
			data: null
		})
	} catch (error) {
		res.status(500).json({
			message: 'Internal Server Error!',
			serverMessage: error
		})
	}
}

module.exports = { index, store, update, destroy }