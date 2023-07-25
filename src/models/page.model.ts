import { DataTypes  } from "sequelize";
import sequelizeConnect from "../database/mssql";

const Page = sequelizeConnect.sequelize.define("Page", {
  id_page: {
   type: DataTypes.STRING,
   unique: {
    msg: 'El id de la página ya existe',
    name:'unico'
   },
   primaryKey: true,
  },
  title_page: {
    type: DataTypes.STRING
  },
  contents_user: {
    type: DataTypes.STRING
  },
  contents_html: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
  },
  creation_date: {
    type: DataTypes.STRING
  },
  modification_date: {
    type: DataTypes.STRING
  },
  type_of_page: {
    type: DataTypes.STRING
  },
  category: {
   type: DataTypes.STRING
  }
 },
 {
  tableName: 'Pages'
 }
);

Page.removeAttribute("id");

export default {
  Page
}
