import { DataTypes  } from "sequelize";
import sequelizeConnect from "../database/mssql";

const Category = sequelizeConnect.sequelize.define("Category",{
 id_category:{
  type: DataTypes.STRING,
  primaryKey: true,
  unique: {
   msg: 'El id de la categoría ya existe',
   name:'id de categoría existente'
  },
 },
 name_category:{
  type: DataTypes.STRING,
  primaryKey: true,
  unique: {
   msg: 'El nombre de la categoría ya existe',
   name:'nombre de categoría existente'
  },
  
 },

},
{
 tableName: 'Category'
});

Category.removeAttribute("id");

export default {
 Category
}