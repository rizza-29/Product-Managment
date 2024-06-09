const db = require('../models')
const nodemailer = require("nodemailer")
const File=db.file
const Mail = db.mail

const createFile = async (fileName,originalname,res) =>{

    let FileData = {
        filename:fileName,
        originalname:originalname
    }
    const file = await File.create(FileData)
    res.status(200).send("file uploaded")
}

const sendemail = async (req,res) => {
    let mailData = {
        reciepient:req.body.to,
        subject:req.body.subject
    }
    const mail = await Mail.create(mailData)
    const transport = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"ar.raza5092@gmail.com",
            pass:"qtmywnxflpnddyke"
        }
    })
    const mailOption = {
        from:req.body.from,
        to:req.body.to,
        subject:req.body.subject,
        text:req.body.text
    }
    transport.sendMail(mailOption)
    res.json({
        success:1,
        message:"Email send and data saved"
    })
}

module.exports={
    createFile,
    sendemail
}