import Sequelize, { Model } from "sequelize";

class  Product extends Model{
    static init(sequelize){
        super.init({
            name:Sequelize.STRING,
            price:Sequelize.INTEGER,
            path:Sequelize.STRING,
            offer:Sequelize.BOOLEAN,
            url:{
               type:Sequelize.VIRTUAL,
                 get(){
                    return `http://localhost:3001/product-file/${this.path}`;
                 }
            }
        },{
            sequelize,
            tableName:'products'
        });
        return this;
    }

    static associate(models){
       this.belongsTo(models.Category,{
        foreignKey:'category_id', // que é  a chave estrangeira que vai ser referenciada na tabela de produtos
         as: 'category', // o nome do relacionamento que vai ser usado para referenciar a categoria do produto
       }) ;
    }
}

export default Product;