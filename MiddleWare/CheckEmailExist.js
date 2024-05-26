import { dbconnection } from "../Database/dbConnection.js"
import bcrypt from  "bcrypt"
const conn=dbconnection()

export const CheckEmailExist=(req,res,next)=>{
conn.execute(`select Email from users where Email='${req.body.Email}'`,(err,data)=>{
if(data.length!=0)return res.status(409).json({message:"Email Already Exist."})
    req.body.Password=bcrypt.hashSync(req.body.Password,8)
    next()
})

}
