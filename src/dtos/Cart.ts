import { IBaseDTO } from "./Base";

export interface ICart extends IBaseDTO, ICartRequest {}

export interface ICartRequest {
  id_session: string;
  token: string;
  status: string;
  id_customer: string;
}

export interface ICartUpdateRequest {
  id_session: string;
  token: string;
  status: string;
}

