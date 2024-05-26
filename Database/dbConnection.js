import mysql from 'mysql2'
export const dbconnection =()=>{
const conn=mysql.createConnection({
    host:'localhost',
    database:'Facebook',
    user:'root',
    password:''

})
conn.connect((err)=>{
    if(err) return console.log("connection error");
    console.log("connection success"); 
})
return conn

}