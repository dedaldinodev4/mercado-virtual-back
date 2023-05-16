import { Router } from 'express'

import { ensuredAuthenticated } from '../../../middlewares'
import { createCustomerTypeFactory } from '../CreateCustomerType/CreateCustomerTypeFactory'
import { findAllCustomerTypesFactory } from '../FindAllCustomerTypes/FindAllCustomerTypesFactory'
import { findByIdCustomerTypeFactory } from '../FindByIdCustomerType/FindByIdCustomerTypeFactory'
import { findByNameCustomerTypeFactory } from '../FindByNameCustomerType/FindByNameCustomerTypeFactory'
import { deleteCustomerTypeFactory } from '../DeleteCustomerType/DeleteCustomerTypeFactory'
import { updateCustomerTypeFactory } from '../UpdateCustomerType/UpdateCustomerTypeFactory'


export const customerTypeRoutes = Router();

customerTypeRoutes.route('/')
  .post(ensuredAuthenticated() , (request, response) => { return createCustomerTypeFactory().handle(request, response) } )
  .get((request, response) => { return findAllCustomerTypesFactory().handle(request, response) } )
  
customerTypeRoutes.route('/:id')
  .get((request, response) => { return findByIdCustomerTypeFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateCustomerTypeFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteCustomerTypeFactory().handle(request, response) } )

customerTypeRoutes.route('/ByName/:name')
  .get((request, response) => { return findByNameCustomerTypeFactory().handle(request, response) } )