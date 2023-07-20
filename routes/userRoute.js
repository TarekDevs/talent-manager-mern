const express = require('express');
const user = require('../models/userModel')
const {
    getusers, 
    getuser, 
    createuser, 
    updateuser,
    deleteuser
} = require('../controllers/userController')

const router = express.Router();

router.get('/', getusers);
router.get('/:id', getuser);
router.post('/', createuser);
router.put('/:id', updateuser);
router.delete('/:id', deleteuser)


module.exports = router;