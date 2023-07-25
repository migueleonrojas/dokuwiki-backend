import categoryModel from "../models/category.model";
import pageModel from "../models/page.model";
import { v1 as uuidv1 } from 'uuid';
import { GroupedCountResultItem, Op, Sequelize } from "sequelize";


const createCategoryService = async (query: any = {}) => {

 
 let id: string = uuidv1();

 try {
  const category = {
   id_category: id,
   name_category: query.body.name_category
  }
  const newCategory = await categoryModel.Category.create(category);

  return newCategory;
  
 } 
 catch (error: any) {
  
  throw Error(`Error creando la categoría: ${error.errors[0].message}`);
 }
 
}


const modifyCategoryService = async (query: any = {}) => {
 
 try {


  await pageModel.Page.update(
   {
    category: query.body.new_name_category
   },
   {
    where: {
     category: query.body.name_category
    }
   }
  );

  const category = {
   id_category: query.body.id_category,
   name_category: query.body.new_name_category
  }

  await categoryModel.Category.update(
   category,
   {
    where:{
     name_category: query.body.name_category
    }
   }
  );

  const categoryModify = await categoryModel.Category.findOne({
   where: {
    id_category: query.body.id_category
   },
  });

  return categoryModify;

 } 
 catch (error: any) {

  console.log(error);
  throw Error(`Error modificando la categoría ${error.errors[0].message}`);
 }

}

const deleteCategoryService = async (name_category: string = "") => {
 try {


  const pages = await pageModel.Page.findAll({
   where: {
    category: name_category
   }
  });
 
  if(pages.length > 0) {
   throw Error(`No se puede eliminar una categoría que ya ha sido asignada a por lo menos una página.`);
  }


  const categoryDelete = await categoryModel.Category.findOne({
   where: {
    name_category: name_category
   }
  });

  if(categoryDelete === null){
   throw Error(`La categoria con el nombre de '${name_category}' no existe.`);

  }

  await categoryModel.Category.destroy({
   where: {
    name_category: name_category
   }
  });

  return categoryDelete;



 } 
 catch (error: any) {
  throw Error(`Error eliminando una categoría: ${error.message}`);
 }
}


const getAllCategoriesService = async () => {
 try {
  
  const allCategories = await categoryModel.Category.findAll({
   attributes:[
    'id_category',
    'name_category'
   ],
   order:[
    ["name_category", "DESC"],
   ]
  });

  return allCategories;

 } 
 catch (error:any) {
  throw Error(`Error obteniendo todas las categorias: ${error.message}`);
 }
}


export default {
 createCategoryService,
 modifyCategoryService,
 deleteCategoryService,
 getAllCategoriesService
}