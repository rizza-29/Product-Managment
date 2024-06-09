const express=require("express")
const cors = require("cors")

const app=express()

var corOptions = {
    origin:'https://localhost:3000'
}

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

const router = require('./routes/fileRouter.js')
app.use('/api/products',router)


app.listen(3000,()=>{
    console.log("server is runing on",3000);
})