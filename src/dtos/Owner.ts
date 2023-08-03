import { IBaseDTO } from "./Base"

export interface IOwner extends IBaseDTO {
  firstName: string | null;
  lastName: string | null; 
  identity: string | null; 
  dateBorn: Date | null;
  gender: string | null;
  id_user: string; 
}

export interface IOwnerRequest{
  firstName?: string;
  lastName?: string; 
  identity?: string; 
  dateBorn?: Date;
  gender: string | null;
  id_user: string;  
}

export interface IOwnerUpdateRequest{
  firstName?: string;
  lastName?: string; 
  identity?: string; 
  dateBorn?: Date;
  gender: string | null;
}
