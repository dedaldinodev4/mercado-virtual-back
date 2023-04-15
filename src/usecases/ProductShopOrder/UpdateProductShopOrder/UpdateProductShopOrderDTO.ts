
export interface IUpdateProductShopOrderRequest {
  id_order: string;
  id_productShop: string;
}

export interface IUpdateProductShopOrder extends IUpdateProductShopOrderRequest {
  id: string;
}
