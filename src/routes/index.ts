import { Router } from "express";

//* Auth *//
import { signInFactory } from "../usecases/Auth/SignIn/SignInFactory";
import { signUpFactory } from "../usecases/Auth/SignUp/SignUpFactory";

//* Users *//
import { findAllUsersFactory } from "../usecases/User/FindAllUsers/FindAllUsersFactory";
import { findByEmailUserFactory } from "../usecases/User/FindByEmailUser/FindByEmailUserFactory";

//* Phones *//
import { createPhoneFactory } from "../usecases/Phone/CreatePhone/CreatePhoneFactory";
import { deletePhoneFactory } from "../usecases/Phone/DeletePhone/DeletePhoneFactory";
import { findAllPhonesFactory } from "../usecases/Phone/FindAllPhones/FindAllPhonesFactory";
import { findByIdPhoneFactory } from "../usecases/Phone/FindByIdPhone/FindByIdPhoneFactory";
import { updatePhoneFactory } from "../usecases/Phone/UpdatePhone/UpdatePhoneFactory";

//* Categories *//
import { createCategoryFactory } from "../usecases/Category/CreateCategory/CreateCategoryFactory";
import { findAllCategoriesFactory } from "../usecases/Category/FindAllCategories/FindAllCategoriesFactory";
import { findByIdCategoryFactory } from "../usecases/Category/FindByIdCategory/FindByIdCategoryFactory";
import { updateCategoryFactory } from "../usecases/Category/UpdateCategory/UpdateCategoryFactory";
import { deleteCategoryFactory } from "../usecases/Category/DeleteCategory/DeleteCategoryFactory";

//* Discounts *//
import { createDiscountFactory } from "../usecases/Discount/CreateDiscount/CreateDiscountFactory";
import { findAllDiscountsFactory } from "../usecases/Discount/FindAllDiscounts/FindAllDiscountsFactory";
import { findByIdDiscountFactory } from "../usecases/Discount/FindByIdDiscount/FindByIdDiscountFactory";
import { updateDiscountFactory } from "../usecases/Discount/UpdateDiscount/UpdateDiscountFactory";
import { deleteDiscountFactory } from "../usecases/Discount/DeleteDiscount/DeleteDiscountFactory";

//* Addresses *//
import { createAddressFactory } from "../usecases/Address/CreateAddress/CreateAddressFactory";
import { findAllAddressesFactory } from "../usecases/Address/FindAllAddresses/FindAllAddressesFactory";
import { findByIdAddressFactory } from "../usecases/Address/FindByIdAddress/FindByIdAddressFactory";
import { updateAddressFactory } from "../usecases/Address/UpdateAddress/UpdateAddressFactory";
import { deleteAddressFactory } from "../usecases/Address/DeleteAddress/DeleteAddressFactory";
import { findByIdUserAddressFactory } from "../usecases/Address/FindByIdUserAddress/FindByIdUserAddressFactory";

//* Customers *//
import { createCustomerFactory } from "../usecases/Customer/CreateCustomer/CreateCustomerFactory";
import { findAllCustomersFactory } from "../usecases/Customer/FindAllCustomers/FindAllCustomersFactory";
import { findByIdCustomerFactory } from "../usecases/Customer/FindByIdCustomer/FindByIdCustomerFactory";
import { updateCustomerFactory } from "../usecases/Customer/UpdateCustomer/UpdateCustomerFactory";
import { deleteCustomerFactory } from "../usecases/Customer/DeleteCustomer/DeleteCustomerFactory";
import { findByIdUserCustomerFactory } from "../usecases/Customer/FindByIdUserCustomer/FindByIdUserCustomerFactory";
import { findByIdentityCustomerFactory } from "../usecases/Customer/FindByIdentityCustomer/FindByIdentityCustomerFactory";
import { findByCustomerTypeFactory } from "../usecases/Customer/FindByCustomerType/FindByCustomerTypeFactory";

