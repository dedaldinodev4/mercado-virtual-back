import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createShopFactory } from "../CreateShop/CreateShopFactory";
import { findAllShopiesFactory } from "../FindAllShopies/FindAllShopiesFactory";
import { findByIdShopFactory } from "../FindByIdShop/FindByIdShopFactory";
import { findByAddressShopFactory } from "../FindByAddressShop/FindByAddressShopFactory";
import { findByOwnerShopFactory } from "../FindByOwnerShop/FindByOwnerShopFactory";
import { deleteShopFactory } from "../DeleteShop/DeleteShopFactory";
import { updateShopFactory } from "../UpdateShop/UpdateShopFactory";

 
export const shopRoutes = Router();

shopRoutes.route('/')
  .post(ensuredAuthenticated(), (request, response) => { return createShopFactory().handle(request, response) } )
  .get((request, response) => { return findAllShopiesFactory().handle(request, response) } )

shopRoutes.route('/:id')
  .get((request, response) => { return findByIdShopFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateShopFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteShopFactory().handle(request, response) } )

shopRoutes.route('/ByAddress/:id_address')
  .get((request, response) => { return findByAddressShopFactory().handle(request, response) })
 

shopRoutes.route('/ByOwner/:id_owner')
  .get((request, response) => { return findByOwnerShopFactory().handle(request, response) })
 