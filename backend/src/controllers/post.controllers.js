import { PostModel } from "../models/post.models.js"
import { UserModel } from "../models/user.models.js";

const ctrlCreatePost = async (req , res ) =>{
    
    const userId = req.user._id;
    
    try {
        const {title, description,imageURL  } = req.body
        const post = new PostModel ({
            title,
            description,
            imageURL,
            autor: userId,
        })
        await post.save()

        await UserModel.findOneAndUpdate(
            { _id: userId },
            { $push: { post: post._id } }
          );

        return res.status(201).json(post)


    } catch (error) {
        return res.status(500).json({ error: 'Error al crear el Post'});
    }
}

const ctrlAllPost = async (req, res) =>{
    const userId = req.user._id
   
    try {
        const postList = await PostModel.find({autor: userId})
            .populate( 'autor', ['username'])
            .populate( 'comments', ['autor','description'])

            return res.status(200).json(postList)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const ctrlDeletePost = async (req , res ) =>{

    const userId = req.user._id;
    const {postId} = req.params
    
    try {
        const postList = await PostModel.findOne({
            _id: postId,
            autor: userId,
        })
        if (!postList) {
            return res.status(404).json({error: 'Post no Encontrado'})
        }
        await PostModel.findOneAndDelete({
            _id: postId,
            autor: userId,
        })
        await UserModel.findOneAndUpdate(
            { _id: userId },
            { $pull: { post: postId } }
           
        )
        return res.status(200).json(postList);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}
const ctrlGetPost = async (req , res ) =>{
    const userId = req.user._id
    const {postId} = req.params

    try {
        const postList = await PostModel.findOne({
            _id: postId,
            autor: userId
        })
            .populate( 'autor', ['username'])
            .populate( 'comments', ['autor','description'])

            if (!postList){
                return res.status(404).json({error: 'Post no Encontrado'})
            }
            return res.status(200).json(postList)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const ctrlEditPost = async (req , res ) =>{
    const {postId} = req.params
    const userId = req.user._id

    try {
        const post = await PostModel.findOne(
            {
                _id : postId,
                autor: userId,
            })
        if (!post) {
            return res.status(404).json({ error: 'No encontramos el Post que intentas editar' }); 
        }
        post.set(req.body)

        await post.save()
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({ error: 'Tuvimos un error' });
    }

}

export {
    ctrlCreatePost,
    ctrlAllPost,
    ctrlDeletePost,
    ctrlGetPost,
    ctrlEditPost,

}