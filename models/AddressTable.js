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
            client_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            district: {
                type: DataTypes.STRING(255)
            },
            city_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            postal_code: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            obs: {
                type: DataTypes.STRING(255)
            },
            createdAt:{
                type: DataTypes.DATE
            },
            deletedAt:{
                type: DataTypes.DATE
            },
            updatedAt:{
                type: DataTypes.DATE
            }
        },
        {
            timestamps: true,
            paranoid:true,
            tableName: 'address'
        }
    )

    Address.associate = (models) => {
        Address.belongsTo(
            models.Clients,
            {as: 'clients', foreignKey: 'client_id'}),
        Address.hasMany(
            models.Orders,
            {as: 'orders',foreignKey: 'address_id'});
    }

    return Address;

}