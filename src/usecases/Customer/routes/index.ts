import { Router } from "express";

import { createCustomerFactory } from "../CreateCustomer/CreateCustomerFactory";
import { findAllCustomersFactory } from "../FindAllCustomers/FindAllCustomersFactory";
import { findByIdCustomerFactory } from "../FindByIdCustomer/FindByIdCustomerFactory";
import { findByCustomerTypeFactory } from "../FindByCustomerType/FindByCustomerTypeFactory";
import { findByIdentityCustomerFactory } from "../FindByIdentityCustomer/FindByIdentityCustomerFactory";
import { findByIdUserCustomerFactory } from "../FindByIdUserCustomer/FindByIdUserCustomerFactory";
import { deleteCustomerFactory } from "../DeleteCustomer/DeleteCustomerFactory";
import { updateCustomerFactory } from "../UpdateCustomer/UpdateCustomerFactory";
import { ensuredAuthenticated } from "../../../middlewares";

export const customerRoutes = Router();

customerRoutes.route('/')
  .post(ensuredAuthenticated(), (request, response) => { return createCustomerFactory().handle(request, response) } )
  .get((request, response) => { return findAllCustomersFactory().handle(request, response) } )
  
customerRoutes.route('/:id')
  .get((request, response) => { return findByIdCustomerFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateCustomerFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteCustomerFactory().handle(request, response) } )
  
customerRoutes.route('/userById/:id_user')
  .get((request, response) => { return findByIdUserCustomerFactory().handle(request, response) } )
  
customerRoutes.route('/byIdentity/:identity')
  .get((request, response) => { return findByIdentityCustomerFactory().handle(request, response) } )
  
customerRoutes.route('/byType/:id_customerType')
  .get((request, response) => { return findByCustomerTypeFactory().handle(request, response) } )
