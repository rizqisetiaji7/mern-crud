const express = require('express')
const UserController = require('../controllers/UserController')
const route = express.Router()

// CREATE - POST
route.post('/', UserController.store)

// READ - GET
route.get('/', UserController.index)

// UPDATE - PATCH
route.patch('/:id', UserController.update)

// UPDATE - PATCH
route.delete('/:id', UserController.destroy)

module.exports = route