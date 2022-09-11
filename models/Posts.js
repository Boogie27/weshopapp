const mongoose = require('mongoose')



const postsSchema  = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        required: true
    }
})



const Posts = mongoose.model("posts", postsSchema)

module.exports =  Posts