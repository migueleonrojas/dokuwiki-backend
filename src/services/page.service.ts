import pageModel from "../models/page.model";
import { v1 as uuidv1 } from 'uuid';
import moment from "moment";
import { GroupedCountResultItem, Op } from "sequelize";

const createPageService = async (query: any = {}) => {

  let date: string = moment().format('YYYY-MM-DD hh:mm:ss.SSS');
  
  try {
    const page = {
      id_page: uuidv1(),
      id_version_page: uuidv1(),
      title_page: query.body.title_page,
      contents: query.body.contents,
      username: query.body.username,
      creation_date: date,
      modification_date: date,
    }

    const newPage = await pageModel.Page.create(page);

    return newPage;

    
  }
  catch (error:any) {
    throw Error(`Error creating a Page ${error.message}`);
  
  }
  
}

const createVersionPageService = async (query: any = {}) => {

  try {

    const countPage:number = await pageModel.Page.count({
      where: {
        id_page: query.body.id_page
      }
    });

    if (countPage < 1) {
       throw Error(`Debe existir la página para poder crear una versión`);
    }

    const page = {
      id_page: query.body.id_page,
      id_version_page: uuidv1(),
      title_page: query.body.title_page,
      contents: query.body.contents,
      username: query.body.username,
      creation_date: query.body.creation_date,
      modification_date: moment().format('YYYY-MM-DD hh:mm:ss.SSS'),
    }

    

    
    const newPageVersion = await pageModel.Page.create(page);

    return newPageVersion;

 
    
    
  }
  catch (error:any) {
    throw Error(`Error creating version Page: ${error.message}`);
  }

}

const getPagesForPageService = async (page: any = 1, limit: any = 10) => {

  try {

    let rows: GroupedCountResultItem[] = await pageModel.Page.count({
     
      group: [
        'id_page'
      ]
    });

    let pagesForLimit = Math.ceil(rows.length / limit);

    if(page > pagesForLimit) throw Error(`Esta accediendo a una número de página que no existe`);
    
    if (limit > rows.length ) throw Error(`El limite de páginas es mayor a la cantidad de registros`);

    const pageForPage = await pageModel.Page.findAll({
      attributes: [
        'id_page',
        'id_version_page',
        'title_page',
        'contents',
        'username',
        'creation_date',
        'modification_date'
      ],
      limit: limit,
      offset: (page * limit) - limit,
      order: [
        ['id_version_page', 'ASC'],
      ],
      group: [
        'id_page',
        'id_version_page',
        'title_page',
        'contents',
        'username',
        'creation_date',
        'modification_date'
      ]
    });
    
    return {
      result: pageForPage,
      total_pages: rows.length,
      pages_for_limit: pagesForLimit,
      current_page: page,
      previous_page: ((page - 1) === 0) ? null : (page - 1),
      next_page: ((page + 1) > pagesForLimit) ? null : (page + 1)
      
    };
  }
  catch (error:any) {
    throw Error(`Error get Pages: ${error.message}`);
  }

}

export default {
  createPageService,
  getPagesForPageService,
  createVersionPageService
}