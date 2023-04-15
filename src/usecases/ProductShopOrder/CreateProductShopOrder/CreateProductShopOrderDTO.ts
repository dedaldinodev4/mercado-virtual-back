
export interface ICreateProductShopOrderRequest {
  id_productShop: string;
  id_order: string;
}

export interface ICreateProductShopOrder extends ICreateProductShopOrderRequest {
  id: string;
}
