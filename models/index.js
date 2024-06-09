const dbconfig = require("../config/dbconfig.js");

const {Sequelize,DataTypes}= require("sequelize");

const sequelize = new Sequelize (
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD, {
        host:dbconfig.HOST,
        dialect: dbconfig.dialect,
        operatorsAliases: false
    }
)

sequelize.authenticate()
.then(()=>{
    console.log("..connected")
})
.catch(err=>{
    console.log("Error"+err)
})

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.products = require('./productModel.js')(sequelize,DataTypes)
db.reviews = require('./reviewModel.js')(sequelize,DataTypes)
db.file = require('./fileModel.js')(sequelize,DataTypes)
db.mail = require('./emailModel.js')(sequelize,DataTypes)


db.sequelize.sync({ force: false })
.then(()=> {
    console.log("yes, re-sync is done")
})

module.exports = db 