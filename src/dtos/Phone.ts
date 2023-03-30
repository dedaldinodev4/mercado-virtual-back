import { IBaseDTO } from "./Base";


export interface IPhone extends IBaseDTO, IPhoneRequest {}

export interface IPhoneRequest {
  number: string;
  id_user: string;
}

export interface IPhoneUpdateRequest {
  number: string; 
}