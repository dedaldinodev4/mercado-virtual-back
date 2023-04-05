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

//* Addresses Routes*//
router.post(`/api/v1/addresses`, (request, response) => { return createAddressFactory().handle(request, response) } )
router.get(`/api/v1/addresses`, (request, response) => { return findAllAddressesFactory().handle(request, response) } )
router.get(`/api/v1/addresses/:id`, (request, response) => { return findByIdAddressFactory().handle(request, response) } )
router.get(`/api/v1/addresses/userById/:id_user`, (request, response) => { return findByIdUserAddressFactory().handle(request, response) } )
router.put(`/api/v1/addresses/:id`, (request, response) => { return updateAddressFactory().handle(request, response) } )
router.delete(`/api/v1/addresses/:id`, (request, response) => { return deleteAddressFactory().handle(request, response) } )


export { router }
