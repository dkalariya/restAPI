const express = require("express");
const Student = require("../models/students")
const router = new express.Router();

router.get("/student", async (req, res) => {

    try {
        const studentData = await Student.find();
        res.send(studentData)

    } catch (e) {
        res.send(e)
    }
})

router.get("/student/:id", async (req, res) => {

    try {
        const _id = req.params.id;
        const studentdata = await Student.findById(_id)
        console.log(studentdata)
        res.send(studentdata)
        if (!studentdata) {
            return res.status(404).send();
        } else {
            return res.send(studentdata);
        }

    } catch (e) {
        res.send(e)
    }
})

router.post("/student", async (req, res) => {
    try {
        const user = new Student(req.body)
        const cretauser = await user.save();
        res.status(200).send(cretauser)
    } catch (e) { res.status(400).send(e) }

})

//update the student by it id ....

router.patch("/student/:id", async (req, res) => {
    try {

        const updatestudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.send(updatestudent);

    } catch (e) { res.status(400).send(e) }

})



//delete the user.......
router.delete("/student/:id", async (req, res) => {
    try {

        const deleteRecord = await Student.findByIdAndDelete(req.params.id)
        if (!req.params.id) {
            return res.status(400).send();
        } else {
            return res.send(deleteRecord);
        }

    } catch (e) {
        res.status(400).send(e)
    }
})




module.exports = router