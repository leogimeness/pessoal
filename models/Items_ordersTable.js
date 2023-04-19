module.exports = (Sequelize,DataTypes) =>{

    const Items_orders = Sequelize.define(
        "Items_orders",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            order_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            product_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            discount:{
                type: DataTypes.DECIMAL(10,2)
            },
            obs:{
                type: DataTypes.STRING(255)
            }
        },
        {
            timeStamp:false,
            tableName:"items_orders"
        }
    )
return Items_orders;
}