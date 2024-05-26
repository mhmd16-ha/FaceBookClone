import { PostModel } from "../../Database/Seqalize.js";
import { dbconnection } from "../../Database/dbConnection.js";
const conn = dbconnection();
const addPost = async(req, res) => {
  await PostModel.create(req.body)
  res.status(201).json({ message: "success" });
};
const getPosts =async (req, res) => {
  
 let posts=await PostModel.findAll()
res.status(201).json({ message: "success", allPosts: posts });


  // conn.execute(
  //   `select users.Id as user_Id,users.UserName,posts.Id as Post_Id,posts.Title,posts.Describtion from posts join users on User_Id=users.Id;
  //   `,
  //   (err, data) => {
  //     res.status(201).json({ message: "success", allPosts: data });
  //   }
  // );
};
const getSpecificPost = async(req, res) => {
  let posts=await PostModel.findByPk(req.params.id)
res.status(201).json({ message: "success", allPosts: posts });
  // conn.execute(
  //   `select users.Id as user_Id,users.UserName,posts.Id as Post_Id,posts.Title,posts.Describtion from posts join users on User_Id=users.Id where posts.Id='${req.params.id}';`,
  //   (err, data) => {
  //     res.status(201).json({ message: "success", allPosts: data });
  //   }
  // );
};
const getUserPost = async(req, res) => {
  let posts=await PostModel.findAll({
    where:{
      User_Id:req.params.id
    }
  })
res.status(201).json({ message: "success", allPosts: posts });

  // conn.execute(
  //   `select users.Id as user_Id,users.UserName,posts.Id as Post_Id,posts.Title,posts.Describtion from posts join users on User_Id=users.Id where users.Id='${req.params.id}';`,
  //   (err, data) => {
  //     res.status(201).json({ message: "success", allPosts: data });
  //   }
  // );
};

const UpdatePost = async(req, res) => {
  // conn.query(`update posts set ? where Id= ?`, [req.body, req.params.id]);
  let [created]=await PostModel.update({
    Title:req.body.Title,
    User_Id:req.body.User_Id,
    Describtion:req.body.Describtion
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
};
const DeletePost =async(req, res) => {
  // conn.execute(`delete from posts where Id= '${req.params.id}'`);
  let created=await PostModel.destroy({
    where :{
      id:req.params.id
    }
  })
  if(created){
    res.status(201).json({ message: "success" });
  }else{
    res.status(404).json({ message: "Not Found" });
  }
};
export { addPost, getPosts, getSpecificPost, getUserPost ,UpdatePost,DeletePost };
