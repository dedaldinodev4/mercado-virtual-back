import { Router } from 'express'

import { ensuredAuthenticated } from '../../../middlewares';

import { createCartFactory } from "../CreateCart/CreateCartFactory";
import { findAllCartsFactory } from "../FindAllCarts/FindAllCartsFactory";
import { findByIdCartFactory } from "../FindByIdCart/FindByIdCartFactory";
import { findByStatusCartFactory } from "../FindByStatusCart/FindByStatusCartFactory";
import { deleteCartFactory } from "../DeleteCart/DeleteCartFactory";
import { updateCartFactory } from "../UpdateCart/UpdateCartFactory";

export const cartRoutes = Router();

cartRoutes.route('/')
  .post((request, response) => { return createCartFactory().handle(request, response) } )
  .get((request, response) => { return findAllCartsFactory().handle(request, response) } )

cartRoutes.route('/:id')
  .get((request, response) => { return findByIdCartFactory().handle(request, response) } )
  .put((request, response) => { return updateCartFactory().handle(request, response) } )
  .delete((request, response) => { return deleteCartFactory().handle(request, response) } )

cartRoutes.route('/ByStatus/:status')
  .get((request, response) => { return findByStatusCartFactory().handle(request, response) } )
