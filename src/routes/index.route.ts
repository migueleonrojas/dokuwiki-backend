
import pagesRoutes from './page.route';
import imageRoutes from './image.route';
import acountReceivableRoutes from './account_receivable.route';
import categoryRoutes from './category.route';
import emailRoutes from './email.route';



import express from "express";


const allRoutes = express.Router();

allRoutes.use(pagesRoutes.routerPage);
allRoutes.use(imageRoutes.routerImage);
allRoutes.use(categoryRoutes.routerCategory);
allRoutes.use(acountReceivableRoutes.routerAccountReceivable);
allRoutes.use(emailRoutes.routerEmail);


export default {
  allRoutes
}