//* CustomerTypes *//
import { createCustomerTypeFactory } from "../usecases/CustomerType/CreateCustomerType/CreateCustomerTypeFactory";
import { findAllCustomerTypesFactory } from "../usecases/CustomerType/FindAllCustomerTypes/FindAllCustomerTypesFactory";
import { findByIdCustomerTypeFactory } from "../usecases/CustomerType/FindByIdCustomerType/FindByIdCustomerTypeFactory";
import { findByNameCustomerTypeFactory } from "../usecases/CustomerType/FindByNameCustomerType/FindByNameCustomerTypeFactory";
import { updateCustomerTypeFactory } from "../usecases/CustomerType/UpdateCustomerType/UpdateCustomerTypeFactory";
import { deleteCustomerTypeFactory } from "../usecases/CustomerType/DeleteCustomerType/DeleteCustomerTypeFactory";

//* Carts *//
import { createCartFactory } from "../usecases/Cart/CreateCart/CreateCartFactory";
import { findAllCartsFactory } from "../usecases/Cart/FindAllCarts/FindAllCartsFactory";
import { findByIdCartFactory } from "../usecases/Cart/FindByIdCart/FindByIdCartFactory";
import { findByStatusCartFactory } from "../usecases/Cart/FindByStatusCart/FindByStatusCartFactory";
import { updateCartFactory } from "../usecases/Cart/UpdateCart/UpdateCartFactory";
import { deleteCartFactory } from "../usecases/Cart/DeleteCart/DeleteCartFactory";

//* Develies *//
import { createDevelyFactory } from "../usecases/Devely/CreateDevely/CreateDevelyFactory";
import { findAllDeveliesFactory } from "../usecases/Devely/FindAllDevelies/FindAllDeveliesFactory";
import { findByIdDevelyFactory } from "../usecases/Devely/FindByIdDevely/FindByIdDevelyFactory";
import { findByOrderDevelyFactory } from "../usecases/Devely/FindByOrderDevely/FindByOrderDevelyFactory";
import { findByStatusDevelyFactory } from "../usecases/Devely/FindByStatusDevely/FindByStatusDevelyFactory";
import { updateDevelyFactory } from "../usecases/Devely/UpdateDevely/UpdateDevelyFactory";
import { deleteDevelyFactory } from "../usecases/Devely/DeleteDevely/DeleteDevelyFactory";

//* Orders *//
import { createOrderFactory } from "../usecases/Order/CreateOrder/CreateOrderFactory";
import { findAllOrdersFactory } from "../usecases/Order/FindAllOrders/FindAllOrdersFactory";
import { findByIdOrderFactory } from "../usecases/Order/FindByIdOrder/FindByIdOrderFactory";
import { findByTokenOrderFactory } from "../usecases/Order/FindByTokenOrder/FindByTokenOrderFactory";
import { findByCustomerOrderFactory } from "../usecases/Order/FindByCustomerOrder/FindByCustomerOrderFactory";
import { updateOrderFactory } from "../usecases/Order/UpdateOrder/UpdateOrderFactory";
import { deleteOrderFactory } from "../usecases/Order/DeleteOrder/DeleteOrderFactory";

//* Owners *//
import { createOwnerFactory } from "../usecases/Owner/CreateOwner/CreateOwnerFactory";
import { findAllOwnersFactory } from "../usecases/Owner/FindAllOwners/FindAllOwnersFactory";
import { findByIdOwnerFactory } from "../usecases/Owner/FindByIdOwner/FindByIdOwnerFactory";
import { updateOwnerFactory } from "../usecases/Owner/UpdateOwner/UpdateOwnerFactory";
import { deleteOwnerFactory } from "../usecases/Owner/DeleteOwner/DeleteOwnerFactory";
import { findByIdUserOwnerFactory } from "../usecases/Owner/FindByIdUserOwner/FindByIdUserOwnerFactory";
import { findByIdentityOwnerFactory } from "../usecases/Owner/FindByIdentityOwner/FindByIdentityOwnerFactory";

