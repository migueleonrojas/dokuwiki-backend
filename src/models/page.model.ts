import { DataTypes  } from "sequelize";
import sequelizeConnect from "../database/mssql";

const Page = sequelizeConnect.sequelize.define("page", {
  id_page: {
    type: DataTypes.STRING
  },
  id_version_page: {
    type: DataTypes.STRING
  },
  title_page: {
    type: DataTypes.STRING
  },
  contents: {
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
  }
});

Page.removeAttribute("id");

export default {
  Page
}
