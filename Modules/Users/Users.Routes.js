import express from 'express'
import {SignIn, SignUp} from './Users.controller.js'
import { CheckEmailExist } from '../../MiddleWare/CheckEmailExist.js'
const router=express.Router()
router.use('/Signup',CheckEmailExist,SignUp)
router.use('/SignIn',SignIn)

export default router