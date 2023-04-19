module.exports = (Sequelize,DataTypes) =>{

    const Orders = Sequelize.define(
        'Orders',
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            address_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            clients_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            payment_methods_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            delivery_fee_id:{
                type: DataTypes.INTEGER,
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
            },
            payAt:{
                type: DataTypes.DATE
            }
        },
        {
            timestamps:true,
            tableName:'orders'
        }

    )

    Orders.associate =(models) =>{
        Orders.belongsToMany(
            models.Products,
            {
                as: "products",
                through: "items_orders",
                foreignKey: "orders_id",
                otherKey: "products_id",
                timestamps: false
            }
        )
    }

return Orders
}