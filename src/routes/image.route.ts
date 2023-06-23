import express from 'express';
import imageController from '../controllers/image.controller';
import validationFilesSchemaMiddleware from '../middleware/validationFilesSchema.middleware';
import imageValidators  from '../validators/image.validators';

const routerImage = express.Router();

routerImage.post(
  '/create-image',
  validationFilesSchemaMiddleware.validateFilesSchema(imageValidators.createImageValidation),
  imageController.createImageController
);

export default { routerImage };