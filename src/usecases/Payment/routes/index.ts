import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createPaymentFactory } from "../CreatePayment/CreatePaymentFactory";
import { findAllPaymentsFactory } from "../FindAllPayments/FindAllPaymentsFactory";
import { findByIdPaymentFactory } from "../FindByIdPayment/FindByIdPaymentFactory";
import { findByOrderPaymentFactory } from "../FindByOrderPayment/FindByOrderPaymentFactory";
import { deletePaymentFactory } from "../DeletePayment/DeletePaymentFactory";
import { updatePaymentFactory } from "../UpdatePayment/UpdatePaymentFactory";


export const paymentRoutes = Router();

paymentRoutes.route('/')
  .post((request, response) => { return createPaymentFactory().handle(request, response) } )
  .get((request, response) => { return findAllPaymentsFactory().handle(request, response) } )

paymentRoutes.route('/:id')
  .get((request, response) => { return findByIdPaymentFactory().handle(request, response) } )
  .put((request, response) => { return updatePaymentFactory().handle(request, response) } )
  .delete((request, response) => { return deletePaymentFactory().handle(request, response) } )

paymentRoutes.route('/ByOrder/:id_order')
  .get((request, response) => { return findByOrderPaymentFactory().handle(request, response) })
