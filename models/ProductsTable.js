module.exports = (Sequelize, DataTypes) => {

    const Products = Sequelize.define(
        'Products',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            product_name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            price: {
                type: DataTypes.DECIMAL(7, 2),
                allowNull: false
            },
            categories_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            new_released: {
                type: DataTypes.TINYINT(1),
                allowNull: false
            },
            promotion: {
                type: DataTypes.TINYINT(1),
                allowNull: false
            },
            genre:{
                type: DataTypes.STRING(255)
            },
            active: {
                type: DataTypes.TINYINT,
                allowNull: false
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
            tableName: "products"
        }
    )

    Products.associate = (models) => {
        Products.hasMany(
            models.Gallery,
            { as: "gallery", foreignKey: "products_id" }
        );
        Products.belongsTo(
            models.Categories,
            { as: "categories", foreignKey: "categories_id" }
        );
        Products.belongsToMany(
            models.Orders,
            {
                as: "orders",
                through: "items_orders",
                foreignKey: "product_id",
                otherKey: "order_id",
                timestamps: true
            }
        )
    }


    return Products;
}