import express from 'express';
import pageController from '../controllers/page.controller';
import validationSchemaMiddleware from '../middleware/validationSchema.middleware';
import pageValidators  from '../validators/page.validators';


const routerPage = express.Router();




routerPage.post(
  '/create-page',
  validationSchemaMiddleware.validateSchema(pageValidators.createPageValidation),
  pageController.createPageController
);

routerPage.put(
  '/modify-page',
  validationSchemaMiddleware.validateSchema(pageValidators.modifyPageValidation),
  pageController.modifyPageController
);


routerPage.get(
  '/get-pages-for-page',
  validationSchemaMiddleware.validateSchema(pageValidators.pageForPageValidation),
  pageController.getPagesForPageController
);

routerPage.get(
  '/search-page',
  validationSchemaMiddleware.validateSchema(pageValidators.searchPageValidation),
  pageController.getSearchPageController
)


routerPage.get(
  '/get-all-pages',
  pageController.getAllPagesController
);



export default { routerPage };