

export interface ICreateOwnerRequest{
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
  id_user: string;
}

export interface ICreateOwner extends ICreateOwnerRequest{
  id: string;
  created_at: Date;  
}