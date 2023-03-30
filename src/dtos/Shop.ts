import { IBaseDTO } from "./Base";

export interface IShop extends IBaseDTO, IShopRequest {}

export interface IShopRequest {
  name: string;
  id_address: string;
  id_owner: string;
}

export interface IShopUpdateRequest {
  name: string;
  id_address: string;
}

