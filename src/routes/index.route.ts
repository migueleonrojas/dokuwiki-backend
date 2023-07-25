
import pagesRoutes from './page.route';
import imageRoutes from './image.route';
import categoryRoutes from './category.route';

import express from "express";


const allRoutes = express.Router();

allRoutes.use(pagesRoutes.routerPage);
allRoutes.use(imageRoutes.routerImage);
allRoutes.use(categoryRoutes.routerCategory);


export default {
  allRoutes
}
