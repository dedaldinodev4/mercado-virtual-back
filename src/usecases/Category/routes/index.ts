import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createCategoryFactory } from "../CreateCategory/CreateCategoryFactory";
import { findAllCategoriesFactory } from "../FindAllCategories/FindAllCategoriesFactory";
import { findByIdCategoryFactory } from "../FindByIdCategory/FindByIdCategoryFactory";
import { deleteCategoryFactory } from "../DeleteCategory/DeleteCategoryFactory";
import { updateCategoryFactory } from "../UpdateCategory/UpdateCategoryFactory";

export const categoryRoutes = Router();

categoryRoutes.route('/')
  .post(ensuredAuthenticated(), (request, response) => { return createCategoryFactory().handle(request, response) } )
  .get((request, response) => { return findAllCategoriesFactory().handle(request, response) } )

categoryRoutes.route('/:id')
  .get((request, response) => { return findByIdCategoryFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), (request, response) => { return updateCategoryFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteCategoryFactory().handle(request, response) } )
