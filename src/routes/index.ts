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


export { router }
