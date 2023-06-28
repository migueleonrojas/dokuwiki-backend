import { DataTypes  } from "sequelize";
import sequelizeConnect from "../database/mssql";

const Page = sequelizeConnect.sequelize.define("page", {
  id_page: {
    type: DataTypes.STRING,
    unique: true
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
  is_solved: {
    type: DataTypes.STRING
  },
  type_of_page: {
    type: DataTypes.STRING
  }
});

Page.removeAttribute("id");

export default {
  Page
}
