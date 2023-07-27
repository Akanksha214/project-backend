module.exports = function (sequelize, DataType) {

    const Student = sequelize.define('Student', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sName: {
            type: DataType.STRING
        },
        phno: {
            type: DataType.INTEGER
        },
        address: {
            type: DataType.STRING
        },
        email: {
            type: DataType.STRING
        },
        createdAt: {
            type: DataType.DATE
        },
        updatedAt: {
            type: DataType.DATE
        },
    }, {
        timestamps: true,
        underscored: true,
        tablename: 'students'
    });
    return Student


}