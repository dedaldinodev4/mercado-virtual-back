

export interface IProductShopOrder {
  id: string;
  id_order: string;
  id_productShop: string;
}

export interface IProductShopOrderRequest {
  id_order: string;
  id_productShop: string;
}

export interface IProductShopOrderArrayRequest {
  products: string[];
  id_order: string;
}