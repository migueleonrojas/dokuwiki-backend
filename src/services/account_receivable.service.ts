import accountsReceivableModel from "../models/accounts_receivable.model";
import path from 'path';
import fs from 'fs';
import { GroupedCountResultItem, Op, Sequelize } from "sequelize";
const PORT = process.env.PORT || 8080;
import moment from "moment";
import { v1 as uuidv1 } from 'uuid';

const createFilesService = async (files: any) => {
  try{
    const rootPathApp:string = path.join(path.resolve(__dirname, '../', 'files')).replace(/\\/g,'/');
    /* const rootPathApp:string = path.join(path.resolve(__dirname,'../../../../../', 'd:/INETPUB/wwwroot/dokuwiki-backend/dist/' ,'files')).replace(/\\/g,'/'); EN EL SERVIDOR ESTA ASI */
    let objectFiles = {
      file_iva: "",
      file_islr: ""
    }

    let arrayFiles = Object.entries(files);

    arrayFiles.forEach((elemFile:any) => {
      let nameFile:string = `${moment().format('YYYY-MM-DD HH-mm-ss-SSS')}_${uuidv1()}_${elemFile[1].name}`
      fs.appendFile(`${rootPathApp}/${nameFile}`, elemFile[1].data, () => {
      
      });
      if(elemFile[0] === 'file_iva'){
        objectFiles.file_iva = `http://localhost:${PORT}/${nameFile}`;
      }
      else if(elemFile[0] === 'file_islr'){
        objectFiles.file_islr = `http://localhost:${PORT}/${nameFile}`;
      }
    });
    
    return objectFiles;
    

  }
  catch (error:any) {
    throw Error(`Error creating the file: ${error.message}`);
  }
}

const createAccountReceivableService = async (query: any = {}) => {
  
  let idAccountReceivable = new Date().getTime();

  try{

    const accountReceivable = {
      id: idAccountReceivable,
      client_id: query.body.client_id,
      client_name:  query.body.client_name,
      type_payment: query.body.type_payment,
      type_currency: query.body.type_currency,
      bank: query.body.bank,
      bill_number: query.body.bill_number,
      amount: query.body.amount,
      date_transaction: query.body.date_transaction,
      reference_number: query.body.reference_number,
      withholdings: query.body.withholdings,
      iva_amount: query.body.iva_amount,
      islr_amount: query.body.islr_amount,
      url_file_iva: query.body.url_file_iva,
      url_file_islr: query.body.url_file_islr
    }

    const newAccountsReceivable =  await accountsReceivableModel.AccountReceivable.create(accountReceivable);


    return newAccountsReceivable;

  }
  catch (error: any) {
    
    throw Error(`Error creando el pago: ${error.message}`);
  
  }




}


const getAccountsReceivableByRifService = async (rif: string = "") => {

  try {
    const accountsReceivableResponse = await accountsReceivableModel.AccountReceivable.findAll({
      order:[
        ['date_transaction', 'DESC']
      ],
      where: {
        client_id: {[Op.eq]: rif}
      }
    })
  
    return accountsReceivableResponse;
  }
  catch (error:any) {
    throw Error(`Error obteniendo las Pagos: ${error.message}`);
  }
  


}




export default{
  createAccountReceivableService,
  createFilesService,
  getAccountsReceivableByRifService
}