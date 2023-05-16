import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createDiscountFactory } from "../CreateDiscount/CreateDiscountFactory";
import { findAllDiscountsFactory } from "../FindAllDiscounts/FindAllDiscountsFactory";
import { findByIdDiscountFactory } from "../FindByIdDiscount/FindByIdDiscountFactory";
import { deleteDiscountFactory } from "../DeleteDiscount/DeleteDiscountFactory";
import { updateDiscountFactory } from "../UpdateDiscount/UpdateDiscountFactory";

export const discountRoutes = Router();

discountRoutes.route('/')
  .post(ensuredAuthenticated(), (request, response) => { return createDiscountFactory().handle(request, response) } )
  .get((request, response) => { return findAllDiscountsFactory().handle(request, response) } )

discountRoutes.route('/:id')
  .get((request, response) => { return findByIdDiscountFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateDiscountFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteDiscountFactory().handle(request, response) } )
