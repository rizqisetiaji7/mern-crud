const DB = require('../config/database')

const table = 'users'

/**
 * Get all users data
 * @return mixed
 */
const getAllUsers = () => {
	const SQLQuery = `SELECT * FROM ${table}`
	return DB.execute(SQLQuery)
}

module.exports = { getAllUsers }