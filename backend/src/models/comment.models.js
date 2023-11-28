import {Schema, model} from 'mongoose'

const CommentSchema = new Schema ({

    description:{
        type: String,
        required : true,
    },
    autor:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    post:
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const CommentModel = model('Comment', CommentSchema)

export{CommentModel}