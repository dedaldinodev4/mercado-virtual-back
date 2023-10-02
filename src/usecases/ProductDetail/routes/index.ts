import { Router } from "express";

import { ensuredAuthenticated } from "../../../middlewares";

import { createProductDetailFactory } from "../CreateProductDetail/CreateProductDetailFactory";
import { findAllProductDetailsFactory } from "../FindAllProductDetails/FindAllProductDetailsFactory";
import { findByIdProductDetailFactory } from "../FindByIdProductDetail/FindByIdProductDetailFactory";
import { findByProductDetailsFactory } from "../FindByProductDetails/FindByProductDetailsFactory";
import { deleteProductDetailFactory } from "../DeleteProductDetail/DeleteProductDetailFactory";
import { updateProductDetailFactory } from "../UpdateProductDetail/UpdateProductDetailFactory";
import { upload } from "../../../middlewares/multer";


export const productDetailRoutes = Router();

productDetailRoutes.route('/:id_product')
  .post(upload.single('url'), (request, response) => { return createProductDetailFactory().handle(request, response) } )

productDetailRoutes.route('/')
  .get((request, response) => { return findAllProductDetailsFactory().handle(request, response) } )

productDetailRoutes.route('/:id')
  .get((request, response) => { return findByIdProductDetailFactory().handle(request, response) } )
  .put(upload.single('url'), (request, response) => { return updateProductDetailFactory().handle(request, response) } )
  .delete((request, response) => { return deleteProductDetailFactory().handle(request, response) } )

productDetailRoutes.route('/ByProduct/:id_product')
  .get((request, response) => { return findByProductDetailsFactory().handle(request, response) })


