import { DataTypes  } from "sequelize";
import sequelizeConnect from "../database/mssql";

const AccountReceivable = sequelizeConnect.sequelize.define("AccountReceivable",{
  id:{
    type: DataTypes.NUMBER({
      length: 18
    }),
    allowNull:false,
    primaryKey: true,
  },
  client_id:{
    type: DataTypes.STRING({
      length: 20
    }),
    allowNull:false
  },
  client_name:{
    type: DataTypes.STRING({
      length: 150
    }),
    allowNull:false
  },
  type_payment:{
    type: DataTypes.STRING({
      length: 20
    }),
    allowNull:false
  },
  type_currency:{
    type: DataTypes.STRING({
      length: 5
    }),
    allowNull:false
  },
  bank:{
    type: DataTypes.STRING({
      length: 30
    }),
    allowNull:false
  },
  bill_number:{
    type: DataTypes.STRING({
      length: 500
    }),
    allowNull:false
  },
  amount:{
    type: DataTypes.BIGINT,
    allowNull:false
  },
  date_transaction:{
    type: DataTypes.STRING,
    allowNull:false
  },
  date_payment_record: {
    type: DataTypes.STRING,
    allowNull:false
  },
  reference_number:{
    type: DataTypes.STRING({
      length: 20  
    }),
    allowNull:false
  },
  withholdings:{
    type: DataTypes.STRING({
      length: 2
    }),
    allowNull:false
  },
  iva_amount:{
    type: DataTypes.BIGINT,
    allowNull:false
  },
  islr_amount:{
    type: DataTypes.BIGINT,
    allowNull: false
  },
  municipal_amount: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  url_file_proof_of_payment:{
    type: DataTypes.STRING({
      length: 150
    }),
    allowNull:false
  },
  url_file_iva:{
    type: DataTypes.STRING({
      length: 150
    }),
    allowNull:false
  },
  url_file_islr:{
    type: DataTypes.STRING({
      length: 150
    }),
    allowNull:false
  },
  url_file_municipal:{
    type: DataTypes.STRING({
      length: 150
    }),
    allowNull:false
  },

},
{
  tableName: "AccountsReceivable"
});

export default {
  AccountReceivable
}