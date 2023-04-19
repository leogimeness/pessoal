module.exports = (Sequelize,DataTypes) =>{

    const Gallery = Sequelize.define(
        'Gallery',
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            products_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            img_video_path_stored:{
                type:DataTypes.STRING(255),
                allowNull: false
            },
            isImg:{
                type:DataTypes.TINYINT,
                allowNull:false
            }
        },
        {
            timeStamp:false,
            tableName:"gallery"
        }
    )

    Gallery.associate = (models) =>{
        Gallery.belongsTo(
            models.Products,
            {
                as: "products", foreignKey: "products_id"
            }
        )
    }

    return Gallery;
}