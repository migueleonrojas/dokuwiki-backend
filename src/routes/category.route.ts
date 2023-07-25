import express from 'express';
import categoryController from '../controllers/category.controller';
import validationBodySchemaMiddleware from '../middleware/validationBodySchema.middleware';
import validationQuerySchemaMiddleware from '../middleware/validationQuerySchema.middleware';
import categoryValidators  from '../validators/category.validators';

const routerCategory = express.Router();


routerCategory.post(
 '/create-category',
 validationBodySchemaMiddleware.validateBodySchema(categoryValidators.createCategoryValidation),
 categoryController.createCategoryController
);

routerCategory.put(
 '/modify-category',
 validationBodySchemaMiddleware.validateBodySchema(categoryValidators.modifyCategoryValidation),
 categoryController.modifyCategoryController
);

routerCategory.delete(
 '/delete-category',
 validationQuerySchemaMiddleware.validateQuerySchema(categoryValidators.deleteCategoryValidation),
 categoryController.deleteCategoryController
);

routerCategory.get(
 '/get-all-categories',
 categoryController.getAllCategoriesController
);

export default { routerCategory };