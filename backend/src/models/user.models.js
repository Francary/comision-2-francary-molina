import { Schema, model } from 'mongoose'

const UserShema = new Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    avatarURL:{
        type: String,
        required: true,
    },
}
,
{
    post: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
]
},
{
  comment: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
]
})

const UserModel = model("User", UserShema)

export {UserModel}
