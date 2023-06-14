
import pagesRoutes from './page.route';
import express from "express";


const allRoutes = express.Router();

allRoutes.use(pagesRoutes.routerPage);


export default {
  allRoutes
}
