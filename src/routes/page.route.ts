import express from 'express';
import pageController from '../controllers/page.controller';
import validationBodySchemaMiddleware from '../middleware/validationBodySchema.middleware';
import validationQuerySchemaMiddleware from '../middleware/validationQuerySchema.middleware';
import pageValidators  from '../validators/page.validators';


const routerPage = express.Router();




routerPage.post(
  '/create-page',
  validationBodySchemaMiddleware.validateBodySchema(pageValidators.createPageValidation),
  pageController.createPageController
);

routerPage.put(
  '/modify-page',
  validationBodySchemaMiddleware.validateBodySchema(pageValidators.modifyPageValidation),
  pageController.modifyPageController
);


routerPage.get(
  '/get-pages-for-page',
  validationQuerySchemaMiddleware.validateQuerySchema(pageValidators.pageForPageValidation),
  pageController.getPagesForPageController
);

routerPage.get(
  '/search-page',
  validationQuerySchemaMiddleware.validateQuerySchema(pageValidators.searchPageValidation),
  pageController.getSearchPageController
)

routerPage.get(
 '/search-page-by-category',
 validationQuerySchemaMiddleware.validateQuerySchema(pageValidators.searchByCategoryValidation),
 pageController.getPagesByCategoryController
)


routerPage.get(
  '/get-all-pages',
  pageController.getAllPagesController
);

routerPage.delete(
  '/delete-page',
  validationQuerySchemaMiddleware.validateQuerySchema(pageValidators.deletePageValidation),
  pageController.deletePageController
);



export default { routerPage };