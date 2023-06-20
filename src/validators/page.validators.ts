import Joi from "joi"


const createPageValidation = Joi.object().keys({
  id_page: Joi.string().min(36).max(36),
  title_page: Joi.string().max(30).required(),
  contents_user: Joi.string().max(5000).required(),
  contents_html: Joi.string().max(5000).required(),
  username: Joi.string().max(50).required(),
  creation_date:  Joi.string(),
  modification_date: Joi.string(),
  is_solved: Joi.string().valid('0','1').min(1).max(1)
});

const modifyPageValidation = Joi.object().keys({
  id_page: Joi.string().min(36).max(36).required(),
  title_page: Joi.string().max(30).required(),
  contents_user: Joi.string().max(5000).required(),
  contents_html: Joi.string().max(5000).required(),
  username: Joi.string().max(50).required(),
  creation_date:  Joi.string().required(),
  modification_date: Joi.string(),
  is_solved: Joi.string().valid('0','1').min(1).max(1).required()
});

const pageForPageValidation = Joi.object().keys({
  page: Joi.number().min(1).required(),
  limit: Joi.number().min(1).max(20).required()
});

const searchPageValidation = Joi.object().keys({
  search: Joi.string().min(1)
});




export default {
  createPageValidation,
  modifyPageValidation,
  pageForPageValidation,
  searchPageValidation
}