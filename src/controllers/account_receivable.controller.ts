import accountReceivableService from "../services/account_receivable.service";



const createFilesController = async(req: any, res: any) => {
  try{
    let filesResult = await accountReceivableService.createFilesService(req.files)
    return res.status(200).json({
      status: 200,
      message: 'Archivo o archivos creados con exito',
      urls_files: filesResult
    });
  }

  catch(error:any){
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }

}

const createAccountReceivableController = async (req: any, res: any) => {
  try{
    let accountReceivable = await accountReceivableService.createAccountReceivableService(req);

    res.status(200).json({
      status: 200,
      message: 'Pago registrado con exito',
      accountReceivableService: accountReceivable
    })

  }
  catch (error: any) {
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
}

const getAccountsReceivableByRifController = async (req:any, res:any) => {
  try{

    let accountReceivableResult = await accountReceivableService.getAccountsReceivableByRifService(req.query.rif);

    return res.status(200).json({
      status: 200,
      message: 'Resultado de la busqueda de las páginas',
      accountReceivables: accountReceivableResult,
      
    });

  }
  catch(error: any){
    return res.status(400).json({
      status: 400,
      message: error.message
    });
  }
}

export default {
  createAccountReceivableController,
  createFilesController,
  getAccountsReceivableByRifController
}