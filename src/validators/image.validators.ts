import Joi from "joi"

const createImageValidation = Joi.object().keys({
  imagen: Joi.object().keys({
    name: Joi.string().required().messages({
      "string.base": "El nombre del archivo debe ser un texto.",
      "any.required": "El nombre del archivo debe indicarse.",
    }),
    data: Joi.binary().required().max(5242880).messages({
      "binary.base": "La data del archivo debe ser un archivo.",
      "any.required": "La data del archivo debe indicarse.",
      "binary.max": "El tamaño máximo del archivo debe ser 5 Mb" 
    }),
    size: Joi.number().max(5242880).required().messages({
      "number.base": "El tamaño de la imagen debe ser un número.",
      "number.max": "El tamaño máximo de la imagen debe ser 5 Mb",
      "any.required": "El tamaño de la imagen debe indicarse.",
    }),
    encoding: Joi.string().required().messages({
      "string.base": "La codificación debe ser un texto.",
      "any.required": "La codificación debe indicarse.",
    }),
    tempFilePath: Joi.string().optional().allow('').messages({
      "string.base": "La ruta temporal del archivo debe ser un texto.",
    }),
    truncated: Joi.bool().required().messages({
      "bool.base": "El valor del truncado debe ser un booleano",
      "any.required": "El valor del truncado debe indicarse",
    }),
    mimetype: Joi.string().valid('image/jpeg', 'image/jpg', 'image/png', 'image/gif').required().messages({
      "string.base": "El tipo de archivo debe ser un texto.",
      "any.only": "El tipo de archivo debe ser una imagen: jpeg, jpg, png o gif.",
      "any.required": "El tipo de archivo debe indicarse",
    }),
    md5: Joi.string().required().messages({
      "string.base": "El md5 debe ser un texto.",
      "any.required": "El md5 debe indicarse",
    }),
    mv: Joi.function().required().messages({
      "any.required": "El mv debe indicarse",
      "function.base": "El mv debe indicarse"
    })
  })
});
  

export default {
  createImageValidation
}