//* Payments *//
import { createPaymentFactory } from "../usecases/Payment/CreatePayment/CreatePaymentFactory";
import { findAllPaymentsFactory } from "../usecases/Payment/FindAllPayments/FindAllPaymentsFactory";
import { findByIdPaymentFactory } from "../usecases/Payment/FindByIdPayment/FindByIdPaymentFactory";
import { findByOrderPaymentFactory } from "../usecases/Payment/FindByOrderPayment/FindByOrderPaymentFactory";
import { updatePaymentFactory } from "../usecases/Payment/UpdatePayment/UpdatePaymentFactory";
import { deletePaymentFactory } from "../usecases/Payment/DeletePayment/DeletePaymentFactory";

//* PaymentTypes *//
import { createPaymentTypeFactory } from "../usecases/PaymentType/CreatePaymentType/CreatePaymentTypeFactory";
import { findAllPaymentTypesFactory } from "../usecases/PaymentType/FindAllPaymentTypes/FindAllPaymentTypesFactory";
import { findByIdPaymentTypeFactory } from "../usecases/PaymentType/FindByIdPaymentType/FindByIdPaymentTypeFactory";
import { findByNamePaymentTypeFactory } from "../usecases/PaymentType/FindByNamePaymentType/FindByNamePaymentTypeFactory";
import { updatePaymentTypeFactory } from "../usecases/PaymentType/UpdatePaymentType/UpdatePaymentTypeFactory";
import { deletePaymentTypeFactory } from "../usecases/PaymentType/DeletePaymentType/DeletePaymentTypeFactory";

//* Products *//
import { createProductFactory } from "../usecases/Product/CreateProduct/CreateProductFactory";
import { findAllProductsFactory } from "../usecases/Product/FindAllProducts/FindAllProductsFactory";
import { findByIdProductFactory } from "../usecases/Product/FindByIdProduct/FindByIdProductFactory";
import { findByCategoryProductFactory } from "../usecases/Product/FindByCategoryProduct/FindByCategoryProductFactory";
import { updateProductFactory } from "../usecases/Product/UpdateProduct/UpdateProductFactory";
import { deleteProductFactory } from "../usecases/Product/DeleteProduct/DeleteProductFactory";

//* ProductImges *//
import { createProductImageFactory } from "../usecases/ProductImage/CreateProductImage/CreateProductImageFactory";
import { findAllProductImagesFactory } from "../usecases/ProductImage/FindAllProductImages/FindAllProductImagesFactory";
import { findByIdProductImageFactory } from "../usecases/ProductImage/FindByIdProductImage/FindByIdProductImageFactory";
import { findByProductImagesFactory } from "../usecases/ProductImage/FindByProductImages/FindByProductImagesFactory";
import { updateProductImageFactory } from "../usecases/ProductImage/UpdateProductImage/UpdateProductImageFactory";
import { deleteProductImageFactory } from "../usecases/ProductImage/DeleteProductImage/DeleteProductImageFactory";

//* Shopies *//
import { createShopFactory } from "../usecases/Shop/CreateShop/CreateShopFactory";
import { findAllShopiesFactory } from "../usecases/Shop/FindAllShopies/FindAllShopiesFactory";
import { findByIdShopFactory } from "../usecases/Shop/FindByIdShop/FindByIdShopFactory";
import { findByOwnerShopFactory } from "../usecases/Shop/FindByOwnerShop/FindByOwnerShopFactory";
import { findByAddressShopFactory } from "../usecases/Shop/FindByAddressShop/FindByAddressShopFactory";
import { updateShopFactory } from "../usecases/Shop/UpdateShop/UpdateShopFactory";
import { deleteShopFactory } from "../usecases/Shop/DeleteShop/DeleteShopFactory";

