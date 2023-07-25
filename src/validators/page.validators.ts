import Joi from "joi"


const createPageValidation = Joi.object().keys({
  id_page: Joi.string().min(36).max(36).messages({
    "string.base": "El id de la página debe ser un texto.",
    "string.min": "El id de la página debe tener 36 letras como mínimo.",
    "string.max": "El id de la página debe tener 36 letras como máximo.",
  }),
  title_page: Joi.string().min(1).empty().max(500).required().messages({
    "string.base": "El titulo de la página debe ser un texto.",
    "string.empty": "El titulo de la página no puede estar vacio.",
    "string.min": "El titulo de la página debe tener 1 letra como mínimo.",
    "string.max": "El titulo de la página debe tener 500 letras como máximo",
    "any.required": "El titulo de la página debe indicarse",
  }),
  contents_user: Joi.string().empty().min(1).max(8000).required().messages({
    "string.base": "El contenido que escribio el usuario debe ser un texto.",
    "string.empty": "El contenido que escribio el usuario no puede estar vacio.",
    "string.min": "El contenido que escribio el usuario debe tener 1 caracter como mínimo",
    "string.max": "El contenido que escribio el usuario debe tener 8000 caracteres como máximo",
    "any.required": "El contenido que escribio el usuario debe indicarse",
  }),
  contents_html: Joi.string().empty().min(1).max(8000).required().messages({
    "string.base": "El contenido del usuario pasado a html debe ser un texto.",
    "string.empty": "El contenido del usuario pasado a html no puede estar vacio.",
    "string.min": "El contenido del usuario pasado a html debe tener 1 caracter como mínimo",
    "string.max": "El contenido del usuario pasado a html debe tener 8000 caracteres como máximo",
    "any.required": "El contenido del usuario pasado a html debe indicarse",
  }),
  username: Joi.string().empty().min(1).max(50).required().messages({
    "string.base": "El nombre del usuario debe ser un texto.",
    "string.empty": "El nombre del usuario no puede estar vacio.",
    "string.min": "El nombre del usuario debe tener 1 caracter como minimo.",
    "string.max": "El nombre del usuario debe tener 50 caracteres como máximo",
    "any.required": "El nombre del usuario debe indicarse",
  }),
  creation_date: Joi.string().messages({
    "string.base": "La fecha de creación de la página debe ser un texto.",
  }),
  modification_date: Joi.string().messages({
    "string.base": "La fecha de modificación debe ser un texto.",
  }),
  type_of_page: Joi.string().empty().valid('incidente', 'documentación').min(20).max(20).messages({
    "string.base": "El tipo de página debe ser un texto.",
    "string.empty": "El tipo de página debe no puede estar vacio.",
    "any.only":   "El tipo de página debe ser \"incidente\" o \"documentación\".",
    "string.min": "El tipo de página debe tener 20 letras como mínimo.",
    "string.max": "El tipo de página debe tener 20 letras como máximo.",
  }),
  category: Joi.string().min(1).empty().max(50).required().messages({
   "string.base": "La categoría de la página debe ser un texto.",
   "string.empty": "La categoría de la página no puede estar vacio.",
   "string.min": "La categoría de la página debe tener 1 letra como mínimo.",
   "string.max": "La categoría de la página debe tener 30 letras como máximo",
   "any.required": "La categoría de la página debe indicarse",
  }),
});

