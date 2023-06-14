import express from 'express';
import pageController from '../controllers/page.controller';
import validationSchemaMiddleware from '../middleware/validationSchema.middleware';
import pageValidators  from '../validators/page.validators';


const routerPage = express.Router();

routerPage.post(
  '/create-page',
  validationSchemaMiddleware.validateSchema(pageValidators.pageValidation),
  pageController.createPageController
);

routerPage.post(
  '/create-page-version',
  validationSchemaMiddleware.validateSchema(pageValidators.pageVersionValidation),
  pageController.createPageVersionController
);

routerPage.get(
  '/get-page',
  validationSchemaMiddleware.validateSchema(pageValidators.pageForPageValidation),
  pageController.getPagesForPageController
);



export default { routerPage };