import { Router } from 'express'

import { ensuredAuthenticated } from '../../../middlewares'
import { createPaymentTypeFactory } from '../CreatePaymentType/CreatePaymentTypeFactory'
import { findAllPaymentTypesFactory } from '../FindAllPaymentTypes/FindAllPaymentTypesFactory'
import { findByIdPaymentTypeFactory } from '../FindByIdPaymentType/FindByIdPaymentTypeFactory'
import { findByNamePaymentTypeFactory } from '../FindByNamePaymentType/FindByNamePaymentTypeFactory'
import { deletePaymentTypeFactory } from '../DeletePaymentType/DeletePaymentTypeFactory'
import { updatePaymentTypeFactory } from '../UpdatePaymentType/UpdatePaymentTypeFactory'


export const paymentTypeRoutes = Router();

paymentTypeRoutes.route('/')
  .post(ensuredAuthenticated() , (request, response) => { return createPaymentTypeFactory().handle(request, response) } )
  .get((request, response) => { return findAllPaymentTypesFactory().handle(request, response) } )
  
paymentTypeRoutes.route('/:id')
  .get((request, response) => { return findByIdPaymentTypeFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updatePaymentTypeFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deletePaymentTypeFactory().handle(request, response) } )

paymentTypeRoutes.route('/ByName/:name')
  .get((request, response) => { return findByNamePaymentTypeFactory().handle(request, response) } )