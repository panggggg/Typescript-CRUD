import {Request, Response} from 'express'
import mongoose from 'mongoose'
import userInfoModel from '../models/userInfo.model'

export let getAllUser = (req: Request, res: Response) => {
    userInfoModel.find({}, (err: any, user: any) => {
        if(err){
            res.send(err)
        }
        res.json(user)
    })
}

export let getUserById = (req: Request, res: Response) => {
    userInfoModel.findById({_id: req.params.id}, (err: any, user: any) => {
        if(err){
            res.send("User not found")
        }
        res.send(user)
    })
}

export let createNewUserInfo = (req: Request, res: Response) => {
    const newUser = new userInfoModel(req.body)
    newUser.save((err: any, user: any) => {
        if(err){
            console.log(err)
            res.send(err)
        } else {
            console.log(user)
            res.json(user)
        }
    })
}

export let updateUserInfo = (req: Request, res: Response) => {
    userInfoModel.findByIdAndUpdate({_id: req.params.id}, req.body, (err: any, user: any) => {
        if(err){
            res.send(err)
        }
        res.send("User info updated successfully")
    })
}

export let deleteUserInfo = (req: Request, res: Response) => {
    userInfoModel.deleteOne({_id: req.params.id}, (err: any, user: any) => {
        if(err){
            res.send(err)
        }
        console.log(user)
        res.send(`User has been deleted`)
    })
}

