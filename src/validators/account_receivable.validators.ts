import Joi from "joi";


const createAccountReceivableValidation = Joi.object().keys({
  id: Joi.number().empty().min(0).max(2^53).required().messages({
    "number.base": "El id debe ser un número.",
    "number.empty": "El id no puede estar vacio.",
    "any.required": "El id debe indicarse.",
    "number.min": "El id debe ser mayor que 0",
    "number.max": "El id debe ser menor que 999.999.999.999.999.999"
  }),
  client_id: Joi.string().empty().max(20).required().messages({
    "any.base": "El rif o la cedula debe ser un texto.",
    "string.empty": "El rif o la cedula no puede estar vacio.",
    "string.max": "El rif o la cedula debe tener 20 caracteres como máximo",
    "any.required": "El rif o la cedula debe indicarse",
  }),
  client_name: Joi.string().empty().max(150).required().messages({
    "any.base": "El nombre del cliente debe ser un texto.",
    "string.empty": "El nombre del cliente no puede estar vacio.",
    "string.max": "El nombre del cliente debe tener 150 caracteres como máximo",
    "any.required": "El nombre del cliente debe indicarse",
  }),
  type_currency: Joi.string().empty().max(5).required().messages({
    "any.base": "El tipo de moneda debe ser un texto.",
    "string.empty": "El tipo de moneda no puede estar vacio.",
    "string.max": "El tipo de moneda debe tener 5 caracteres como máximo",
    "any.required": "El tipo de moneda debe indicarse",
  }),
  type_payment: Joi.string().empty().max(20).required().messages({
    "any.base": "El metodo de pago debe ser un texto.",
    "string.empty": "El metodo de pago no puede estar vacio.",
    "string.max": "El metodo de pago debe tener 5 caracteres como máximo",
    "any.required": "El metodo de pago debe indicarse",
  }),
  bank: Joi.string().empty().max(30).required().messages({
    "any.base": "El número de cuenta bancaria debe ser un texto.",
    "string.empty": "El número de cuenta bancaria no puede estar vacio.",
    "string.max": "El número de cuenta bancaria debe tener 30 caracteres como máximo",
    "any.required": "El número de cuenta bancaria debe indicarse",
  }),
  bill_number: Joi.string().empty().max(500).required().messages({
    "any.base": "El número de factura debe ser un texto.",
    "string.empty": "El número de factura no puede estar vacio.",
    "string.max": "El número de factura debe tener 500 caracteres como máximo",
    "any.required": "El número de factura debe indicarse",
  }),
  amount: Joi.number().empty().required().messages({
    "number.base": "El monto debe ser un número.",
    "number.empty": "El monto no puede estar vacio.",
    "any.required": "El monto debe indicarse.",
  }),
  date_transaction: Joi.string().empty().required().messages({
    "any.base": "La fecha de la transacción debe ser un texto.",
    "string.empty": "La fecha de la transacción no puede estar vacio.",
    "any.required": "La fecha de la transacción debe indicarse",
  }),
  date_payment_record: Joi.string().required().optional().messages({
    "any.base": "La fecha del registro de pago debe ser un texto.",
    "any.required": "La fecha del registro de pago debe indicarse",
  }),
  reference_number: Joi.string().empty().max(20).required().messages({
    "any.base": "El número de referencia debe ser un texto.",
    "string.empty": "El número de referencia no puede estar vacio.",
    "string.max": "El número de referencia debe tener 20 caracteres como máximo",
    "any.required": "El número de referencia debe indicarse",
  }),
  withholdings: Joi.string().empty().max(2).required().messages({
    "any.base": "Las retenciones debe ser un texto.",
    "string.empty": "Las retenciones no puede estar vacio.",
    "string.max": "Las retenciones debe tener 2 caracteres como máximo",
    "any.required": "Las retenciones debe indicarse",
  }),
  iva_amount: Joi.number().allow(0).messages({
    "number.base": "El monto del iva debe ser un número.",
   
  }),
  islr_amount: Joi.number().allow(0).messages({
    "number.base": "El monto del islr debe ser un número.",
    
  }),
  municipal_amount: Joi.number().allow(0).messages({
    "number.base": "El monto del islr debe ser un número.",
  }),
  url_file_iva: Joi.string().max(150).allow('').messages({
    "any.base": "La url del archivo adjunto del iva debe ser un texto.",
    "string.max": "La url del archivo adjunto del iva debe tener 150 caracteres como máximo",
    
  }),
  url_file_islr: Joi.string().max(150).allow('').messages({
    "any.base": "La url del archivo adjunto del islr debe ser un texto.",
    "string.max": "La url del archivo adjunto del islr debe tener 150 caracteres como máximo",
  }),
  url_file_municipal: Joi.string().max(150).allow('').messages({
    "any.base": "La url del archivo adjunto del comprobante municipal debe ser un texto.",
    "string.max": "La url del archivo adjunto del comprobante municipal debe tener 150 caracteres como máximo",
  }),
  url_file_proof_of_payment: Joi.string().max(150).allow('').messages({
    "any.base": "La url del archivo adjunto del islr debe ser un texto.",
    "string.max": "La url del archivo adjunto del islr debe tener 150 caracteres como máximo",
  }),


})

const createFileValidation = Joi.object().keys({
  file_proof_of_payment: Joi.object().keys({
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
    mimetype: Joi.string().valid('image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf').required().messages({
      "string.base": "El tipo de archivo debe ser un texto.",
      "any.only": "El tipo de archivo debe ser una imagen: jpeg, jpg, png, gif o pdf.",
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
  }),
  file_iva: Joi.object().keys({
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
    mimetype: Joi.string().valid('image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf').required().messages({
      "string.base": "El tipo de archivo debe ser un texto.",
      "any.only": "El tipo de archivo debe ser una imagen: jpeg, jpg, png, gif o pdf.",
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
  }),
  file_islr: Joi.object().keys({
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
    mimetype: Joi.string().valid('image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf').required().messages({
      "string.base": "El tipo de archivo debe ser un texto.",
      "any.only": "El tipo de archivo debe ser una imagen: jpeg, jpg, png, gif o pdf.",
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
  }),
  file_municipal: Joi.object().keys({
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
    mimetype: Joi.string().valid('image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf').required().messages({
      "string.base": "El tipo de archivo debe ser un texto.",
      "any.only": "El tipo de archivo debe ser una imagen: jpeg, jpg, png, gif o pdf.",
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
  }),


});

const searchByRifAccountReceivableValidation = Joi.object().keys({
  date_payment_record_start: Joi.string().empty().min(8).required().messages({
    "string.base": "La fecha de inicio de la busqueda debe ser un texto.",
    "string.empty": "La fecha de inicio de la busqueda no puede estar vacio.",
    "string.min": "La fecha de inicio de la busqueda debe tener el formato yyyyMMdd = 20230602",
    "any.required": "La fecha de inicio de la busqueda debe indicarse.",
  }),
  date_payment_record_end: Joi.string().empty().min(8).required().messages({
    "string.base": "La fecha de fin de la busqueda debe ser un texto.",
    "string.empty": "La fecha de fin de la busqueda no puede estar vacio.",
    "string.min": "La fecha de fin de la busqueda debe tener el formato yyyyMMdd = 20230602",
    "any.required": "La fecha de fin de la busqueda debe indicarse.",
  }),

});

export default {
  createFileValidation,
  createAccountReceivableValidation,
  searchByRifAccountReceivableValidation
}
