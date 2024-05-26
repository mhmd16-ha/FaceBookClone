import express from 'express'
import router from './Modules/Users/Users.Routes.js'
import PostsRouter from './Modules/Posts/Posts.routes.js'
import { sequelize } from './Database/Seqalize.js'
import Commentrouter from './Modules/Comments/Comments.routes.js'
const app = express()
const port = 3000
sequelize.sync()

app.use(express.json())
app.use('/Users', router)
app.use('/Posts', PostsRouter)
app.use('/Comments', Commentrouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))