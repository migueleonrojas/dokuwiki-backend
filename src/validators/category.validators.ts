import Joi from "joi"

const createCategoryValidation = Joi.object().keys({
 id_category: Joi.string().min(36).max(36).messages({
  "string.base": "El id de la categoría debe ser un texto.",
  "string.min": "El id de la categoría debe tener 36 letras como mínimo.",
  "string.max": "El id de la categoría debe tener 36 letras como máximo.",
 }),
 name_category: Joi.string().min(1).empty().max(100).required().messages({
  "string.base": "El nombre de la categoría debe ser un texto.",
  "string.min": "El nombre de la categoría debe tener 1 caracter como mínimo.",
  "string.empty": "El nombre de la categoría no puede estar vacio.",
  "string.max": "El nombre de la categoría debe tener 100 letras como máximo",
  "any.required": "El nombre de la categoría debe indicarse",
 })
});

const modifyCategoryValidation = Joi.object().keys({
 id_category: Joi.string().empty().min(36).max(36).required().messages({
  "string.base": "El id de la categoría debe ser un texto.",
  "string.empty": "El id de la categoría no puede estar vacio.",
  "string.min": "El id de la categoría debe tener 36 letras como mínimo.",
  "string.max": "El id de la categoría debe tener 36 letras como máximo.",
  "any.required": "El id de la categoría debe indicarse",
 }),
 name_category: Joi.string().min(1).empty().max(100).required().messages({
  "string.base": "El nombre de la categoría debe ser un texto.",
  "string.min": "El nombre de la categoría debe tener 1 caracter como mínimo.",
  "string.max": "El nombre de la categoría debe tener 100 letras como máximo",
  "string.empty": "El nombre de la categoría no puede estar vacio.",
  "any.required": "El nombre de la categoría debe indicarse",
 }),
 new_name_category: Joi.string().min(1).empty().max(100).required().messages({
  "string.base": "El nombre de la nueva categoría debe ser un texto.",
  "string.min": "El nombre de la nueva categoría debe tener 1 caracter como mínimo.",
  "string.max": "El nombre de la nueva categoría debe tener 100 letras como máximo",
  "string.empty": "El nombre de la nueva categoría no puede estar vacio.",
  "any.required": "El nombre de la nueva categoría debe indicarse",
 })
});

const deleteCategoryValidation = Joi.object().keys({
 name_category: Joi.string().empty().min(1).max(36).required().messages({
  "string.base": "El nombre de la categoría debe ser un texto.",
  "string.min": "El nombre de la categoría debe tener 1 caracter como mínimo.",
  "string.max": "El nombre de la categoría debe tener 100 letras como máximo",
  "string.empty": "El nombre de la categoría no puede estar vacio.",
  "any.required": "El nombre de la categoría debe indicarse",
 }),
});

export default {
 createCategoryValidation,
 modifyCategoryValidation,
 deleteCategoryValidation
}