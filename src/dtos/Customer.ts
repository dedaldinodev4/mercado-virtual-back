import { IBaseDTO } from "./Base"

export interface ICustomer extends IBaseDTO {
  firstName: string | null;
  lastName: string | null; 
  identity: string | null; 
  dateBorn: Date | null;
  gender: string | null;
  id_customerType: string; 
  id_user: string;
}

export interface ICustomerRequest{
  firstName?: string;
  lastName?: string; 
  identity?: string; 
  dateBorn?: Date;
  gender: string | null;
  id_customerType: string; 
  id_user: string;  
}

export interface ICustomerUpdateRequest{
  firstName?: string;
  lastName?: string; 
  identity?: string; 
  dateBorn?: Date;
  gender: string | null;
}
