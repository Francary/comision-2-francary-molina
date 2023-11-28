import { CommentModel } from "../models/comment.models.js"
import { PostModel } from "../models/post.models.js"
import { UserModel } from "../models/user.models.js"

const ctrlCreateComment = async (req, res) =>{
    const {postId} = req.params
    const userId = req.user._id
    console.log('post', postId )
    try {
        const comment = new CommentModel({
            ...req.body,
            post: postId,
            autor: userId
        })

        await comment.save()

        await UserModel.findOneAndUpdate(
            { _id: userId },
            { $push: { comment: comment._id } }
        )
        await PostModel.findOneAndUpdate(
            { _id: postId },
            { $push: { comments: comment._id } }
        )
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo crear el comentario' });
    }


}
const ctrlAllComment = async (req, res) =>{


}
const ctrlGetComment = async (req, res) =>{


}
const ctrlDeleteComment = async (req, res) =>{
    const {commentId , postId} = req.params
    const userId = req.user._id 

    try {
        await CommentModel.findOneAndDelete({
            _id: commentId,
            post: postId
        })

        await PostModel.findOneAndUpdate(
            {_id: postId},
            { $pull: { comments: commentId }}
            )
        await UserModel.findOneAndUpdate(
            {_id: userId},
            {$pull: {comment: commentId}}
        )    
        res.status(201).json("Comentario Eliminado Correctamente");
    } catch (error) {
        res.status(500).json({ error: 'No se pudo borrar el Comentario' });
    }
}

const ctrlEditComment = async (req, res) =>{


}

export {
    ctrlCreateComment,
    ctrlAllComment,
    ctrlGetComment,
    ctrlDeleteComment,
    ctrlEditComment,

}