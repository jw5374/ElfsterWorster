import mongoose from "mongoose"
import express from "express"
import crypto from "crypto"
import { Group } from "../schemas/docSchemas.js"

const groupRouter = express.Router()

// creates a group in database
groupRouter.post('/group', async (req, res, next) => {
    try {
        let groupId = crypto.randomInt(10000)
        let docObj = req.body
        docObj['groupId'] = groupId.toString()
        docObj['passcode'] = crypto.createHash('sha256').update(docObj.passcode).digest('hex')
        let groupDoc = new Group(docObj)
        let saved = await groupDoc.save()
        res.status(200).send(saved)
    } catch (e) {
        next(e)
    }
})

groupRouter.put('/group/:groupID', async (req, res, next) => {
    // TODO: update group from id

})


groupRouter.get('/group/:groupID', async (req, res, next) => {
    // TODO: get group from id
    try {
        let groupDoc = await Group.find({ "groupId": req.params.groupID })
        if(groupDoc.length == 0) {
            res.status(404).send("No group found.")
        } else {
            res.status(200).send(groupDoc)
        }
    } catch (e) {
        next(e)
    }
})


groupRouter.delete('/group/:groupID', async (req, res, next) => {
    // TODO: delete group from id
})

export default groupRouter
