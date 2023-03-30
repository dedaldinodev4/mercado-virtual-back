import { IBaseDTO } from "./Base"

export interface IOwner extends IBaseDTO, IOwnerRequest{}

export interface IOwnerRequest{
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
  id_user: string;  
}

export interface IOwnerUpdateRequest{
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
}
