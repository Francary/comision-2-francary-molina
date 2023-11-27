import { Schema, model } from 'mongoose'

const PostSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },  
    imageURL:{
        type: String,
        required: true,
    },
    autor:{        
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
    },
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ],
    },
    {
        timestamps: true,
        versionKey: false,
    },

)

const PostModel = model('Post', PostSchema)

export {PostModel}
