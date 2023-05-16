import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createOrderFactory } from "../CreateOrder/CreateOrderFactory";
import { findAllOrdersFactory } from "../FindAllOrders/FindAllOrdersFactory";
import { findByIdOrderFactory } from "../FindByIdOrder/FindByIdOrderFactory";
import { findByTokenOrderFactory } from "../FindByTokenOrder/FindByTokenOrderFactory";
import { findByCustomerOrderFactory } from "../FindByCustomerOrder/FindByCustomerOrderFactory";
import { deleteOrderFactory } from "../DeleteOrder/DeleteOrderFactory";
import { updateOrderFactory } from "../UpdateOrder/UpdateOrderFactory";


export const orderRoutes = Router();

orderRoutes.route('/')
  .post(ensuredAuthenticated(), (request, response) => { return createOrderFactory().handle(request, response) } )
  .get((request, response) => { return findAllOrdersFactory().handle(request, response) } )

orderRoutes.route('/:id')
  .get((request, response) => { return findByIdOrderFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateOrderFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteOrderFactory().handle(request, response) } )

orderRoutes.route('/ByToken/:token')
  .get((request, response) => { return findByTokenOrderFactory().handle(request, response) })

orderRoutes.route('/ByCustomer/:id_customer')
  .get((request, response) => { return findByCustomerOrderFactory().handle(request, response) } )