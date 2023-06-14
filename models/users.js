const DB = require('../config/database')

const table = 'users'
const primaryKey = 'id'


/**
 * Get all users data
 * 
 * @return mixed
 */
const getAllUsers = () => {
	const SQLQuery = `SELECT * FROM ${table} 
      ORDER BY ${primaryKey} DESC LIMIT 100`

	return DB.execute(SQLQuery)
}


/**
 * Create new user data
 * 
 * @param json request
 * @return mixed
 */
const createNewUser = (request) => {
   const SQLQuery = `INSERT INTO ${table} (name, email, address) 
      VALUES ('${request.name}', '${request.email}', '${!request.address ? null : request.address}')`

   return DB.execute(SQLQuery)
}


/**
 * Update specific user data
 * 
 * @param json request
 * @param int id
 * @return mixed
 */
const updateUser = (request, id) => {
   const SQLQuery = `UPDATE ${table} SET 
      name='${request.name}', email='${request.email}', address='${request.address}' 
      WHERE id=${id}`

   return DB.execute(SQLQuery)
}


/**
 * Delete specific user data from storage
 * @param int id
 * @return mixed
 */ 
const deleteUser = (id) => {
   const SQLQuery = `DELETE FROM ${table} WHERE id=${id}`

   return DB.execute(SQLQuery)
}

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser }