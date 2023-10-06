import express from 'express';
import accountReceivableController from '../controllers/account_receivable.controller';
import validationFilesSchemaMiddleware from '../middleware/validationFilesSchema.middleware';
import validationBodySchemaMiddleware from '../middleware/validationBodySchema.middleware';
import accountReceivablValidators  from '../validators/account_receivable.validators';
import validationQuerySchemaMiddleware from '../middleware/validationQuerySchema.middleware';



const routerAccountReceivable = express.Router();


routerAccountReceivable.post(
  "/create-files",
  validationFilesSchemaMiddleware.validateFilesSchema(accountReceivablValidators.createFileValidation),
  accountReceivableController.createFilesController
)


routerAccountReceivable.post(
  "/create-account-receivable",
  validationBodySchemaMiddleware.validateBodySchema(accountReceivablValidators.createAccountReceivableValidation),
  accountReceivableController.createAccountReceivableController
);

routerAccountReceivable.post(
  "/create-account-receivable-tdic",
  validationBodySchemaMiddleware.validateBodySchema(accountReceivablValidators.createAccountReceivableTDCIValidation),
  accountReceivableController.createAccountReceivableController
);


routerAccountReceivable.get(
  "/search-account-receivable-by-rif",
  validationQuerySchemaMiddleware.validateQuerySchema(accountReceivablValidators.searchByRifAccountReceivableValidation),
  accountReceivableController.getAccountsReceivableByRifController
);




export default { routerAccountReceivable };