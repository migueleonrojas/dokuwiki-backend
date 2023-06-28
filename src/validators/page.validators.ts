import Joi from "joi"


const createPageValidation = Joi.object().keys({
  id_page: Joi.string().min(36).max(36).messages({
    "string.base": "El id de la página debe ser un texto.",
    "string.min": "El id de la página debe tener 36 letras como mínimo.",
    "string.max": "El id de la página debe tener 36 letras como máximo.",
  }),
  title_page: Joi.string().max(30).required().messages({
    "string.base": "El titulo de la página debe ser un texto.",
    "string.max": "El titulo de la página debe tener 30 letras como máximo",
    "any.required": "El titulo de la página debe indicarse",
  }),
  contents_user: Joi.string().max(5000).required().messages({
    "string.base": "El contenido que escribio el usuario debe ser un texto.",
    "string.max": "El contenido que escribio el usuario debe tener 5000 caracteres como máximo",
    "any.required": "El contenido que escribio el usuario debe indicarse",
  }),
  contents_html: Joi.string().max(5000).required().messages({
    "string.base": "El contenido del usuario pasado a html debe ser un texto.",
    "string.max": "El contenido del usuario pasado a html debe tener 5000 caracteres como máximo",
    "any.required": "El contenido del usuario pasado a html debe indicarse",
  }),
  username: Joi.string().max(50).required().messages({
    "string.base": "El nombre del usuario debe ser un texto.",
    "string.max": "El nombre del usuario debe tener 50 caracteres como máximo",
    "any.required": "El nombre del usuario debe indicarse",
  }),
  creation_date: Joi.string().messages({
    "string.base": "La fecha de creación de la página debe ser un texto.",
  }),
  modification_date: Joi.string().messages({
    "string.base": "La fecha de modificación debe ser un texto.",
  }),
  is_solved: Joi.string().valid('0', '1').min(1).max(1).required().messages({
    "any.base": "El valor que indica si se resolvio el incidente debe ser un texto.",
    "any.only": "El valor que indica si se resolvio el incidente debe ser \"0\" o \"1\".",
    "string.min": "El valor que indica si se resolvio el incidente debe tener 1 caracter como mínimo",
    "string.max": "El valor que indica si se resolvio el incidente debe tener 1 caracter como máximo",
    "any.required": "El valor que indica si se resolvio el incidente debe indicarse",
  }),
  type_of_page: Joi.string().valid('incidente', 'documentación').min(20).max(20).messages({
    "string.base": "El tipo de página debe ser un texto.",
    "any.only":   "El tipo de página debe ser \"incidente\" o \"documentación\".",
    "string.min": "El tipo de página debe tener 20 letras como mínimo.",
    "string.max": "El tipo de página debe tener 20 letras como máximo.",
  }),
});

const modifyPageValidation = Joi.object().keys({
  id_page: Joi.string().min(36).max(36).required().messages({
    "any.base": "El id de la página debe ser un texto.",
    "string.min": "El id de la página debe tener 36 caracteres como mínimo",
    "string.max": "El id de la página debe tener 36 caracteres como máximo",
    "any.required": "El id de la página debe indicarse",
  }),
  title_page: Joi.string().max(30).required().messages({
    "any.base": "El titulo de la página debe ser un texto.",
    "string.max": "El titulo de la página debe tener 30 caracteres como máximo",
    "any.required": "El titulo de la página debe indicarse",
  }),
  contents_user: Joi.string().max(5000).required().messages({
    "any.base": "El contenido que escribio el usuario debe ser un texto.",
    "string.max": "El contenido que escribio el usuario debe tener 5000 caracteres como máximo",
    "any.required": "El contenido que escribio el usuario debe indicarse",
  }),
  contents_html: Joi.string().max(5000).required().messages({
    "any.base": "El contenido del usuario pasado a html debe ser un texto.",
    "string.max": "El contenido del usuario pasado a html debe tener 5000 caracteres como máximo",
    "any.required": "El contenido del usuario pasado a html debe indicarse",
  }),
  username: Joi.string().max(50).required().messages({
    "any.base": "El nombre de usuario debe ser un texto.",
    "string.max": "El nombre de usuario debe tener 50 caracteres como máximo",
    "any.required": "El nombre de usuario debe indicarse",
  }),
  creation_date: Joi.string().required().messages({
    "any.base": "La fecha de creación debe ser un texto.",
    "any.required": "La fecha de creación debe indicarse",
  }),
  modification_date: Joi.string().messages({
    "string.base": "La fecha modificación debe ser un texto.",
  }),
  is_solved: Joi.string().valid('0', '1').min(1).max(1).required().messages({
    "any.base": "El valor que indica si se resolvio el incidente debe ser un texto.",
    "any.only": "El valor que indica si se resolvio el incidente debe ser \"0\" o \"1\".",
    "string.min": "El valor que indica si se resolvio el incidente debe tener 1 caracter como mínimo",
    "string.max": "El valor que indica si se resolvio el incidente debe tener 1 caracter como máximo",
    "any.required": "El valor que indica si se resolvio el incidente debe indicarse",
  }),
  type_of_page: Joi.string().valid('incidente', 'documentación').min(20).max(20).messages({
    "string.base": "El tipo de página debe ser un texto.",
    "any.only":   "El tipo de página debe ser \"incidente\" o \"documentación\".",
    "string.min": "El tipo de página debe tener 20 letras como mínimo.",
    "string.max": "El tipo de página debe tener 20 letras como máximo.",
  }),
});

const pageForPageValidation = Joi.object().keys({
  page: Joi.number().min(1).required().messages({
    "number.base": "El número de la página debe ser un número.",
    "any.required": "El número de la página debe indicarse.",
    "number.min": "El número de la página debe ser mayor que 0"
  }),
  limit: Joi.number().min(1).max(20).required().messages({
    "number.base": "El limite de resultados por página debe ser un número.",
    "number.min": "El limite de resultados por página debe ser mayor que 0",
    "number.max": "El limite de resultados por página debe ser máximo a 20",
    "any.required": "El limite de resultados por página debe indicarse.",
  })
});

const searchPageValidation = Joi.object().keys({
  search: Joi.string().min(1).required().messages({
    "string.base": "El valor de la busqueda debe ser un texto.",
    "string.min": "El valor de la busqueda debe tener un o más caracteres.",
    "any.required": "El valor de la busqueda debe indicarse.",
  })
});




export default {
  createPageValidation,
  modifyPageValidation,
  pageForPageValidation,
  searchPageValidation
}