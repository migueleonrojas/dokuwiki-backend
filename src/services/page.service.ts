import pageModel from "../models/page.model";
import { v1 as uuidv1 } from 'uuid';
import moment from "moment";
import { GroupedCountResultItem, Op, Sequelize } from "sequelize";

const createPageService = async (query: any = {}) => {

  let date: string = moment().format('YYYY-MM-DDTHH:mm:ss');

  let id: string = uuidv1();
  
  try {

    const page = {
      id_page: id,
      title_page: query.body.title_page,
      contents_user: query.body.contents_user,
      contents_html: query.body.contents_html,
      username: query.body.username,
      creation_date: date,
      modification_date: date,
      is_solved: query.body.is_solved
    }

    const newPage = await pageModel.Page.create(page);

    return newPage;

    
  }
  catch (error: any) {
    
    throw Error(`Error creating a Page ${error.message}`);
  
  }
  
}

const modifyPageService = async (query: any = {}) => {

  try {

    const page = {
      id_page: query.body.id_page,
      title_page: query.body.title_page,
      contents_user: query.body.contents_user,
      contents_html: query.body.contents_html,
      username: query.body.username,
      creation_date: query.body.creation_date,
      modification_date: moment().format('YYYY-MM-DDTHH:mm:ss'),
      is_solved: query.body.is_solved
    }

    await pageModel.Page.update(
      page,
      {
        where: {
          id_page: query.body.id_page
        }
      }
      
    );

    const pageModify = await pageModel.Page.findOne({
      where: {
        id_page: query.body.id_page
      },
    });



    return pageModify;
  }

  catch (error: any) {
    console.log(error);
    throw Error(`Error modifying a Page ${error.message}`);
  
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
        'title_page',
        'contents_user',
        'contents_html',
        'username',
        'creation_date',
        'modification_date',
        'is_solved'
      ],
      limit: limit,
      offset: (page * limit) - limit,
      order: [
        ['creation_date', 'DESC'],
      ],
      group: [
        'id_page',
        'title_page',
        'contents_user',
        'contents_html',
        'username',
        'creation_date',
        'modification_date',
        'is_solved'
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

const getSearchPageService = async (search: string = "") => {

  try {

    const pageForPage = await pageModel.Page.findAll({
      order: [
        ['creation_date', 'DESC'],
      ],
      where: {
        [Op.or]: [
          {
            title_page: { [Op.like]: `%${search}%` }
          },
          {
            contents_user: { [Op.like]: `%${search}%` }
          },
          {
            contents_html: { [Op.like]: `%${search}%` }
          },
          {
            username: { [Op.like]: `%${search}%` }
          }

        ]
       
      },  
    });
    
    return pageForPage;
      
      
  }
  catch (error:any) {
    throw Error(`Error get Pages: ${error.message}`);
  }

}


const getAllPageService = async () => {

  try {
    const allPage = await pageModel.Page.findAll({
      attributes: [
        'id_page',
        'title_page',
        'contents_user',
        'contents_html',
        'username',
        'creation_date',
        'modification_date',
        'is_solved'
      ],
      order: [
        ["creation_date", "DESC"],
      ]
    });
    return allPage;
  }
  catch (error:any) {
    throw Error(`Error getting all Pages: ${error.message}`);
  }

}




export default {
  createPageService,
  modifyPageService,
  getPagesForPageService,
  getSearchPageService,
  getAllPageService
  
}