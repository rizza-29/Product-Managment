module.exports= (sequelize,DataTypes) => {
    const file = sequelize.define("file",{
        filename:{
            type:DataTypes.STRING,
        },
        originalname:{
            type:DataTypes.STRING,
        }
    })
    return file
}