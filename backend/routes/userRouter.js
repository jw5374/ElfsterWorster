import mongoose from "mongoose"
import express from "express"
import { User } from "../schemas/docSchemas.js"

const userRouter = express.Router()

// creates a user in database
userRouter.post('/user', async (req, res, next) => {
    try {
        let userDoc = new User(req.body)
        let saved = await userDoc.save()
        res.status(200).send(saved)
    } catch (e) {
        next(e)
    }
})


userRouter.put('/user/:userEmail', async (req, res, next) => {
    // TODO: update user from email
    
})


userRouter.get('/user/:userEmail', async (req, res, next) => {
    // TODO: get user from email

})


userRouter.delete('/user/:userEmail', async (req, res, next) => {
    // TODO: delete user from email
    
})

export default userRouter
