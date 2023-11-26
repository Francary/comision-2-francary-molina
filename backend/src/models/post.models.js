import { Schema, model } from 'mongoose'

const PostShema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    autor:[
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
],
    comments:[
    {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
],
    imageURL:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
    },

})

const PostModel = model("Post", PostShema)

export {PostModel}
