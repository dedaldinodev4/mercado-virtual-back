import { IBaseDTO } from "./Base"

export interface IAddress extends IBaseDTO, IAddressRequest{}

export interface IAddressRequest{
  city: string;
  contry: string; 
  hood: string; 
  postal_code: string;
  id_user: string;  
}

export interface IAddressUpdateRequest{
  city: string;
  contry: string; 
  hood: string; 
  postal_code: string;
}
