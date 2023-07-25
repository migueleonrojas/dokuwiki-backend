
import pageService from '../services/page.service'

const createPageController = async (req: any, res: any) => {

  try {
    let pageResult = await pageService.createPageService(req);
    return res.status(200).json({
      status: 200,
      message: 'Página creada con exito',
      page: pageResult
    });
  }
  catch (error: any) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
  
}

const modifyPageController = async (req: any, res: any) => {

  try {
    let pageResult = await pageService.modifyPageService(req);
    return res.status(200).json({
      status: 200,
      message: 'Página modificada con exito',
      page: pageResult
    });
  }
  catch (error: any) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
  
}

const deletePageController = async (req: any, res: any) => {

  try {
    let pageResult = await pageService.deletePageService(req.query.id_page);
    return res.status(200).json({
      status: 200,
      message: 'Página eliminada con exito',
      page: pageResult
    });
  }
  catch (error: any) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
  
}


const getPagesForPageController = async (req: any, res: any) => {
  
  try {

    let pageResult = await pageService.getPagesForPageService(
      Number.parseInt(req.query.page),
      Number.parseInt(req.query.limit)
    );
    return res.status(200).json({
      status: 200,
      message: 'Listado de páginas',
      pages_for_limit: pageResult.pages_for_limit,
      total_pages: pageResult.total_pages,
      current_page: pageResult.current_page,
      previous_page: pageResult.previous_page,
      next_page: pageResult.next_page,
      pages: pageResult.result,
      
    });
    
  }
  catch (error: any) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }

}


const getSearchPageController = async (req: any, res: any) => {
  
  try {

    let pageResult = await pageService.getSearchPageService(req.query.search);
    
    return res.status(200).json({
      status: 200,
      message: 'Resultado de la busqueda de las páginas',
      pages: pageResult,
      
    });
    
  }

  catch (error: any) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
  
}

const getPagesByCategoryController = async (req: any, res: any) => {

 try {
  
  let pageResult = await pageService.getPagesByCategoryService(req.query.category);

  return res.status(200).json({
   status: 200,
   message: 'Resultado de la busqueda de las páginas',
   pages: pageResult
  });

 } 

 catch (error:any) {
  return res.status(400).json({
   status: 400,
   message: error.message
  });
 }

}



const getAllPagesController = async (req: any, res: any) => {

  try {
    let pageResult = await pageService.getAllPageService();
    return res.status(200).json({
      status: 200,
      message: 'Todas las páginas obtenidas',
      pages: pageResult
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
  createPageController,
  modifyPageController,
  getPagesForPageController,
  getSearchPageController,
  getAllPagesController,
  deletePageController,
  getPagesByCategoryController
}