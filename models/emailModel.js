module.exports = (sequelize,DataTypes) => {

    const mail = sequelize.define('mail',{
        reciepient: {
        type:DataTypes.STRING
    },
    subject:{
        type:DataTypes.STRING
    }
    });

    return mail
}