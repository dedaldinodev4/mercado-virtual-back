import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createProductShopFactory } from "../CreateProductShop/CreateProductShopFactory";
import { findAllProductShopiesFactory } from "../FindAllProductShopies/FindAllProductShopiesFactory";
import { findByIdProductShopFactory } from "../FindByIdProductShop/FindByIdProductShopFactory";
import { findByShopProductShopFactory } from "../FindByShopProductShop/FindByShopProductShopFactory";
import { deleteProductShopFactory } from "../DeleteProductShop/DeleteProductShopFactory";
import { updateProductShopFactory } from "../UpdateProductShop/UpdateProductShopFactory";

 
export const productShopRoutes = Router();

productShopRoutes.route('/')
  .post((request, response) => { return createProductShopFactory().handle(request, response) } )
  .get((request, response) => { return findAllProductShopiesFactory().handle(request, response) } )

productShopRoutes.route('/:id')
  .get((request, response) => { return findByIdProductShopFactory().handle(request, response) } )
  .put((request, response) => { return updateProductShopFactory().handle(request, response) } )
  .delete((request, response) => { return deleteProductShopFactory().handle(request, response) } )

productShopRoutes.route('/ByShop/:id_shop')
  .get((request, response) => { return findByShopProductShopFactory().handle(request, response) })
 