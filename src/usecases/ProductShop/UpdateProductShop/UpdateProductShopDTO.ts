
export interface IUpdateProductShopRequest {
  id_shop: string;
  id_product: string;
}

export interface IUpdateProductShop extends IUpdateProductShopRequest {
  id: string;
  created_at: Date;
}
