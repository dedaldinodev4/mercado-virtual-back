
export interface IUpdateOwnerRequest{
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
}

export interface IUpdateOwner extends IUpdateOwnerRequest {
  id: string;
  id_user: string;
  created_at: Date;  
}


export interface ICustomerUpdateRequest{
  firstName: string;
  lastName: string; 
  identity: string; 
  dateBorn: Date;
}