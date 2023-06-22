const express = require('express')
const router = express.Router()
const DATA = require('../models/student')
//students full list read
router.get('/studentslist',async(req,res)=>{
try {
    const list = await DATA.find()
    res.send(list)
} catch (error) {
    console.log(error)
}
})

//add students
router.post('/studentsadd',async(req,res)=>{
    try {
    let item = {
        name : req.body.name,
        age :req.body.age,
        place :req.body.place
    }
    const newStudent = new DATA(item)
    const saveStudent = await newStudent.save()
    res.send(saveStudent)
    } catch (error) {
        console.log(error)
    }
})

//delete students
router.delete('/delstudent/:id',async(req,res)=>{
    try {
    let id = req.params.id
    const deleteStudent = await DATA.findByIdAndDelete(id)
    res.send(deleteStudent)
    } catch (error) {
        console.log(error)
    }
})

//update student
router.put('/studentupd',async(req,res)=>{
    try {
    let id = req.body._id
    let item = {
        name:req.body.name,
        age:req.body.age,
        place:req.body.place
    }
    let updateData = {
        $set:item
    }
    let updateStudent = await DATA.findByIdAndUpdate({ '_id': id }, updateData)
        res.send(updateStudent)

    } catch (error) {
        console.log(error)
    }
})

//get single student
router.get('/studentslists/:id',async(req,res)=>{
    try {
    let id = req.params.id
    const singleStudent = await DATA.findById(id)
    res.send(singleStudent)
    } catch (error) {
        console.log(error)
    }
})








module.exports=router