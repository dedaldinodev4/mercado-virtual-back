import { IBaseDTO } from "./Base";


export interface IPhone extends IBaseDTO {
  number: string | null;
  id_user: string;
}

export interface IPhoneRequest {
  number?: string;
  id_user: string;
}

export interface IPhoneUpdateRequest {
  number?: string; 
}