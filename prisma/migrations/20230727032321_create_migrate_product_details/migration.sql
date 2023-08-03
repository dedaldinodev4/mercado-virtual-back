-- CreateTable
CREATE TABLE "_product_details" (
    "id" TEXT NOT NULL,
    "processor" TEXT,
    "screen" TEXT,
    "operating_system" TEXT,
    "ram" TEXT,
    "ssd" TEXT,
    "ports" TEXT,
    "graphic" TEXT,
    "warranty" TEXT,
    "back_camera" TEXT,
    "front_camera" TEXT,
    "battery" TEXT,
    "frequency_response" TEXT,
    "microphone" BOOLEAN,
    "wireless" BOOLEAN,
    "wireless_standby_time" BOOLEAN,
    "connectionType" TEXT,
    "connectors" TEXT,
    "bluetooth" BOOLEAN,
    "noise_cancelling" BOOLEAN,
    "sound_isolating" BOOLEAN,
    "id_product" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_product_details_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "_product_details" ADD CONSTRAINT "_product_details_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
