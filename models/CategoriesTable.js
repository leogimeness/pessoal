module.exports = (Sequelize,DataTypes) =>{

    const Categories = Sequelize.define(
        'Categories',
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            categories_name:{
                type:DataTypes.STRING(255),
                allowNull: false
            }
        },
        {
            timestamps:false,
            tableName:'categories'
        }
    )

    Categories.associate = (models) =>{
        Categories.hasMany(
            models.Products,
            {
                as:"categories",foreignKey:"categories_id"
            }
        )
    }

    return Categories;
}