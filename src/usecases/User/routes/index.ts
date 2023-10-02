import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { findAllUsersFactory } from "../FindAllUsers/FindAllUsersFactory";
import { findByEmailUserFactory } from "../FindByEmailUser/FindByEmailUserFactory";
import { updateUserFactory } from "../UpdateUser/UpdateUserFactory";
import { deleteUserFactory } from "../DeleteUser/DeleteUserFactory";
import { updateUserCredentialsFactory } from "../UpdateCredentialsUser/UpdateUserCredentialsFactory";
import { createUserFactory } from '../CreateUser/CreateUserFactory'

export const userRoutes = Router();

userRoutes.route('/')
  .post((request, response) => { return createUserFactory().handle(request, response) } )
  .get((request, response) => { return findAllUsersFactory().handle(request, response) } )

userRoutes.route('/:id')
  .put((request, response) => { return updateUserFactory().handle(request, response) } )
  .delete((request, response) => { return deleteUserFactory().handle(request, response) } )
  
userRoutes.route('/credentials/:id')
  .put((request, response) => { return updateUserCredentialsFactory().handle(request, response) } )

userRoutes.route('/ByEmail/:email')
  .get((request, response) => { return findByEmailUserFactory().handle(request, response) } )