//* ProductShopies *//
import { createProductShopFactory } from "../usecases/ProductShop/CreateProductShop/CreateProductShopFactory";
import { findAllProductShopiesFactory } from "../usecases/ProductShop/FindAllProductShopies/FindAllProductShopiesFactory";
import { findByIdProductShopFactory } from "../usecases/ProductShop/FindByIdProductShop/FindByIdProductShopFactory";
import { findByShopProductShopFactory } from "../usecases/ProductShop/FindByShopProductShop/FindByShopProductShopFactory";
import { updateProductShopFactory } from "../usecases/ProductShop/UpdateProductShop/UpdateProductShopFactory";
import { deleteProductShopFactory } from "../usecases/ProductShop/DeleteProductShop/DeleteProductShopFactory";

//* ProductShopOrders *//
import { createProductShopOrderFactory } from "../usecases/ProductShopOrder/CreateProductShopOrder/CreateProductShopOrderFactory";
import { findAllProductShopOrdersFactory } from "../usecases/ProductShopOrder/FindAllProductShopOrders/FindAllProductShopOrdersFactory";
import { findByIdProductShopOrderFactory } from "../usecases/ProductShopOrder/FindByIdProductShopOrder/FindByIdProductShopOrderFactory";
import { findByOrderProductShopOrderFactory } from "../usecases/ProductShopOrder/FindByOrderProductShopOrder/FindByOrderProductOrderFactory";
import { updateProductShopOrderFactory } from "../usecases/ProductShopOrder/UpdateProductShopOrder/UpdateProductShopOrderFactory";
import { deleteProductShopOrderFactory } from "../usecases/ProductShopOrder/DeleteProductShopOrder/DeleteProductShopOrderFactory";

const router = Router();

//* Auth Routes *//
router.post(`/api/v1/auth/register`, (request, response) => { return signUpFactory().handle(request, response) })
router.post(`/api/v1/auth/login`, (request, response) => { return signInFactory().handle(request, response) } )

//* Users Routes *//
router.get(`/api/v1/users`, (request, response) => { return findAllUsersFactory().handle(request, response) } )
router.get(`/api/v1/users/:email`, (request, response) => { return findByEmailUserFactory().handle(request, response) }) 

//* Phones Routes*//
router.post(`/api/v1/phones`, (request, response) => { return createPhoneFactory().handle(request, response) } )
router.get(`/api/v1/phones`, (request, response) => { return findAllPhonesFactory().handle(request, response) } )
router.get(`/api/v1/phones/:id`, (request, response) => { return findByIdPhoneFactory().handle(request, response) } )
router.put(`/api/v1/phones/:id`, (request, response) => { return updatePhoneFactory().handle(request, response) } )
router.delete(`/api/v1/phones/:id`, (request, response) => { return deletePhoneFactory().handle(request, response) } )

//* Categories Routes*//
router.post(`/api/v1/categories`, (request, response) => { return createCategoryFactory().handle(request, response) } )
router.get(`/api/v1/categories`, (request, response) => { return findAllCategoriesFactory().handle(request, response) } )
router.get(`/api/v1/categories/:id`, (request, response) => { return findByIdCategoryFactory().handle(request, response) } )
router.put(`/api/v1/categories/:id`, (request, response) => { return updateCategoryFactory().handle(request, response) } )
router.delete(`/api/v1/categories/:id`, (request, response) => { return deleteCategoryFactory().handle(request, response) } )

//* Discounts Routes*//
router.post(`/api/v1/discounts`, (request, response) => { return createDiscountFactory().handle(request, response) } )
router.get(`/api/v1/discounts`, (request, response) => { return findAllDiscountsFactory().handle(request, response) } )
router.get(`/api/v1/discounts/:id`, (request, response) => { return findByIdDiscountFactory().handle(request, response) } )
router.put(`/api/v1/discounts/:id`, (request, response) => { return updateDiscountFactory().handle(request, response) } )
router.delete(`/api/v1/discounts/:id`, (request, response) => { return deleteDiscountFactory().handle(request, response) } )

