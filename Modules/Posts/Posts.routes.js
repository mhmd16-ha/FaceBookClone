import express from 'express'
import { DeletePost, UpdatePost, addPost, getPosts, getSpecificPost, getUserPost } from './Posts.controller.js'
const PostsRouter=express.Router()

PostsRouter.route('/').post(addPost).get(getPosts)
PostsRouter.route('/:id').get(getSpecificPost).put(UpdatePost).delete(DeletePost)
PostsRouter.route('/User/:id').get(getUserPost)
export default PostsRouter