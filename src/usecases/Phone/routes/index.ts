import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createPhoneFactory } from "../CreatePhone/CreatePhoneFactory";
import { findAllPhonesFactory } from "../FindAllPhones/FindAllPhonesFactory";
import { findByIdPhoneFactory } from "../FindByIdPhone/FindByIdPhoneFactory";
import { findByUserPhoneFactory } from "../FindByUserPhone/FindByUserPhoneFactory";
import { deletePhoneFactory } from "../DeletePhone/DeletePhoneFactory";
import { updatePhoneFactory } from "../UpdatePhone/UpdatePhoneFactory";

export const phoneRoutes = Router();

phoneRoutes.route('/')
  .post((request, response) => { return createPhoneFactory().handle(request, response) } )
  .get((request, response) => { return findAllPhonesFactory().handle(request, response) } )

phoneRoutes.route('/:id')
  .get((request, response) => { return findByIdPhoneFactory().handle(request, response) } )
  .put((request, response) => { return updatePhoneFactory().handle(request, response) } )
  .delete((request, response) => { return deletePhoneFactory().handle(request, response) } )

phoneRoutes.route('/ByUser/:id_user')
  .get((request, response) => { return findByUserPhoneFactory().handle(request, response) } )
