import Joi from "joi"

const createImageValidation = Joi.object().keys({
  imagen: Joi.object().keys({
    name: Joi.string().required().messages({
      "string.base": "El name debe ser un texto.",
      "any.required": "El name debe indicarse.",
    }),
    data: Joi.binary().required().max(5242880).messages({
      "binary.base": "La data debe ser un archivo.",
      "any.required": "La data debe indicarse.",
      "binary.max": "El tamaño máximo del archivo debe ser 5 Mb" 
    }),
    size: Joi.number().max(5242880).required().messages({
      "number.base": "El size debe ser un número.",
      "number.max": "El tamaño máximo del archivo debe ser 5 Mb",
      "any.required": "El size debe indicarse.",
    }),
    encoding: Joi.string().required().messages({
      "string.base": "El encoding debe ser un texto.",
      "any.required": "El encoding debe indicarse.",
    }),
    tempFilePath: Joi.string().optional().allow('').messages({
      "string.base": "El tempFilePath debe ser un texto.",
    }),
    truncated: Joi.bool().required().messages({
      "bool.base": "El truncated debe ser un booleano",
      "any.required": "El truncated debe indicarse",
    }),
    mimetype: Joi.string().valid('image/jpeg', 'image/jpg', 'image/png', 'image/gif').required().messages({
      "string.base": "El mimetype debe ser un texto.",
      "any.only": "El mimetype debe ser una imagen: jpeg, jpg, png o gif.",
      "any.required": "El mimetype debe indicarse",
    }),
    md5: Joi.string().required().messages({
      "string.base": "El md5 debe ser un texto.",
      "any.required": "El md5 debe indicarse",
    }),
    mv: Joi.function().required().messages({
      "any.required": "El md5 debe indicarse",
      "function.base": "El md5 debe indicarse"
    })
  })
});
  

export default {
  createImageValidation
}



