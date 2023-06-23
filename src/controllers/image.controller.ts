
import imageService from '../services/image.service'


const createImageController = async (req: any, res: any) => {

  try {
    let imageResult = await imageService.createImageService(req.files.imagen);
    return res.status(200).json({
      status: 200,
      message: 'Imagen creada con exito',
      url_image: imageResult
    });
  }
  catch (error: any) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
  
}


export default {
  createImageController
}