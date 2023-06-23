import Joi from "joi"


const createPageValidation = Joi.object().keys({
  id_page: Joi.string().min(36).max(36).messages({
    "string.base": "El id de la página debe ser un texto.",
    "string.min": "El id de la página debe tener 36 letras como mínimo.",
    "string.max": "El id de la página debe tener 36 letras como máximo.",
  }),
  title_page: Joi.string().max(30).required().messages({
    "string.base": "El title_page debe ser un texto.",
    "string.max": "El title_page debe tener 30 letras como máximo",
    "any.required": "El title_page debe indicarse",
  }),
  contents_user: Joi.string().max(5000).required().messages({
    "string.base": "El contents_user debe ser un texto.",
    "string.max": "El contents_user debe tener 5000 caracteres como máximo",
    "any.required": "El contents_user debe indicarse",
  }),
  contents_html: Joi.string().max(5000).required().messages({
    "string.base": "El contents_html debe ser un texto.",
    "string.max": "El contents_user debe tener 5000 caracteres como máximo",
    "any.required": "El contents_html debe indicarse",
  }),
  username: Joi.string().max(50).required().messages({
    "string.base": "El username debe ser un texto.",
    "string.max": "El username debe tener 50 caracteres como máximo",
    "any.required": "El username debe indicarse",
  }),
  creation_date: Joi.string().messages({
    "string.base": "El creation_date debe ser un texto.",
  }),
  modification_date: Joi.string().messages({
    "string.base": "El modification_date debe ser un texto.",
  }),
  is_solved: Joi.string().valid('0', '1').min(1).max(1).required().messages({
    "any.base": "El is_solved debe ser un texto.",
    "any.only": "El is_solved debe ser \"0\" o \"1\".",
    "string.min": "El is_solved debe tener 1 caracter como mínimo",
    "string.max": "El is_solved debe tener 1 caracter como máximo",
    "any.required": "El is_solved debe indicarse",
  })
});

const modifyPageValidation = Joi.object().keys({
  id_page: Joi.string().min(36).max(36).required().messages({
    "any.base": "El id_page debe ser un texto.",
    "string.min": "El id_page debe tener 36 caracteres como mínimo",
    "string.max": "El id_page debe tener 36 caracteres como máximo",
    "any.required": "El id_page debe indicarse",
  }),
  title_page: Joi.string().max(30).required().messages({
    "any.base": "El title_page debe ser un texto.",
    "string.max": "El title_page debe tener 30 caracteres como máximo",
    "any.required": "El title_page debe indicarse",
  }),
  contents_user: Joi.string().max(5000).required().messages({
    "any.base": "El contents_user debe ser un texto.",
    "string.max": "El contents_user debe tener 5000 caracteres como máximo",
    "any.required": "El contents_user debe indicarse",
  }),
  contents_html: Joi.string().max(5000).required().messages({
    "any.base": "El contents_html debe ser un texto.",
    "string.max": "El contents_html debe tener 5000 caracteres como máximo",
    "any.required": "El contents_html debe indicarse",
  }),
  username: Joi.string().max(50).required().messages({
    "any.base": "El username debe ser un texto.",
    "string.max": "El username debe tener 50 caracteres como máximo",
    "any.required": "El username debe indicarse",
  }),
  creation_date: Joi.string().required().messages({
    "any.base": "El creation_date debe ser un texto.",
    "any.required": "El creation_date debe indicarse",
  }),
  modification_date: Joi.string().messages({
    "string.base": "El modification_date debe ser un texto.",
  }),
  is_solved: Joi.string().valid('0', '1').min(1).max(1).required().messages({
    "any.base": "El is_solved debe ser un texto.",
    "any.only": "El is_solved debe ser \"0\" o \"1\".",
    "string.min": "El is_solved debe tener 1 caracter como mínimo",
    "string.max": "El is_solved debe tener 1 caracter como máximo",
    "any.required": "El is_solved debe indicarse",
  })
});

const pageForPageValidation = Joi.object().keys({
  page: Joi.number().min(1).required().messages({
    "number.base": "El page debe ser un número.",
    "any.required": "El page debe indicarse.",
    "number.min": "El page debe ser mayor que 0"
  }),
  limit: Joi.number().min(1).max(20).required().messages({
    "number.base": "El limit debe ser un número.",
    "number.min": "El limit debe ser mayor que 0",
    "number.max": "El limit debe ser máximo a 20",
    "any.required": "El limit debe indicarse.",
  })
});

const searchPageValidation = Joi.object().keys({
  search: Joi.string().min(1).required().messages({
    "string.base": "El search debe ser un texto.",
    "string.min": "El search debe tener un o más caracteres.",
    "any.required": "El search debe indicarse.",
  })
});




export default {
  createPageValidation,
  modifyPageValidation,
  pageForPageValidation,
  searchPageValidation
}