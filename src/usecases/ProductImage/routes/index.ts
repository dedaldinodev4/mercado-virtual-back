import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createProductImageFactory } from "../CreateProductImage/CreateProductImageFactory";
import { findAllProductImagesFactory } from "../FindAllProductImages/FindAllProductImagesFactory";
import { findByIdProductImageFactory } from "../FindByIdProductImage/FindByIdProductImageFactory";
import { findByProductImagesFactory } from "../FindByProductImages/FindByProductImagesFactory";
import { deleteProductImageFactory } from "../DeleteProductImage/DeleteProductImageFactory";
import { updateProductImageFactory } from "../UpdateProductImage/UpdateProductImageFactory";
import { upload } from "../../../middlewares/multer";
import { getProductImageFactory } from "../GetProductImage/GetProductImageFactory";


export const productImageRoutes = Router();

productImageRoutes.route('/:id_product')
  .post(ensuredAuthenticated(), upload.single('url'), (request, response) => { return createProductImageFactory().handle(request, response) } )

productImageRoutes.route('/')
  .get((request, response) => { return findAllProductImagesFactory().handle(request, response) } )

productImageRoutes.route('/:id')
  .get((request, response) => { return findByIdProductImageFactory().handle(request, response) } )
  .put(ensuredAuthenticated(), upload.single('url'), (request, response) => { return updateProductImageFactory().handle(request, response) } )
  .delete(ensuredAuthenticated(), (request, response) => { return deleteProductImageFactory().handle(request, response) } )

productImageRoutes.route('/ByProduct/:id_product')
  .get((request, response) => { return findByProductImagesFactory().handle(request, response) })

  productImageRoutes.route('/getImages/:url')
  .get((request, response) => { return getProductImageFactory().handle(request, response) })
