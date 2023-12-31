require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');

const app = express();

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes
app.use('/talentmanager/users',userRoute)

app.get('/', (req, res) => {
   res.send('Hello Talent Manager Node app')
})



mongoose.set("strictQuery",false)
mongoose.connect(MONGO_URL)
    .then(() => {
            console.log('connected to MongoDB')
            app.listen(PORT, ()=> {
                console.log(`Talent Manager Node app is running on port ${PORT}`)
                })
        
    })
    .catch((error)=> {
        console.log(error)
    })