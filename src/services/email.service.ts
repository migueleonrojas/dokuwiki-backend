/* 
const nodemailer = require("nodemailer"); */
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'server.freshfishdelivery.com',
  port: 587,
  secure: false, 
  auth: {
    user: "jcontreras@freshfishdelivery.com", /*correo para las pruebas =>  mleon@freshfishdelivery.com */ /*  */
    pass: "FFjcontreras**01"                    /* FFmleon**01 */ /*  */
  }
});


const sendEmailService = async (query: any = {}) => {

  

  
  try{
   
    await transport.sendMail({
      from: query.body.from[0],
      to: query.body.to.join(', '),
      subject: query.body.subject,
      html: query.body.content
    })

    
  }

  catch (error: any) {
    
    throw Error(`Error tratando de enviar el correo: ${error.message}`);
  
  }
}

export default {
  sendEmailService
}