import { IBaseDTO } from "./Base"

export interface IAddress extends IBaseDTO {
  city: string | null;
  contry: string; 
  hood: string | null; 
  postal_code: string | null;
  id_user: string;  
}

export interface IAddressRequest extends IAddressUpdateRequest{
  id_user: string;  
}

export interface IAddressUpdateRequest{
  city?: string;
  contry: string; 
  hood?: string; 
  postal_code?: string;
}
