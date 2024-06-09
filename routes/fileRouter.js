const fileController = require("../controllers/fileController")

const router = require("express").Router()

const multer = require('multer');
const { file } = require("../models");

const upload = multer({
    storage:multer.diskStorage({
        destination: function (req,file,callBack){
            callBack(null,"file")
        },
        filename: function (req,file,callBack){
            callBack(null,file.fieldname+"-"+Date.now()+'.jpg')
        }
    })
}).single("user.file")

router.post("/upload",upload,(req,res)=>{
    fileController.createFile(req.file.filename,req.file.originalname,res)
})

router.post("/email",fileController.sendemail)

module.exports = router