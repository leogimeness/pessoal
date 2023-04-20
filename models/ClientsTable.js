module.exports = (Sequelize, DataTypes) => {

    const Clients = Sequelize.define(
        "Clients",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
                },
            first_name:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            last_name:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            phone_number:{
                type: DataTypes.STRING(15)
            },
            email:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            passcode:{
                type: DataTypes.STRING(64),
                allowNull: false
            },
            createdAt:{
                type: DataTypes.DATE
            },
            updatedAt:{
                type: DataTypes.DATE
            },
            deletedAt:{
                type: DataTypes.DATE
            }
        },
        {
            timestamps:true,
            tableName:'clients'
        }

    )

    Clients.associate = (models) => {
        Clients.hasMany(
            models.Address,
            {as: 'addresses', foreignKey:"client_id"}
        )
    }

return Clients;
}