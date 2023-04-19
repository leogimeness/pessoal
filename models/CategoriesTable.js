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
            timeStamp:false,
            tableName:'categories'
        }
    )

    return Categories;
}