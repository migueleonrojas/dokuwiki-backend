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
      file_islr: "",
      file_municipal: "",
      file_proof_payment: ""
    }

    let arrayFiles = Object.entries(files);
    let idImage: string = new Date().getTime().toString();

    arrayFiles.forEach((elemFile:any) => {
      let nameFile:string = `${idImage}_${elemFile[1].name}`

      fs.appendFile(`${rootPathApp}/${nameFile}`, elemFile[1].data, () => {
      
      });
      if(elemFile[0] === 'file_iva'){
        
        objectFiles.file_iva = `http://localhost:${PORT}/${nameFile}`;
      }
      else if(elemFile[0] === 'file_islr'){
        objectFiles.file_islr = `http://localhost:${PORT}/${nameFile}`;
      }
      else if(elemFile[0] === 'file_municipal'){
        objectFiles.file_municipal = `http://localhost:${PORT}/${nameFile}`;
      }
      else if(elemFile[0] === 'file_proof_of_payment'){
        objectFiles.file_proof_payment = `http://localhost:${PORT}/${nameFile}`;
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
      date_payment_record: moment().format('YYYY-MM-DDTHH:mm:ss'),
      reference_number: query.body.reference_number,
      withholdings: query.body.withholdings,
      iva_amount: query.body.iva_amount,
      islr_amount: query.body.islr_amount,
      municipal_amount: query.body.municipal_amount,
      url_file_proof_of_payment: query.body.url_file_proof_of_payment,
      url_file_iva: query.body.url_file_iva,
      url_file_islr: query.body.url_file_islr,
      url_file_municipal: query.body.url_file_municipal,
    }

    const newAccountsReceivable =  await accountsReceivableModel.AccountReceivable.create(accountReceivable);


    return newAccountsReceivable;

  }
  catch (error: any) {
    
    throw Error(`Error creando el pago: ${error.message}`);
  
  }




}


const getAccountsReceivableByRifService = async (start_date: string = "", end_date: string = "") => {

  try {

    let start:string =  moment(start_date).format('YYYY-MM-DDTHH:mm:ss.SSS');
    let end: string = moment(end_date).add(24, 'hours').format('YYYY-MM-DDTHH:mm:ss.SSS')

    console.log({
      start,
      end
    })

    const accountsReceivableResponse = await accountsReceivableModel.AccountReceivable.findAll({
      order:[
        ['date_payment_record', 'DESC']
      ],
      where: {
        date_payment_record: {[Op.between]:[start, end]}
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