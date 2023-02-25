-- CreateTable
CREATE TABLE "_users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_addresses" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "contry" TEXT NOT NULL,
    "hood" TEXT NOT NULL,
    "postal_code" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_phones" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_phones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_discounts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "percent" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "starts_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ends_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_category" TEXT NOT NULL,
    "id_discount" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_customers" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "idenntity" TEXT NOT NULL,
    "dateBorn" DATE NOT NULL,
    "id_customerType" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_order" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_customers_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_customers_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_orders" (
    "id" TEXT NOT NULL,
    "id_session" TEXT NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "totalDiscount" DECIMAL(65,30) NOT NULL,
    "token" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "id_customer" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_payments" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "id_paymentType" TEXT NOT NULL,
    "id_order" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_payments_types" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "id_payment" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_payments_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_owners" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "idenntity" TEXT NOT NULL,
    "dateBorn" DATE NOT NULL,
    "id_user" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_shoppies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "id_address" TEXT NOT NULL,
    "id_owner" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_shoppies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_products_shoppies" (
    "id" TEXT NOT NULL,
    "id_shop" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_products_shoppies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_carts" (
    "id" TEXT NOT NULL,
    "id_session" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "id_customer" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_delives" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "id_order" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_delives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_product_shop_orders" (
    "id" TEXT NOT NULL,
    "id_order" TEXT NOT NULL,
    "id_productShop" TEXT NOT NULL,

    CONSTRAINT "_product_shop_orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "_users_email_key" ON "_users"("email");

-- AddForeignKey
ALTER TABLE "_addresses" ADD CONSTRAINT "_addresses_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_phones" ADD CONSTRAINT "_phones_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_products" ADD CONSTRAINT "_products_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_products" ADD CONSTRAINT "_products_id_discount_fkey" FOREIGN KEY ("id_discount") REFERENCES "_discounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_customers" ADD CONSTRAINT "_customers_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_customers" ADD CONSTRAINT "_customers_id_customerType_fkey" FOREIGN KEY ("id_customerType") REFERENCES "_customers_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_orders" ADD CONSTRAINT "_orders_id_customer_fkey" FOREIGN KEY ("id_customer") REFERENCES "_customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_payments" ADD CONSTRAINT "_payments_id_paymentType_fkey" FOREIGN KEY ("id_paymentType") REFERENCES "_payments_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_payments" ADD CONSTRAINT "_payments_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_owners" ADD CONSTRAINT "_owners_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_shoppies" ADD CONSTRAINT "_shoppies_id_address_fkey" FOREIGN KEY ("id_address") REFERENCES "_addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_shoppies" ADD CONSTRAINT "_shoppies_id_owner_fkey" FOREIGN KEY ("id_owner") REFERENCES "_owners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_products_shoppies" ADD CONSTRAINT "_products_shoppies_id_shop_fkey" FOREIGN KEY ("id_shop") REFERENCES "_shoppies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_products_shoppies" ADD CONSTRAINT "_products_shoppies_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_carts" ADD CONSTRAINT "_carts_id_customer_fkey" FOREIGN KEY ("id_customer") REFERENCES "_customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_delives" ADD CONSTRAINT "_delives_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_product_shop_orders" ADD CONSTRAINT "_product_shop_orders_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_product_shop_orders" ADD CONSTRAINT "_product_shop_orders_id_productShop_fkey" FOREIGN KEY ("id_productShop") REFERENCES "_products_shoppies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
