const express = require('express');
const router = express.Router();  
const  {Intro,About,Experience,Project,Contact}= require('../models/portfolioModel');
// const { default: Admin } = require('../client/src/pages/Admin');
const User= require('../models/userModel')

// get All Portfolio data
router.get('/get-portfolio-data',async(req,res)=>{
    try{
        const intros= await Intro.find();
        const abouts= await About.find();
        const experiences= await Experience.find();
        const projects= await Project.find();
        const contacts= await Contact.find();
    res.status(200).send({
        intro: intros[0],
        about:abouts[0],
        projects: projects,
        contact: contacts[0],
        experiences: experiences

    })


    }catch(error){
        res.status(500).send(error);
    }
}); 

//Update Intro

router.put("/update-intro", async (req, res) => {
    try {
        const intro = await Intro.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//Update-about

router.put("/update-about", async (req, res) => {
    try {
        const about = await About.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//add experience

router.post("/add-experience",async(req,res)=>{
try{
    const experience= new Experience(req.body);
    await experience.save();
    res.status(200).send({
        data: experience,
        success: true,
        message: "experience added Successfully"
    });
} catch (error) {
    res.status(500).send(error);
}
})

//update experience
router.put("/update-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//Delete Experience

router.delete("/delete-experience", async (req, res) => {
    try {
        console.log("Request body:", req.body);
        console.log("Request body _id:", req.body._id);
        const experience = await Experience.findOneAndDelete({ _id: req.body._id });
        console.log(experience)
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Deleted Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// add project

router.post("/add-project",async(req,res)=>{
    try{
        const project= new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project added Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
    })

// update project
router.put("/update-project", async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

//delete-project

router.delete("/delete-project", async (req, res) => {
    try {
        console.log("Request body:", req.body);
        console.log("Request body _id:", req.body._id);
        const project = await Project.findOneAndDelete({ _id: req.body._id });
        console.log(project)
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Deleted Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});


//Update Contact

router.put("/update-contact", async (req, res) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact Updated Successfully"
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// admin login
router.post("/admin-login",async(req,res)=>{
     try{
        const user=await User.findOne({username: req.body.username, password:req.body.password} )
        if(user){
         res.status(200).send({
             data: user,
             success: true,
            message: "Project Deleted Successfully"
         });
        }else{
         res.status(200).send({
             data: user, 
             success: true,
             message: "Invalid Username"
        });
        }
     }
     catch (error) {
         res.status(500).send(error);
     }
 });
   






module.exports =router;