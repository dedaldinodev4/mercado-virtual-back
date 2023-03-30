import { IBaseDTO } from "./Base";

export interface IDevely extends IBaseDTO, IDevelyRequest {}

export interface IDevelyRequest {
  location: string;
  status: string;
  id_order: string;
}

export interface IDevelyUpdateRequest {
  location: string;
  status: string;
}

