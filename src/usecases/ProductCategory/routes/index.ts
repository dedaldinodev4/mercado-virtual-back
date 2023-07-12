import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createProductCategoryFactory } from "../CreateProductCategory/CreateProductCategoryFactory";
import { findAllProductCategoriesFactory } from "../FindAllProductCategories/FindAllProductCategoriesFactory";
import { findByIdProductCategoryFactory } from "../FindByIdProductCategory/FindByIdProductCategoryFactory";
import { findByProductProductCategoryFactory } from "../FindByProductProductCategory/FindByProductProductCategoryFactory";
import { findByCategoryProductCategoryFactory } from "../FindByCategoryProductCategory/FindByCategoryProductCategoryFactory";
import { deleteProductCategoryFactory } from "../DeleteProductCategory/DeleteProductCategoryFactory";
import { updateProductCategoryFactory } from "../UpdateProductCategory/UpdateProductCategoryFactory";

 
export const productCategoryRoutes = Router();

productCategoryRoutes.route('/')
  .post(ensuredAuthenticated(), (request, response) => { return createProductCategoryFactory().handle(request, response) } )
  .get((request, response) => { return findAllProductCategoriesFactory().handle(request, response) } )

productCategoryRoutes.route('/:id')
  .get((request, response) => { return findByIdProductCategoryFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateProductCategoryFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteProductCategoryFactory().handle(request, response) } )

productCategoryRoutes.route('/ByCategory/:id_category')
  .get((request, response) => { return findByCategoryProductCategoryFactory().handle(request, response) })
 

productCategoryRoutes.route('/ByProduct/:id_product')
  .get((request, response) => { return findByProductProductCategoryFactory().handle(request, response) })
 