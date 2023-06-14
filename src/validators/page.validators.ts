import Joi from "joi"


const pageValidation = Joi.object().keys({
  id_page: Joi.string().min(36).max(36),
  id_version_page: Joi.string().min(36).max(36),
  title_page: Joi.string().max(30).required(),
  contents: Joi.string().max(5000).required(),
  username: Joi.string().max(50).required(),
  creation_date:  Joi.string(),
  modification_date: Joi.string()
});

const pageVersionValidation = Joi.object().keys({
  id_page: Joi.string().min(36).max(36).required(),
  title_page: Joi.string().max(30).required(),
  contents: Joi.string().max(5000).required(),
  username: Joi.string().max(50).required(),
  creation_date:  Joi.string().required(),
  modification_date: Joi.string()
});

const pageForPageValidation = Joi.object().keys({
  page: Joi.number().min(1).required(),
  limit: Joi.number().min(1).max(20).required()
});


export default {
  pageValidation,
  pageForPageValidation,
  pageVersionValidation
}