//* Addresses Routes *//
router.post(`/api/v1/addresses`, (request, response) => { return createAddressFactory().handle(request, response) } )
router.get(`/api/v1/addresses`, (request, response) => { return findAllAddressesFactory().handle(request, response) } )
router.get(`/api/v1/addresses/:id`, (request, response) => { return findByIdAddressFactory().handle(request, response) } )
router.get(`/api/v1/addresses/userById/:id_user`, (request, response) => { return findByIdUserAddressFactory().handle(request, response) } )
router.put(`/api/v1/addresses/:id`, (request, response) => { return updateAddressFactory().handle(request, response) } )
router.delete(`/api/v1/addresses/:id`, (request, response) => { return deleteAddressFactory().handle(request, response) } )

//* Customers Routes *//
router.post(`/api/v1/customers`, (request, response) => { return createCustomerFactory().handle(request, response) } )
router.get(`/api/v1/customers`, (request, response) => { return findAllCustomersFactory().handle(request, response) } )
router.get(`/api/v1/customers/:id`, (request, response) => { return findByIdCustomerFactory().handle(request, response) } )
router.get(`/api/v1/customers/userById/:id_user`, (request, response) => { return findByIdUserCustomerFactory().handle(request, response) } )
router.get(`/api/v1/customers/byIdentity/:identity`, (request, response) => { return findByIdentityCustomerFactory().handle(request, response) } )
router.get(`/api/v1/customers/byType/:id_customerType`, (request, response) => { return findByCustomerTypeFactory().handle(request, response) } )
router.put(`/api/v1/customers/:id`, (request, response) => { return updateCustomerFactory().handle(request, response) } )
router.delete(`/api/v1/customers/:id`, (request, response) => { return deleteCustomerFactory().handle(request, response) } )

//* CustomerTypes Routes *//
router.post(`/api/v1/customer_types`, (request, response) => { return createCustomerTypeFactory().handle(request, response) } )
router.get(`/api/v1/customer_types`, (request, response) => { return findAllCustomerTypesFactory().handle(request, response) } )
router.get(`/api/v1/customer_types/:id`, (request, response) => { return findByIdCustomerTypeFactory().handle(request, response) } )
router.get(`/api/v1/customer_types/ByName/:name`, (request, response) => { return findByNameCustomerTypeFactory().handle(request, response) } )
router.put(`/api/v1/customer_types/:id`, (request, response) => { return updateCustomerTypeFactory().handle(request, response) } )
router.delete(`/api/v1/customer_types/:id`, (request, response) => { return deleteCustomerTypeFactory().handle(request, response) } )

//* Carts Routes *//
router.post(`/api/v1/carts`, (request, response) => { return createCartFactory().handle(request, response) } )
router.get(`/api/v1/carts`, (request, response) => { return findAllCartsFactory().handle(request, response) } )
router.get(`/api/v1/carts/:id`, (request, response) => { return findByIdCartFactory().handle(request, response) } )
router.get(`/api/v1/carts/ByStatus/:status`, (request, response) => { return findByStatusCartFactory().handle(request, response) } )
router.put(`/api/v1/carts/:id`, (request, response) => { return updateCartFactory().handle(request, response) } )
router.delete(`/api/v1/carts/:id`, (request, response) => { return deleteCartFactory().handle(request, response) } )

//* Develies Routes *//
router.post(`/api/v1/develies`, (request, response) => { return createDevelyFactory().handle(request, response) } )
router.get(`/api/v1/develies`, (request, response) => { return findAllDeveliesFactory().handle(request, response) } )
router.get(`/api/v1/develies/:id`, (request, response) => { return findByIdDevelyFactory().handle(request, response) } )
router.get(`/api/v1/develies/ByOrder/:id_order`, (request, response) => { return findByOrderDevelyFactory().handle(request, response) } )
router.get(`/api/v1/develies/ByStatus/:status`, (request, response) => { return findByStatusDevelyFactory().handle(request, response) } )
router.put(`/api/v1/develies/:id`, (request, response) => { return updateDevelyFactory().handle(request, response) } )
router.delete(`/api/v1/develies/:id`, (request, response) => { return deleteDevelyFactory().handle(request, response) } )

