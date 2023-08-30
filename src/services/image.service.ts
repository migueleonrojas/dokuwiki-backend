
import path from 'path';
import fs from 'fs';
const PORT = process.env.PORT || 8080;
import moment from "moment";
import { v1 as uuidv1 } from 'uuid';

const createImageService = async (image: any) => {

  try {
    
    const rootPathApp:string = path.join(path.resolve(__dirname, '../', 'images')).replace(/\\/g,'/');

    /* const rootPathApp:string = path.join(path.resolve(__dirname,'../../../../../', 'd:/INETPUB/wwwroot/dokuwiki-backend/dist/' ,'images')).replace(/\\/g,'/'); EN EL SERVIDOR ESTA ASI */
    let nameImage:string = `${moment().format('YYYY-MM-DD HH-mm-ss-SSS')}_${uuidv1()}_${image.name}`
    
    fs.appendFile(`${rootPathApp}/${nameImage}`, image.data, () => {
      
    });
    
    return `http://localhost:${PORT}/${nameImage}`;

    
  }
  catch (error:any) {
    throw Error(`Error creating the image: ${error.message}`);
  }

}

export default {
  createImageService
}



