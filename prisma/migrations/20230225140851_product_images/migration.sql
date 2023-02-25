-- CreateTable
CREATE TABLE "_product_images" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_product_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "_product_images" ADD CONSTRAINT "_product_images_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
