module.exports = (Sequelize, DataTypes) => {

    const Admins = Sequelize.define(
        "Admins",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            first_name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            passcode: {
                type: DataTypes.STRING(64),
                allowNull: false
            }
        },
        {
            timestamps:false,
            tableName:'admins'
        }
    )
    return Admins;
}