//* Orders Routes *//
router.post(`/api/v1/orders`, (request, response) => { return createOrderFactory().handle(request, response) } )
router.get(`/api/v1/orders`, (request, response) => { return findAllOrdersFactory().handle(request, response) } )
router.get(`/api/v1/orders/:id`, (request, response) => { return findByIdOrderFactory().handle(request, response) } )
router.get(`/api/v1/orders/ByToken/:token`, (request, response) => { return findByTokenOrderFactory().handle(request, response) } )
router.get(`/api/v1/orders/ByCustomer/:id_customer`, (request, response) => { return findByCustomerOrderFactory().handle(request, response) } )
router.put(`/api/v1/orders/:id`, (request, response) => { return updateOrderFactory().handle(request, response) } )
router.delete(`/api/v1/orders/:id`, (request, response) => { return deleteOrderFactory().handle(request, response) } )

//* Owners Routes *//
router.post(`/api/v1/owners`, (request, response) => { return createOwnerFactory().handle(request, response) } )
router.get(`/api/v1/owners`, (request, response) => { return findAllOwnersFactory().handle(request, response) } )
router.get(`/api/v1/owners/:id`, (request, response) => { return findByIdOwnerFactory().handle(request, response) } )
router.get(`/api/v1/owners/userById/:id_user`, (request, response) => { return findByIdUserOwnerFactory().handle(request, response) } )
router.get(`/api/v1/owners/byIdentity/:identity`, (request, response) => { return findByIdentityOwnerFactory().handle(request, response) } )
router.put(`/api/v1/owners/:id`, (request, response) => { return updateOwnerFactory().handle(request, response) } )
router.delete(`/api/v1/owners/:id`, (request, response) => { return deleteOwnerFactory().handle(request, response) } )

//* Payments Routes *//
router.post(`/api/v1/payments`, (request, response) => { return createPaymentFactory().handle(request, response) } )
router.get(`/api/v1/payments`, (request, response) => { return findAllPaymentsFactory().handle(request, response) } )
router.get(`/api/v1/payments/:id`, (request, response) => { return findByIdPaymentFactory().handle(request, response) } )
router.get(`/api/v1/payments/ByOrder/:id_order`, (request, response) => { return findByOrderPaymentFactory().handle(request, response) } )
router.put(`/api/v1/payments/:id`, (request, response) => { return updatePaymentFactory().handle(request, response) } )
router.delete(`/api/v1/payments/:id`, (request, response) => { return deletePaymentFactory().handle(request, response) } )

//* PaymentTypes Routes *//
router.post(`/api/v1/payment_types`, (request, response) => { return createPaymentTypeFactory().handle(request, response) } )
router.get(`/api/v1/payment_types`, (request, response) => { return findAllPaymentTypesFactory().handle(request, response) } )
router.get(`/api/v1/payment_types/:id`, (request, response) => { return findByIdPaymentTypeFactory().handle(request, response) } )
router.get(`/api/v1/payment_types/ByName/:name`, (request, response) => { return findByNamePaymentTypeFactory().handle(request, response) } )
router.put(`/api/v1/payment_types/:id`, (request, response) => { return updatePaymentTypeFactory().handle(request, response) } )
router.delete(`/api/v1/payment_types/:id`, (request, response) => { return deletePaymentTypeFactory().handle(request, response) } )

