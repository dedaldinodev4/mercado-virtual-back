import { Router } from "express";

import { ownerRoutes } from "../usecases/Owner";
import { authRoutes } from "../usecases/Auth";
import { userRoutes } from "../usecases/User";
import { phoneRoutes } from "../usecases/Phone";
import { categoryRoutes } from "../usecases/Category";
import { discountRoutes } from "../usecases/Discount";
import { addressRoutes } from "../usecases/Address";
import { customerRoutes } from "../usecases/Customer";
import { customerTypeRoutes } from "../usecases/CustomerType";
import { cartRoutes } from "../usecases/Cart";
import { develyRoutes } from "../usecases/Devely";
import { orderRoutes } from "../usecases/Order";
import { paymentRoutes } from "../usecases/Payment";
import { paymentTypeRoutes } from "../usecases/PaymentType";
import { productRoutes } from "../usecases/Product";
import { productImageRoutes } from "../usecases/ProductImage";
import { shopRoutes } from "../usecases/Shop";
import { productShopRoutes } from "../usecases/ProductShop";
import { productCategoryRoutes } from "../usecases/ProductCategory";
import { productShopOrderRoutes } from "../usecases/ProductShopOrder";

const router = Router();

//* Auth Routes *//
router.use(`/api/v1/auth`, authRoutes)
//* Users Routes *//
router.use(`/api/v1/users`, userRoutes)
//* Phones Routes*//
router.use(`/api/v1/phones`, phoneRoutes)
//* Categories Routes*//
router.use(`/api/v1/categories`, categoryRoutes)
//* Discounts Routes*//
router.use(`/api/v1/discounts`, discountRoutes)
//* Addresses Routes *//
router.use(`/api/v1/addresses`, addressRoutes)
//* Customers Routes *//
router.use(`/api/v1/customers`, customerRoutes)
//* CustomerTypes Routes *//
router.use(`/api/v1/customer_types`, customerTypeRoutes)
//* Carts Routes *//
router.use(`/api/v1/carts`, cartRoutes)
//* Develies Routes *//
router.use(`/api/v1/develies`, develyRoutes)
//* Orders Routes *//
router.use(`/api/v1/orders`, orderRoutes)
//* Owners Routes *//
router.use(`/api/v1/owners`, ownerRoutes)
//* Payments Routes *//
router.use(`/api/v1/payments`, paymentRoutes)
//* PaymentTypes Routes *//
router.use(`/api/v1/payment_types`, paymentTypeRoutes)
//* Products Routes *//
router.use(`/api/v1/products`, productRoutes)
//* ProductImages Routes *//
router.use(`/api/v1/product_images`, productImageRoutes)
//* Shopies Routes *//
router.use(`/api/v1/shopies`, shopRoutes)
//* ProductShopies Routes *//
router.use(`/api/v1/product_shopies`, productShopRoutes)
//* ProductCategories Routes *//
router.use(`/api/v1/product_categories`, productCategoryRoutes)
//* ProductShopOrders Routes *//
router.use(`/api/v1/productShop_orders`, productShopOrderRoutes)

export { router }
