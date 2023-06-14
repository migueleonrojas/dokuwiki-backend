
import pageService from '../services/page.service'

const createPageController = async (req: any, res: any) => {

  try {
    let pageResult = await pageService.createPageService(req);
    return res.status(200).json({
      status: 200,
      message: 'Página creada con exito',
      usuario: pageResult
    });
  }
  catch (error: any) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
  
}

const createPageVersionController = async (req: any, res: any) => {

  try {
    let pageResult = await pageService.createVersionPageService(req);
    return res.status(200).json({
      status: 200,
      message: 'Nueva versión de la página creada',
      usuario: pageResult
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



export default {
  createPageController,
  getPagesForPageController,
  createPageVersionController
}