//* Products Routes *//
router.post(`/api/v1/products`, (request, response) => { return createProductFactory().handle(request, response) } )
router.get(`/api/v1/products`, (request, response) => { return findAllProductsFactory().handle(request, response) } )
router.get(`/api/v1/products/:id`, (request, response) => { return findByIdProductFactory().handle(request, response) } )
router.get(`/api/v1/products/ByCategory/:id_category`, (request, response) => { return findByCategoryProductFactory().handle(request, response) } )
router.put(`/api/v1/products/:id`, (request, response) => { return updateProductFactory().handle(request, response) } )
router.delete(`/api/v1/products/:id`, (request, response) => { return deleteProductFactory().handle(request, response) } )

//* ProductImages Routes *//
router.post(`/api/v1/product_images`, (request, response) => { return createProductImageFactory().handle(request, response) } )
router.get(`/api/v1/product_images`, (request, response) => { return findAllProductImagesFactory().handle(request, response) } )
router.get(`/api/v1/product_images/:id`, (request, response) => { return findByIdProductImageFactory().handle(request, response) } )
router.get(`/api/v1/product_images/ByProduct/:id_product`, (request, response) => { return findByProductImagesFactory().handle(request, response) } )
router.put(`/api/v1/product_images/:id`, (request, response) => { return updateProductImageFactory().handle(request, response) } )
router.delete(`/api/v1/product_images/:id`, (request, response) => { return deleteProductImageFactory().handle(request, response) } )

//* Shopies Routes *//
router.post(`/api/v1/shopies`, (request, response) => { return createShopFactory().handle(request, response) } )
router.get(`/api/v1/shopies`, (request, response) => { return findAllShopiesFactory().handle(request, response) } )
router.get(`/api/v1/shopies/:id`, (request, response) => { return findByIdShopFactory().handle(request, response) } )
router.get(`/api/v1/shopies/ByOwner/:id_owner`, (request, response) => { return findByOwnerShopFactory().handle(request, response) } )
router.get(`/api/v1/shopies/ByAddress/:id_address`, (request, response) => { return findByAddressShopFactory().handle(request, response) } )
router.put(`/api/v1/shopies/:id`, (request, response) => { return updateShopFactory().handle(request, response) } )
router.delete(`/api/v1/shopies/:id`, (request, response) => { return deleteShopFactory().handle(request, response) } )

//* ProductShopies Routes *//
router.post(`/api/v1/product_shopies`, (request, response) => { return createProductShopFactory().handle(request, response) } )
router.get(`/api/v1/product_shopies`, (request, response) => { return findAllProductShopiesFactory().handle(request, response) } )
router.get(`/api/v1/product_shopies/:id`, (request, response) => { return findByIdProductShopFactory().handle(request, response) } )
router.get(`/api/v1/product_shopies/ByShop/:id_shop`, (request, response) => { return findByShopProductShopFactory().handle(request, response) } )
router.put(`/api/v1/product_shopies/:id`, (request, response) => { return updateProductShopFactory().handle(request, response) } )
router.delete(`/api/v1/product_shopies/:id`, (request, response) => { return deleteProductShopFactory().handle(request, response) } )

//* ProductShopOrders Routes *//
router.post(`/api/v1/productShop_orders`, (request, response) => { return createProductShopOrderFactory().handle(request, response) } )
router.get(`/api/v1/productShop_orders`, (request, response) => { return findAllProductShopOrdersFactory().handle(request, response) } )
router.get(`/api/v1/productShop_orders/:id`, (request, response) => { return findByIdProductShopOrderFactory().handle(request, response) } )
router.get(`/api/v1/productShop_orders/ByOrder/:id_order`, (request, response) => { return findByOrderProductShopOrderFactory().handle(request, response) } )
router.put(`/api/v1/productShop_orders/:id`, (request, response) => { return updateProductShopOrderFactory().handle(request, response) } )
router.delete(`/api/v1/productShop_orders/:id`, (request, response) => { return deleteProductShopOrderFactory().handle(request, response) } )

export { router }
