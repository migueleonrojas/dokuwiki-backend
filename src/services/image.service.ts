
import path from 'path';
import fs from 'fs';
const PORT = process.env.PORT || 8080;

const createImageService = async (image: any) => {

  try {
    
    const rootPathApp:string = path.join(path.resolve(__dirname, '../', 'images')).replace(/\\/g,'/');
    
    fs.appendFile(`${rootPathApp}/${image.name}`, image.data, () => {
      
    });
    
    return `http://localhost:${PORT}/${image.name}`;

    
  }
  catch (error:any) {
    throw Error(`Error creating the image: ${error.message}`);
  }

}

export default {
  createImageService
}



