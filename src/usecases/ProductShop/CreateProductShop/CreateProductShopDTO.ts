
export interface ICreateProductShopRequest {
  id_product: string;
  id_shop: string;
}

export interface ICreateProductShop extends ICreateProductShopRequest {
  id: string;
  created_at: Date;
}
