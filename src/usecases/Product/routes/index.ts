import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createProductFactory } from "../CreateProduct/CreateProductFactory";
import { findAllProductsFactory } from "../FindAllProducts/FindAllProductsFactory";
import { findByIdProductFactory } from "../FindByIdProduct/FindByIdProductFactory";
import { findByCategoryProductFactory } from "../FindByCategoryProduct/FindByCategoryProductFactory";
import { deleteProductFactory } from "../DeleteProduct/DeleteProductFactory";
import { updateProductFactory } from "../UpdateProduct/UpdateProductFactory";


export const productRoutes = Router();

productRoutes.route('/')
  .post(ensuredAuthenticated(), (request, response) => { return createProductFactory().handle(request, response) } )
  .get((request, response) => { return findAllProductsFactory().handle(request, response) } )

productRoutes.route('/:id')
  .get((request, response) => { return findByIdProductFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateProductFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteProductFactory().handle(request, response) } )

productRoutes.route('/ByCategory/:id_category')
  .get((request, response) => { return findByCategoryProductFactory().handle(request, response) })
