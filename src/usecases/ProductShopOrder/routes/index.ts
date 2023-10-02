import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createProductShopOrderFactory } from "../CreateProductShopOrder/CreateProductShopOrderFactory";
import { findAllProductShopOrdersFactory } from "../FindAllProductShopOrders/FindAllProductShopOrdersFactory";
import { findByIdProductShopOrderFactory } from "../FindByIdProductShopOrder/FindByIdProductShopOrderFactory";
import { findByOrderProductShopOrderFactory } from "../FindByOrderProductShopOrder/FindByOrderProductOrderFactory";
import { findByShopProductShopOrderFactory } from "../FindByShopProductShopOrder/FindByShopProductShopOrderFactory"
import { deleteProductShopOrderFactory } from "../DeleteProductShopOrder/DeleteProductShopOrderFactory";
import { updateProductShopOrderFactory } from "../UpdateProductShopOrder/UpdateProductShopOrderFactory";
import { createProductShopOrderWithArrayFactory } from "../CreateProductShopOrderWithArray/CreateProductShopOrderWithArrayFactory";
  
export const productShopOrderRoutes = Router();

productShopOrderRoutes.route('/')
  .post((request, response) => { return createProductShopOrderFactory().handle(request, response) } )
  .get((request, response) => { return findAllProductShopOrdersFactory().handle(request, response) } )

productShopOrderRoutes.route('/:id')
  .get((request, response) => { return findByIdProductShopOrderFactory().handle(request, response) } )
  .put((request, response) => { return updateProductShopOrderFactory().handle(request, response) } )
  .delete((request, response) => { return deleteProductShopOrderFactory().handle(request, response) } )

productShopOrderRoutes.route('/ByOrder/:id_order')
  .get((request, response) => { return findByOrderProductShopOrderFactory().handle(request, response) })

productShopOrderRoutes.route('/ByShop/:id_shop')
  .get((request, response) => { return findByShopProductShopOrderFactory().handle(request, response) })

  productShopOrderRoutes.route('/withArray')
  .post((request, response) => { return createProductShopOrderWithArrayFactory().handle(request, response) })
 