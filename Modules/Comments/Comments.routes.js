import express from 'express'
import { Addcomments, DeleteComments, Updateomments, comments } from './Comments.controllers.js'

const Commentrouter=express.Router()

Commentrouter.get('/',comments)
Commentrouter.post('/',Addcomments)
Commentrouter.put('/:id',Updateomments)
Commentrouter.delete('/:id',DeleteComments)
export default Commentrouter
