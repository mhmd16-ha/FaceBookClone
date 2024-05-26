import { Sequelize ,DataTypes } from "sequelize";
export const sequelize = new Sequelize('FacebookClone', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
  });
sequelize.authenticate().then(()=>{
    console.log("sequelize success");
}).catch(()=>{
    console.log("sequelize error");
})
export let userModel=sequelize.define('user',{
//     id:{
// type:DataTypes.INTEGER,
// autoIncrement:true,
// primaryKey:true,
// allowNull:false,
// unique:true
//     }
UserName:{
    type:DataTypes.STRING(100)
},
Email:{
    type:DataTypes.STRING(150)
},
Password:{
    type:DataTypes.STRING(200)
},
})
export let PostModel=sequelize.define('Post',{
//     id:{
// type:DataTypes.INTEGER,
// autoIncrement:true,
// primaryKey:true,
// allowNull:false,
// unique:true
//     }
Title:{
    type:DataTypes.STRING(100)
},
Describtion:{
    type:DataTypes.STRING(300)
},
User_Id:{
    type:DataTypes.INTEGER(11),
},
})
export let CommentModel=sequelize.define('Comment',{
    //     id:{
    // type:DataTypes.INTEGER,
    // autoIncrement:true,
    // primaryKey:true,
    // allowNull:false,
    // unique:true
    //     }
    Content:{
        type:DataTypes.STRING(200)
    },
    postId:{
        type:DataTypes.INTEGER(11)
    },
    User_Id:{
        type:DataTypes.INTEGER(11),
    },
    })
sequelize.sync({alter:true})