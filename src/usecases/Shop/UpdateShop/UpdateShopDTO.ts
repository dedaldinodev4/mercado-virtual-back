
export interface IUpdateShopRequest {
  name: string;
  id_address: string;
}

export interface IUpdateShop extends IUpdateShopRequest {
  id: string;
  id_owner: string;
  created_at: Date;
}
