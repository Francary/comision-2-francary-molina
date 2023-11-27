import {Schema, model} from 'mongoose'

const CommentSchema = new Schema ({

    autor:[
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
    ],
    description:{
        type: String,
        required : true,
    },
    post: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        }
    ]
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const CommentModel = model('Comment', CommentSchema)

export{CommentModel}