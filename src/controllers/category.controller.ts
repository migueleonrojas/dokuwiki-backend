import categoryService from "../services/category.service";

const createCategoryController = async (req: any, res: any) => {

 try {
  let categoryResult = await categoryService.createCategoryService(req);

  return res.status(200).json({
   status: 200,
   message: 'Categoria creada con exito',
   category: categoryResult
  }); 
 } 
 catch (error: any) {
  return res.status(400).json({
   status: 400,
   message: error.message
  });
 }

}

const modifyCategoryController = async (req: any, res: any) => {

 try {
   let categoryResult = await categoryService.modifyCategoryService(req);
   return res.status(200).json({
     status: 200,
     message: 'Categoría modificada con exito',
     category: categoryResult
   });
 }
 catch (error: any) {
   return res.status(400).json({
     status: 400,
     message: error.message
   });
 }
 
}

const deleteCategoryController = async (req: any, res: any) => {

 try {

  let categoryResult = await categoryService.deleteCategoryService(req.query.name_category);

  return res.status(200).json({
   status: 200,
   message: 'Categoria eliminada con exito',
   category: categoryResult
  });
  
 } 
 catch (error: any) {
  return res.status(400).json({
   status: 400,
   message: error.message
  });
 }

}

const getAllCategoriesController = async (req: any, res: any) => {

 try {
  let categoriesResult = await categoryService.getAllCategoriesService();
  return res.status(200).json({
    status: 200,
    message: 'Todas las páginas obtenidas',
    categories: categoriesResult
  });
}
catch (error: any) {
  return res.status(400).json({
    status: 400,
    message: error.message
  });
}

}


export default {
 createCategoryController,
 modifyCategoryController,
 deleteCategoryController,
 getAllCategoriesController
}