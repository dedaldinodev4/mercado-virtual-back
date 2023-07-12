import { IBaseDTO } from "./Base"

export interface ICustomer extends IBaseDTO, ICustomerRequest{}

export interface ICustomerRequest{
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
  gender: string | null;
  id_customerType: string; 
  id_user: string;  
}

export interface ICustomerUpdateRequest{
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
  gender: string | null;
}
