module.exports = (Sequelize, DataTypes) => {

    const Delivery_fee = Sequelize.define(
        "Delivery_fee",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            city_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            base_fee: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            per_mile_fee: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            distance: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            },
            total_fee_price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false
            }
        },
        {
            timeStamp: false,
            tableName: "delivery_fee"
        }
    )

    return Delivery_fee;
}