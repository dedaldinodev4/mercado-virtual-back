import { Router } from "express";

import { createAddressFactory } from "../CreateAddress/CreateAddressFactory";
import { findAllAddressesFactory } from "../FindAllAddresses/FindAllAddressesFactory";
import { findByIdAddressFactory } from "../FindByIdAddress/FindByIdAddressFactory";
import { findByIdUserAddressFactory } from "../FindByIdUserAddress/FindByIdUserAddressFactory";
import { updateAddressFactory } from "../UpdateAddress/UpdateAddressFactory";
import { deleteAddressFactory } from "../DeleteAddress/DeleteAddressFactory";

import { ensuredAuthenticated } from "../../../middlewares";

export const addressRoutes = Router();

addressRoutes.route('/')
  .get((request, response) => { return findAllAddressesFactory().handle(request, response) })
  .post(ensuredAuthenticated(), (request, response) => { return createAddressFactory().handle(request, response) } )

addressRoutes.route('/:id')
  .get((request, response) => { return findByIdAddressFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateAddressFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteAddressFactory().handle(request, response) } )

  addressRoutes.route('/userById/:id_user')
    .get((request, response) => { return findByIdUserAddressFactory().handle(request, response) } )
