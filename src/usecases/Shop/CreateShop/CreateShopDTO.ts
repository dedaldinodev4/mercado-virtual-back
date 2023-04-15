
export interface ICreateShopRequest {
  name: string;
  id_address: string;
  id_owner: string;
}

export interface ICreateShop extends ICreateShopRequest {
  id: string;
  created_at: Date;
}
