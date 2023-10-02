import { Request, Response, Router } from "express";
import { ensuredAuthenticated } from "../../../middlewares";

import { createOwnerFactory } from "../CreateOwner/CreateOwnerFactory";
import { findAllOwnersFactory } from "../FindAllOwners/FindAllOwnersFactory";
import { findByIdOwnerFactory } from "../FindByIdOwner/FindByIdOwnerFactory";
import { findByIdentityOwnerFactory } from "../FindByIdentityOwner/FindByIdentityOwnerFactory";
import { findByIdUserOwnerFactory } from "../FindByIdUserOwner/FindByIdUserOwnerFactory";
import { updateOwnerFactory } from "../UpdateOwner/UpdateOwnerFactory";
import { deleteOwnerFactory } from "../DeleteOwner/DeleteOwnerFactory";

export const ownerRoutes = Router();


ownerRoutes.route('/') 
  .post((request, response) => { return createOwnerFactory().handle(request, response) })
  .get((request, response) => { return findAllOwnersFactory().handle(request, response) })

ownerRoutes.route(`/:id`)
  .get((request, response) => { return findByIdOwnerFactory().handle(request, response) })
  .put((request, response) => { return updateOwnerFactory().handle(request, response) })
  .delete((request, response) => { return deleteOwnerFactory().handle(request, response) })

ownerRoutes.route(`/byUserId/:id_user`)
  .get((request, response) => { return findByIdUserOwnerFactory().handle(request, response) })

ownerRoutes.route(`/byIdentity/:identity`)
  .get((request, response) => { return findByIdentityOwnerFactory().handle(request, response) })




