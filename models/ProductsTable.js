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
                type: DataTypes.STRING(255),
                allowNull: false
            },
            promotion: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            active: {
                type: DataTypes.TINYINT,
                allowNull: false
            }
        },
        {
            timeStamp: false,
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
                foreignKey: "products_id",
                otherKey: "orders_id",
                timestamps: false
            }
        )
    }


    return Products;
}