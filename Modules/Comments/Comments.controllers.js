import { CommentModel } from "../../Database/Seqalize.js";

const comments=async(req,res)=>{
    let comment=await CommentModel.findAll()
    res.status(201).json({Message:"All comments",comment})
}
const Addcomments= async(req,res)=>{
   await CommentModel.create(req.body)
    res.status(201).json({Message:"Success"})
}
const Updateomments= async(req,res)=>{
    let [created]=await CommentModel.update({
        Content:req.body.Content,
        User_Id:req.body.User_Id,
        postId:req.body.postId
      },{
        where :{
          id:req.params.id
        }
      })
      if(created){
        res.status(201).json({ message: "success" });
      }else{
        res.status(404).json({ message: "Not Found" });
    
      }
 }
 const DeleteComments= async(req,res)=>{
    let created=await CommentModel.destroy({
        where :{
          id:req.params.id
        }
      })
      if(created){
        res.status(201).json({ message: "success" });
      }else{
        res.status(404).json({ message: "Not Found" });
    
      }
 }
export{
    comments,Addcomments,Updateomments,DeleteComments
}