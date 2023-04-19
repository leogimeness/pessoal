module.exports = (Sequelize, DataTypes) => {

    const Address = Sequelize.define(
        'Address',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            address: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            address2: {
                type: DataTypes.STRING(255),
            },
            clientes_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            district:{
                type: DataTypes.STRING(255)
            },
            city_id:{
                type: DataTypes.INTEGER,
                allowNull: false    
            },
            postal_code:{
                type: DataTypes.STRING(255),
                allowNull: false 
            },
            obs:{
                type: DataTypes.STRING(255)
            }
        },
        {
            dataStamp:false,
            tableName:'address'
        }
    )

    return Address;

}