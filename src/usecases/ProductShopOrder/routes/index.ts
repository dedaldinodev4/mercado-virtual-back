import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createProductShopOrderFactory } from "../CreateProductShopOrder/CreateProductShopOrderFactory";
import { findAllProductShopOrdersFactory } from "../FindAllProductShopOrders/FindAllProductShopOrdersFactory";
import { findByIdProductShopOrderFactory } from "../FindByIdProductShopOrder/FindByIdProductShopOrderFactory";
import { findByOrderProductShopOrderFactory } from "../FindByOrderProductShopOrder/FindByOrderProductOrderFactory";
import { deleteProductShopOrderFactory } from "../DeleteProductShopOrder/DeleteProductShopOrderFactory";
import { updateProductShopOrderFactory } from "../UpdateProductShopOrder/UpdateProductShopOrderFactory";
  
  
export const productShopOrderRoutes = Router();

productShopOrderRoutes.route('/')
  .post(ensuredAuthenticated(), (request, response) => { return createProductShopOrderFactory().handle(request, response) } )
  .get((request, response) => { return findAllProductShopOrdersFactory().handle(request, response) } )

productShopOrderRoutes.route('/:id')
  .get((request, response) => { return findByIdProductShopOrderFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateProductShopOrderFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteProductShopOrderFactory().handle(request, response) } )

productShopOrderRoutes.route('/ByOrder/:id_order')
  .get((request, response) => { return findByOrderProductShopOrderFactory().handle(request, response) })
 