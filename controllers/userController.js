const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')


//get all users
const getusers = asyncHandler(async(req, res)=> {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//get a single user
const getuser = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//create a user
const createuser = asyncHandler(async(req, res) => {

    try {
        const user = await User.create(req.body)
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }

})

//update a user
const updateuser =  asyncHandler(async(req, res)=> {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user){
            res.status(404);
            throw new Error(`cannot find any user with ID ${id}`);
        }
        const Updateduser = await User.findById(id);
        res.status(200).json(Updateduser);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//dalete a user
const deleteuser = asyncHandler(async(req,res) => {
    try {
        const{id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            res.status(404);
            throw new Error(`cannot find any user with ID ${id}`);
        }
        res.status(200).json(user)
    } catch (error){
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getusers,
    getuser,
    createuser,
    updateuser,
    deleteuser
}