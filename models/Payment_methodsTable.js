module.exports = (Sequelize, DataTypes) => {

    const Payment_methods = Sequelize.define(
        'Payment_methods',
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            payment_method_name:{
                type: DataTypes.STRING(45),
                allowNull: false
            }
        },
        {
            timestamps:false,
            tableName:'payment_methods'
        }
    )
    return Payment_methods;
}