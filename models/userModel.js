const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        nom: {
            type: String,
            required: [true, "Please enter a user name"]
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true // when data is created and when data is modified
    }

)

const user = mongoose.model('user', userSchema);

module.exports = user;