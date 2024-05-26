import { userModel } from "../../Database/Seqalize.js";
import { dbconnection } from "../../Database/dbConnection.js"
import  bcrypt  from 'bcrypt';
const conn=dbconnection()

const SignUp= async(req,res)=>{
  // conn.query(`insert into users set ?`,req.body)
 await userModel.create(req.body)
  res.status(201).json({message:"success"})
}

const SignIn=async(req,res)=>{
  // conn.execute(`select Id,Email,Password from users where Email='${req.body.Email}'`,(err,data)=>{
    let data=await userModel.findAll()
    if(data.length!=0){
     let match= bcrypt.compareSync(req.body.Password,data[0].Password)
     if(match){
       res.json({message:"Login..Token"})
     }else{
       res.status(401).json({message:"Account not found"})
     }
        }
    else{
       res.status(401).json({message:"Account not found"})
    }
    // })
}
export{
   SignUp,
   SignIn
}