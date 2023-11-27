import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new Schema({
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
    post: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        }
    ],
    comment: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ]
},
{
    timestamps: true,
    versionKey: false,
}
)

    // Se encripta la contraseña antes de (save) guardar el nuevo usuario 
UserSchema.pre('save', async function(next){

    if(!this.isModified('password'))
    return next()

    const hashedPassword = await bcrypt.hash(this.password , 10)
    this.password = hashedPassword
    next()
})


const UserModel = model('User', UserSchema)

export {UserModel}
