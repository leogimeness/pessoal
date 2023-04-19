module.exports = (Sequelize,DataTypes) =>{

    const Products = Sequelize.define(
        'Products',
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            product_name:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            price:{
                type:DataTypes.DECIMAL(7,2),
                allowNull: false
            },
            categories_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            new_released:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            promotion:{
                type: DataTypes.STRING(255),
                allowNull: false
            },
            active:{
                type: DataTypes.TINYINT,
                allowNull: false
            }
        },
        {
            timeStamp:false,
            tableName:"products"
        }
    )

    return Products;
}