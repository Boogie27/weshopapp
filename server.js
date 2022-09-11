const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const Posts = require('./models/Posts')


const app = express()

// bodypasser middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
require('dotenv').config()

// serve if on production
if(process.env.NODE_ENV === 'production'){
    // set a static folder
    app.use(express.static('crudapp/build'))
    app.get('*', ( request, response) => {
        response.sendFile(path.resolve(__dirname, 'crudapp', 'build', 'index.html'))
    })
}


const DATABASE_URI = "mongodb+srv://crudapp:crudapp123456@cluster0.lmbavfe.mongodb.net/crudapp?retryWrites=true&w=majority"
const connectParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URI, connectParams)
.then(() => console.log('Connected to MongoDB.....'))
.catch((e) => console.log("Error: " + e))

const PORT = process.env.PORT || 3002



// fetch latest products
app.get('/api/post', async (request, response) => {
    Posts.findOne({user_id: 1}, (error, result) => {
       return console.log(result)
    })
})


app.listen(PORT, () => {
    console.log("Server running on port: " + PORT)
})


// mongodb+srv://crudapp:crudapp123456@cluster0.lmbavfe.mongodb.net/crudapp?retryWrites=true&w=majority
// username: crudapp
// password: crudapp123456
// https://git.heroku.com/murmuring-retreat-96458.git

