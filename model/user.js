module.exports=function(sequelize,DataType){

    const User = sequelize.define('User', {
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        middleName:{
            type:DataType.STRING
        },
        firstName:{
            type:DataType.STRING
        },
        lastName:{
            type:DataType.STRING
        },
        phone:{
            type:DataType.STRING
        },
        address:{
            type:DataType.STRING
        },
        email:{
            type:DataType.STRING
        },
        createdAt: {
            type: DataType.DATE
          },
          updatedAt: {
            type: DataType.DATE
          },
     },{
        timestamps:true,
        underscored:true,
        tablename:'users'
     } )
     return User
}