const modifyPageValidation = Joi.object().keys({
  id_page: Joi.string().empty().min(36).max(36).required().messages({
    "any.base": "El id de la página debe ser un texto.",
    "string.empty": "El id de la página no puede estar vacio.",
    "string.min": "El id de la página debe tener 36 caracteres como mínimo",
    "string.max": "El id de la página debe tener 36 caracteres como máximo",
    "any.required": "El id de la página debe indicarse",
  }),
  title_page: Joi.string().empty().min(1).max(500).required().messages({
    "any.base": "El titulo de la página debe ser un texto.",
    "string.empty": "El titulo de la página no puede estar vacio.",
    "string.min": "El titulo de la página debe tener 1 caracter como mínimo",
    "string.max": "El titulo de la página debe tener 500 caracteres como máximo",
    "any.required": "El titulo de la página debe indicarse",
  }),
  contents_user: Joi.string().empty().min(1).max(8000).required().messages({
    "any.base": "El contenido que escribio el usuario debe ser un texto.",
    "string.empty": "El contenido que escribio no puede estar vacio.",
    "string.min": "El contenido que escribio el usuario debe tener 1 caracter como mínimo",
    "string.max": "El contenido que escribio el usuario debe tener 8000 caracteres como máximo",
    "any.required": "El contenido que escribio el usuario debe indicarse",
  }),
  contents_html: Joi.string().empty().min(1).max(8000).required().messages({
    "any.base": "El contenido del usuario pasado a html debe ser un texto.",
    "string.empty": "El contenido del usuario pasado a html no puede estar vacio.",
    "string.min": "El contenido del usuario pasado a html debe tener 1 caracter como mínimo",
    "string.max": "El contenido del usuario pasado a html debe tener 8000 caracteres como máximo",
    "any.required": "El contenido del usuario pasado a html debe indicarse",
  }),
  username: Joi.string().empty().min(1).max(50).required().messages({
    "any.base": "El nombre de usuario debe ser un texto.",
    "string.empty": "El nombre de usuario no puede estar vacio.",
    "string.min": "El nombre de usuario debe tener 1 caracter como mínimo",
    "string.max": "El nombre de usuario debe tener 50 caracteres como máximo",
    "any.required": "El nombre de usuario debe indicarse",
  }),
  creation_date: Joi.string().empty().required().messages({
    "any.base": "La fecha de creación debe ser un texto.",
    "string.empty": "La fecha de creación no puede estar vacio.",
    "any.required": "La fecha de creación debe indicarse",
  }),
  modification_date: Joi.string().messages({
    "string.base": "La fecha modificación debe ser un texto.",
  }),
  type_of_page: Joi.string().empty().valid('incidente', 'documentación').min(20).max(20).messages({
    "string.base": "El tipo de página debe ser un texto.",
    "string.empty": "El tipo de página no puede estar vacio.",
    "any.only":   "El tipo de página debe ser \"incidente\" o \"documentación\".",
    "string.min": "El tipo de página debe tener 20 letras como mínimo.",
    "string.max": "El tipo de página debe tener 20 letras como máximo.",
  }),
  category: Joi.string().min(1).empty().max(50).required().messages({
   "string.base": "La categoría de la página debe ser un texto.",
   "string.empty": "La categoría de la página no puede estar vacio.",
   "string.min": "La categoría de la página debe tener 1 letra como mínimo.",
   "string.max": "La categoría de la página debe tener 30 letras como máximo",
   "any.required": "La categoría de la página debe indicarse",
  }),
});

const pageForPageValidation = Joi.object().keys({
  page: Joi.number().empty().min(1).required().messages({
    "number.base": "El número de la página debe ser un número.",
    "number.empty": "El número de la página no puede estar vacio.",
    "any.required": "El número de la página debe indicarse.",
    "number.min": "El número de la página debe ser mayor que 0"
  }),
  limit: Joi.number().empty().min(1).max(20).required().messages({
    "number.base": "El limite de resultados por página debe ser un número.",
    "number.empty": "El limite de resultados no puede estar vacio.",
    "number.min": "El limite de resultados por página debe ser mayor que 0",
    "number.max": "El limite de resultados por página debe ser máximo a 20",
    "any.required": "El limite de resultados por página debe indicarse.",
  })
});

const searchPageValidation = Joi.object().keys({
  search: Joi.string().empty().min(1).required().messages({
    "string.base": "El valor de la busqueda debe ser un texto.",
    "string.empty": "El valor de la busqueda no puede estar vacio.",
    "string.min": "El valor de la busqueda debe tener un o más caracteres.",
    "any.required": "El valor de la busqueda debe indicarse.",
  })
});

const searchByCategoryValidation = Joi.object().keys({
 category: Joi.string().empty().min(1).required().messages({
  "string.base": "La categoría debe ser un texto.",
  "string.empty": "La categoría no puede estar vacio.",
  "string.min": "La categoría debe tener un o más caracteres.",
  "any.required": "La categoría debe indicarse.",
 })

});

const deletePageValidation = Joi.object().keys({
  id_page: Joi.string().min(36).max(36).required().messages({
    "any.base": "El id de la página debe ser un texto.",
    "string.min": "El id de la página debe tener 36 caracteres como mínimo",
    "string.max": "El id de la página debe tener 36 caracteres como máximo",
    "any.required": "El id de la página debe indicarse",
  }),
});




export default {
  createPageValidation,
  modifyPageValidation,
  pageForPageValidation,
  searchPageValidation,
  deletePageValidation,
  searchByCategoryValidation
}